import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";

const root = process.cwd();
const read = (p) => fs.readFileSync(path.join(root, p), "utf8");
const required = [
  "index.html",
  "rcbid/index.html",
  "get-started/index.html",
  "products-services/index.html",
  "ventures/rcbid-fund/index.html",
  "robots.txt",
  "sitemap.xml",
];
for (const file of required) assert(fs.existsSync(path.join(root, file)), "Missing " + file);
const landing = read("index.html");
const product = read("rcbid/index.html");
const onboarding = read("get-started/index.html");
const services = read("products-services/index.html");
const venture = read("ventures/rcbid-fund/index.html");
const pages = [landing, product, onboarding, services, venture];

for (const [i, html] of pages.entries()) {
  const page = required[i] ?? "page-" + i;
  assert.match(html, /<meta name="viewport"[^>]*>/, page + " missing viewport");
  assert(!/human.review(?:ed)?|bounded human review/i.test(html), page + " still promises obsolete Scan human review");
  assert(!/\$27(?:\s*CAD)?(?:\/month|\s*FIND)|30 (?:consecutive )?complimentary days/i.test(html), page + " uses legacy subscription terms");
}
assert(product.includes('href="https://rcbidintel.one/"'), "Missing actual existing venture-site route");
assert(product.includes("not independently verified"), "Venture link must disclose unavailable admission");
assert(onboarding.includes("fully automated") && onboarding.includes("not yet passed production acceptance"), "Onboarding must accurately describe automated future service and current hold");
assert(services.includes("without routine human review"), "Products and services must match current automated Scan");
assert(venture.includes("automatic evidence hold"), "Venture overview must not claim a routine human reviewer");
assert(landing.includes('href="/get-started/"'), "Corporate homepage must have a safe customer entry point");
assert(read("robots.txt").includes("Sitemap: https://rcemporium.ca/sitemap.xml"), "Corporate sitemap reference mismatch");

const paths = [];
function scan(folder) {
  for (const entry of fs.readdirSync(path.join(root, folder), { withFileTypes: true })) {
    if (entry.name.startsWith(".") || ["node_modules", "docs", "assets", "scripts"].includes(entry.name)) continue;
    const rel = path.join(folder, entry.name);
    if (entry.isDirectory()) scan(rel);
    else if (rel.endsWith(".html")) paths.push(rel);
  }
}
scan(".");
const missing = [];
for (const file of paths) {
  const source = read(file);
  for (const match of source.matchAll(/\bhref=["'](\/[^"'#?]*)(?:[?#][^"']*)?["']/g)) {
    const route = match[1];
    const destination = path.join(root, route.replace(/^\/+/, ""));
    const target = route === "/" ? path.join(root, "index.html")
      : fs.existsSync(destination) && fs.statSync(destination).isDirectory()
        ? path.join(destination, "index.html") : destination;
    if (!fs.existsSync(target)) missing.push(file + " => " + route);
  }
}
if (missing.length) throw new Error("Unresolved corporate internal links:\n" + missing.join("\n"));
console.log("CORPORATE_SITE_CONTRACT_PASS: " + paths.length + " HTML pages: known routes, corporate-to-RCBID handoff, approved automated Scan terms, no obsolete pricing");
