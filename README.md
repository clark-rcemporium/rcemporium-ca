# RC Emporium Technologies Inc. — Corporate Headquarters

**Domain:** rcemporium.ca  
**Repository:** clark-rcemporium/rcemporium-ca  
**Hosting:** Vercel  
**Status:** Deployed to Vercel; custom `.ca` domains are registered with Vercel but await GoDaddy DNS verification.
**Purpose:** Official corporate headquarters website for RC Emporium Technologies Inc.

## Current Operating Message

**Software revenue first. Deep-tech commercialization next.**

The homepage prioritizes the current revenue-first RCBID / FUND AI offer while keeping RC Emporium's longer-horizon clean-tech work visible as part of the company portfolio.

## Primary Revenue Offer

- **$47 CAD — Found Money Scan**
- **$97 CAD — Funding + Bid Readiness Audit**
- **$297 CAD — Opportunity Action Report**

Canonical RCBID route: `/rcbid/` → https://rcbidintel.one

## Website Structure

- **Hero:** Revenue-first company positioning + $47 Found Money Scan CTA
- **Offer Ladder:** $47 / $97 / $297 progression
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

Add the current Vercel verification records at the GoDaddy DNS provider, replace legacy GoDaddy forwarding to the unassigned `rcemporium.manus.space` hostname with Vercel's required A/CNAME records, and then verify the domain/SSL status in Vercel. Until that is complete, the canonical `rcemporium.ca` domain is not an operational public endpoint.

## Ecosystem Route

`/ecosystem` is a reversible Vercel redirect to the existing `/#portfolio` section. This preserves a single parent-site information architecture while giving integrated RC Emporium products a valid ecosystem return path once the custom domain is verified.
