// Chromium mobile-viewport QA of existing public corporate pages; no account/payment mutation.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import {spawn} from "node:child_process";
const root=process.cwd(), port=4177, cdport=9227;
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const assert=(x,message)=>{if(!x)throw Error("MOBILE_QA_FAIL "+message)};
const server=http.createServer((req,res)=>{
 const p=decodeURIComponent(new URL(req.url,"http://localhost").pathname);
 const file=path.resolve(root,"."+p);
 if(file!==root&&!file.startsWith(root+path.sep)){res.writeHead(403).end();return;}
 let target=file;
 try{if(fs.statSync(target).isDirectory())target=path.join(target,"index.html");}
 catch{res.writeHead(404).end();return;}
 try{res.writeHead(200,{"content-type":target.endsWith(".html")?"text/html":target.endsWith(".css")?"text/css":"application/octet-stream"});fs.createReadStream(target).pipe(res);}catch{res.writeHead(404).end();}
});
await new Promise(resolve=>server.listen(port,"127.0.0.1",resolve));
const chrome=spawn(process.env.CHROME_BIN||"google-chrome",["--headless=new","--no-sandbox","--disable-gpu","--disable-dev-shm-usage","--no-first-run","--remote-debugging-port="+cdport,"--user-data-dir=/tmp/rcemporium-mobile-qa-"+process.pid,"about:blank"],{stdio:["ignore","ignore","pipe"]});
let stderr="";chrome.stderr.on("data",x=>stderr+=x.toString().slice(0,1000));
async function until(fn,label){
 for(let i=0;i<80;i++){try{const v=await fn();if(v)return v;}catch{}await sleep(200);}
 throw Error("Timeout: "+label);
}
let page;
try{
 const ws=await until(async()=>{const r=await fetch("http://127.0.0.1:"+cdport+"/json/list");const a=await r.json();return a.find(x=>x.type==="page")?.webSocketDebuggerUrl;},"Chrome devtools");
 page=await new Promise((resolve,reject)=>{
  const socket=new WebSocket(ws),pending=new Map();let count=0;
  socket.onopen=()=>resolve({
   send(method,params={}){return new Promise((res,rej)=>{const id=++count;pending.set(id,{res,rej});socket.send(JSON.stringify({id,method,params}));});},
   close(){socket.close();}
  });
  socket.onerror=()=>reject(Error("Chrome socket failure"));
  socket.onmessage=message=>{const d=JSON.parse(String(message.data));if(!pending.has(d.id))return;const p=pending.get(d.id);pending.delete(d.id);d.error?p.rej(Error(JSON.stringify(d.error))):p.res(d.result);};
 });
 await page.send("Page.enable");await page.send("Runtime.enable");
 async function js(expression){const r=await page.send("Runtime.evaluate",{expression,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw Error("JS exception "+JSON.stringify(r.exceptionDetails));return r.result?.value;}
 async function go(route){
  await page.send("Page.navigate",{url:"http://127.0.0.1:"+port+route});
  await until(async()=>await js("location.pathname==="+JSON.stringify(route)+" && document.readyState==='complete'"),route);
  await sleep(150);
 }
 const routes=["/","/get-started/","/rcbid/","/products-services/","/ventures/rcbid-fund/","/contact/"];
 for(const width of [390,320]){
  await page.send("Emulation.setDeviceMetricsOverride",{width,height:844,deviceScaleFactor:2,mobile:true});
  await page.send("Emulation.setTouchEmulationEnabled",{enabled:true,maxTouchPoints:1});
  for(const route of routes){
   await go(route);
   const data=await js("({width:innerWidth,scroll:document.documentElement.scrollWidth,heading:document.querySelector('h1')?.innerText||''})");
   assert(data.width===width,"viewport "+data.width+" expected "+width);
   if(data.scroll>width+2){const offenders=await js("Array.from(document.querySelectorAll('body *')).filter(e=>getComputedStyle(e).display!=='none'&&e.getBoundingClientRect().right>innerWidth+2).slice(0,15).map(e=>({tag:e.tagName,cls:typeof e.className==='string'?e.className.slice(0,85):'',right:Math.round(e.getBoundingClientRect().right)}))");console.error("OVERFLOW_ELEMENTS",width,route,JSON.stringify(offenders));}
   assert(data.scroll<=width+2,"horizontal overflow "+route+" width="+width+" scroll="+data.scroll);
   assert(data.heading.length>0,"missing heading "+route);
   if(route==="/"){
    assert(await js("!!document.querySelector('details.mobile-nav summary') && !document.querySelector('details.mobile-nav').open"),"hamburger hidden initially");
    await js("document.querySelector('details.mobile-nav summary').click()");
    assert(await js("document.querySelector('details.mobile-nav').open"),"hamburger did not expand");
    const h=await js("document.querySelector('.mobile-links a[href=\"/get-started/\"]').getBoundingClientRect().height");
    assert(h>=43,"onboarding touch link too small "+h);
    await js("document.querySelector('.mobile-links a[href=\"/get-started/\"]').click()");
    await until(async()=>await js("location.pathname==='/get-started/'"),"onboarding navigation");
   }
   if(route==="/rcbid/")assert(await js("!!document.querySelector('a[href=\"https://rcbidintel.one/\"]')"),"missing original RCBID domain link");
   if(route==="/get-started/"){
    assert(await js("document.body.innerText.includes('fully automated')"),"automated Scan promise missing");
    assert(await js("document.body.innerText.includes('does not collect orders or payments')"),"payment warning missing");
   }
   console.log("CORPORATE_MOBILE_PASS width="+width+" route="+route);
  }
 }
}catch(e){console.error(e.message);console.error(stderr.slice(-1400));process.exitCode=1;}
finally{page?.close();chrome.kill("SIGTERM");server.close();}
