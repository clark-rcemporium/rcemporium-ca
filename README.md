# RC Emporium Technologies Inc. — Corporate Headquarters

**Domain:** rcemporium.ca  
**Repository:** clark-rcemporium/rcemporium-ca  
**Hosting:** Vercel  
**Status:** Deployed to Vercel; custom `.ca` domains are registered with Vercel but await GoDaddy DNS verification.
**Purpose:** Official corporate headquarters website for RC Emporium Technologies Inc.

## Current Operating Message

**Software revenue first. Deep-tech commercialization next.**

The homepage prioritizes RCBID + FUND while keeping longer-horizon clean-tech work visible. This is a marketing surface; its release claims are governed by the current ARCEE STATUS and payment/provider evidence.

## Current commercial offers (governance, not release proof)

**Authority:** [ARCEE canonical commercial model v6](https://github.com/clark-rcemporium/arcee/blob/main/docs/canonical/COMMERCIAL_MODEL_2026-10-07.md) (October 18/24 amendments control over older passages), with current release state separately tracked in [ARCEE STATUS](https://github.com/clark-rcemporium/arcee/blob/main/docs/canonical/STATUS.md).

| Offer | Approved commercial terms | Release boundary |
| --- | --- | --- |
| Found Money Scan | CAD $47 one-time + applicable tax; **future automated/no-routine-human-review terms** | Do not enable/promote checkout before verified signed paid→intake→official-source QA→buyer-private delivery→replay/refund/cross-tenant denial and approved release; older human-reviewed buyers retain their rights |
| FIND | CAD $47/month or $470/year + tax; 7-day **card-on-file** trial | Approved offer, **production checkout/entitlement HOLD** until provider-backed lifecycle acceptance |
| PURSUE | CAD $97/month or $970/year + tax; 7-day **card-on-file** trial | Approved offer, **production checkout/entitlement HOLD** |
| ACTION | CAD $297/month + tax | **COMING SOON**; no checkout or entitlement |

Earlier one-time CAD $97 Funding + Bid Readiness Audit and CAD $297 Opportunity Action Report copy is **historical** and must not be used as the current launch pricing ladder without a newer founder decision. Public sites must not reuse 14-day/no-card trials, legacy all-access bundles or unverified Stripe links.

**One offer, one authoritative payment destination:** Corporate/legacy Manus pages may link to a single provider-confirmed canonical offer route for a priced plan, with non-sensitive UTM attribution, **only when it is verified and approved**. Keep the existing RCBID app as the product survivor and preserve historical sites/data until source+row+uploads and customer rights have been tested.

Current internal product overview: `/rcbid/`. The fact that a product or pricing page is publicly reachable does **not** prove customer signup, payment, fulfillment or release readiness.

## Website Structure

- **Hero:** Revenue-first company positioning + $47 Found Money Scan CTA
- **Commercial section:** one-time automated Scan and FIND/PURSUE recurring offers, with explicit unreleased checkout status
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


## Historical Manus Website Consolidation — Preservation First (2026-11-08)

Use the **existing** [CIL Manus-only recovery queue](https://github.com/clark-rcemporium/rc-emporium-cil/blob/main/migration/manus-exit/manus_only_recovery_queue.md) and [review PR #20](https://github.com/clark-rcemporium/rc-emporium-cil/pull/20) for the historical 80 website variants/12 families. This is not 80 verified live websites or a complete owner-source export.

- **Corporate survivor:** this repository/site; do not construct a second corporate hub.
- **Commercial survivor:** original `RC-EMPORIUM/rcbid-fund-ultimate` app; its PR #2 **source merge** was verified 2026-11-08 (merge SHA `efac51ffa5332410845083c474e481e69aeebeee`), but exact-merge CI, backend restore, tenant isolation, signed payment and live release remain **HOLD**.
- **Operations survivor:** canonical ARCEE, with CIL the evidence/asset register, not another customer app.
- **Specialized products:** retain original NoBrainer, Invoice AI, Reader, IP/InventorOS and research-family data/services until unique capability and customer dependencies are proven. Do not collapse independent auth/databases or expose private materials on this site.
- **Legacy public risk:** historical `*.manus.space` sites display incompatible trials, prices, bundles and in some cases live payment links; remove/promote/redirect only after original ownership, terms, private data and rollback have been confirmed and release approved. Do not invent customers, results or current functionality.

**Pass order:** identify exact owner site/task IDs → export and verify source/version/checkpoints → preserve database rows and uploads separately → match unique capability → design isolated reuse → test and rollback → obtain production approval. The private Manus account is not yet authenticated through this ChatGPT session. No live website or payment mutation is authorized by this README.
