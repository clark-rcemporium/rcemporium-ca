# RC Emporium Technologies Inc. — Corporate Headquarters

**Domain:** rcemporium.ca  
**Repository:** clark-rcemporium/rcemporium-ca  
**Hosting:** Vercel  
**Status:** Deployed to Vercel; custom `.ca` domains are registered with Vercel but await GoDaddy DNS verification.
**Purpose:** Official corporate headquarters website for RC Emporium Technologies Inc.

## Current Operating Message

**Software revenue first. Deep-tech commercialization next.**

The homepage prioritizes the current revenue-first RCBID / FUND AI offer while keeping RC Emporium's longer-horizon clean-tech work visible as part of the company portfolio.

## Current RCBID + FUND Offer and Authority

- **CAD $47 one-time — Found Money Scan:** founder-approved **fully automated**, source-linked scan with machine quality checks and no routine human review. In-app automated payment, intake and private report delivery are **not yet production-verified**.
- **FIND:** CAD $47/month or CAD $470/year. Card-on-file seven-day trial, checkout **HOLD** until original database, OAuth, Stripe lifecycle and entitlements pass.
- **PURSUE:** CAD $97/month or CAD $970/year, subject to the same verification gates.
- **ACTION:** CAD $297/month, **Coming Soon** — no purchase.
- **Corporate customer entry:** `/get-started/` accurately explains availability and collects **no** payments or credentials.
- **Dedicated venture domain:** https://rcbidintel.one — existing separately hosted venture site; **not attached** to the tested Vercel RCBID project, and should not be pointed there until provider ownership, original data export/restoration, OAuth and account linkage have been verified.

These values supersede older $97 readiness-audit / $297 report-led public entry ladders. Follow `clark-rcemporium/arcee/docs/canonical/README.md` and the October 18 automated-Scan amendment in `COMMERCIAL_MODEL_2026-10-07.md`. Historical offers may remain as evidence but are not today's default subscriptions or fulfilment promises.

## Website Structure

- **Hero:** Revenue-first company positioning and safe `/get-started/` route
- **Offer ladder:** optional CAD $47 automated Scan; FIND CAD $47/month, PURSUE CAD $97/month, ACTION Coming Soon
- **Company:** Capital-efficient operating strategy
- **Portfolio:** RCBID & FUND, AI/venture infrastructure, longer-horizon clean-tech engineering
- **Contact:** RC Emporium Technologies Inc., Winnipeg, Manitoba

## Design

- **Brand Colors:** Deep Navy `#2C3957`, Metallic Gold `#CBB26A`
- **Responsive:** Mobile-first responsive layout
- **Accessibility:** Semantic structure, visible focus states, responsive controls
- **SEO:** Canonical URL, description, Open Graph metadata, robots metadata

## Deployment

The GitHub repository is connected to the Vercel project `rcemporium-ca`. Commits to the production branch deploy automatically.

The Vercel deployment is healthy, but `rcemporium.ca` and `www.rcemporium.ca` must be added to the Vercel project's Domains settings before the public `.ca` address will serve this site.

## Remaining Domain Step

The `rcemporium-ca` Vercel project has the required domains registered:

1. `rcemporium.ca`
2. `www.rcemporium.ca`

**Provider verified October 20, 2026:** GoDaddy still serves the apex through forwarding A records `3.33.251.168` / `15.197.225.128`; `www` CNAME is still `cname.manus.space.`. Vercel reports **both corporate custom domains unverified**. Required operator action: preserve email MX/SPF/DKIM/DMARC, disable conflicting GoDaddy website forwarding, use the **current per-project A/CNAME recommendations displayed by Vercel**, and add the separate apex and www TXT ownership-verification challenges to GoDaddy DNS. Do not change RCBID's independent nameservers or public host as part of this corporate DNS operation. After DNS propagation, verify apex, www, TLS, intended preferred-host redirect, canonical URLs, all corporate routes and the outbound `/rcbid/` link. There is no connected GoDaddy DNS-write tool in this workspace, so this remains an owner-executed DNS step, not a completed change.

## Ecosystem Route

`/ecosystem` is a reversible Vercel redirect to the existing `/#portfolio` section. This preserves a single parent-site information architecture while giving integrated RC Emporium products a valid ecosystem return path once the custom domain is verified.
