# Pest Heroes Website: Build Handoff

Updated 2026-10-07 (Section 8 first pass). This replaces the earlier spec file. Re-read before every session. Work one section at a time, then stop for re-audit.

## Goal
Ship the Pest Heroes static site (Hampton Roads pest control) to production. Keep the static HTML/CSS/JS architecture, no framework. Reskin and rewrite so it is unmistakably Pest Heroes and unmistakably Hampton Roads.

## Finished and verified
- Sections 2 through 6 passed audit.
- Section 7: Google Ads base tag AW-17631733509, plus the google-site-verification and msvalidate.01 meta tags, added to all 33 pages. GA4 skipped (no measurement ID exists). generate_lead fires on /thank-you load and on successful inline form submit. Re-audited 2026-10-07 against the live preview via vercel curl: 33/33 pages carry all three tags, /js/main.js carries generate_lead, /thank-you renders it, all 33 pages return 200.
- Section 6: clean URLs, nine redirects, canonical tags, sitemap. Verified live on the preview.

## In progress
Section 8 (proof), first pass done 2026-10-07:
- Field log: "This Week in the Field" is now live on the homepage and reads field-log.json. Six entries use six real Pest Heroes field photos extracted from PestHeroesPics_images_only.zip and optimized into /images/field/. No invented findings, no fabricated neighborhoods.
- Stock photo removal: the five live stock photos were replaced with real field photos and the stock files deleted (now 404 and unreferenced): termite-damage.jpg, house-exterior.jpg, technician-spraying.jpg, crawlspace-entrance.jpg, rat-in-house.jpg. New hero images: live-termite-damage.jpg, rodent-foundation-entry.jpg, crawlspace-duct-moisture.jpg, wood-framing-damage.jpg, foundation-vent-damage.jpg.
- Team and Reviews sections are held back (commented out, headings included) per the Oct 7 audit round: no [TODO] placeholder and no .todo-note block renders anywhere, and zero visible "TODO" text on all 33 pages. No invented content.
- Forms now post as a normal full page POST to Zoho (hidden iframe removed). returnURL is set to https://www.pestheroes.com/thank-you on both forms. generate_lead fires only on /thank-you. Honeypots and required-field validation kept. No test leads submitted.
- Verified on the live preview: field-log.json serves six entries, all eleven new images return 200, all five removed stock images return 404, and the homepage source carries the field-log grid.

Section 9 assets still missing: reviews, team, legal entity, offer, Ads conversion label. (Field photos are now supplied and used.)

## Exact next step
Troy and Claude run the Zoho form test. Troy to supply 6 to 8 real Google reviews plus real team names, roles, and photos. Then finish Section 8 by building the team and reviews sections with that real content, and re-audit Section 8.

## Files that matter
index.html, thank-you.html, js/main.js, css/style.css, vercel.json, sitemap.xml, robots.txt, field-log.json, images/pete/pete-hero.webp, images/field/*.jpg. 33 HTML files total (21 top level, 12 in post/).

## Deploy
Vercel project pestheroes. Token stored as VERCEL_TOKEN in ~/.hermes/.env. Preview builds use vercel deploy with no --prod flag. Latest Section 8 preview: pestheroes-8ms0te0g9-troy-pappas-projects.vercel.app. Preview URLs sit behind Vercel Deployment Protection: fetch with `vercel curl <path> --deployment <url>`, not plain curl, or you get the auth wall instead of the page.

## Tried that failed
First Vercel deploy was auto-classified Production (new-project platform behavior); left alone per instruction. Local python http.server cannot emulate Vercel cleanUrls, so clean-URL 200s are verifiable only on Vercel. video_analyze threw brotli decode errors. Terminal blocked some compound commands and heredocs; ran them separately. Plain curl to a protected preview URL returns the Deployment Protection page, not the site.

## Not verified
Zoho redirect to pestheroes.com/thank-you (a Zoho CRM setting, not in the code). Images under /images/blog/ have no provenance record, so they are unclassified and could still include stock; review them against the no-stock-photography rule before launch. og-image.jpg (referenced in the meta tags) does not exist yet.

## Round after Section 7 audit (2026-10-07, second reviewer pass)
Audit result on preview pestheroes-8ms0te0g9: Section 7 tags pass on 33 of 33 pages. Three fixes applied, then stop:
1. Team and Reviews sections removed from the rendered homepage (commented out, headings included). Zero visible "TODO" text on all 33 pages. The .todo-note CSS block was also removed.
2. Both forms (index.html quote-form, contact.html contact-form) now submit as a full page POST to Zoho. The hidden iframe, the success/error divs, and the inline generate_lead call were removed from js/main.js. returnURL is set to https://www.pestheroes.com/thank-you on both forms. Honeypots and client-side validation kept. No test leads submitted.
3. sitemap.xml: removed the /llms entry (31 URLs remain).

## Contact form field mapping (2026-10-07, third reviewer pass)
Contact form test passed on preview pestheroes-lihg12zo4: both forms deliver to Zoho. One defect fixed: the address and urgency fields used names Zoho discarded. contact.html now uses name="Street" for the address input and name="LEADCF12" for the How Soon select, with option values "", "As Soon as possible", "This week", "Next 2 weeks", "Just exploring". The "Emergency (today)" option was removed (implied same-day service). The hidden inputs, the form action, method, and returnURL were left unchanged, and the homepage form was not touched. js/main.js stale comment updated.

## Final copy fix (2026-10-09, fourth reviewer pass)
Fixed the "20+ years" wording so no claim implies the company has operated for 20 years. All six version-A instances now read "20+ years of combined experience": termite.html meta description, termite.html page header, termite.html feature heading, services.html termite card, about.html meta description, about.html feature. faq.html already used the combined-experience wording and was left unchanged. No em dashes or en dashes. Forms, hidden inputs, action, returnURL, and the service area list were not touched.

Deploy blocker (2026-10-09): the Vercel token in ~/.hermes/.env (vcp_...ITfz) is now rejected for scope troy-pappas-projects: "Not authorized... You must re-authenticate to this scope or use a token with access to this scope." The same token deployed successfully earlier the same day. `vercel whoami` fails with the same error and the CLI is otherwise logged out. No new preview could be produced; the last live preview is pestheroes-ky9w89p6u, which predates this copy fix. Refresh VERCEL_TOKEN (or run `vercel login`) and redeploy to publish it. RESOLVED 2026-10-12: Troy supplied a fresh token, which authenticates (`vercel whoami` = tnpappas). Backed up at ~/.hermes/.env.bak-2026-10-09.

## SEO/AEO audit round (2026-10-12, fifth reviewer pass)
Fixed the asset-independent, unambiguous items from the shared preview-build + SEO/AEO audit:
- LocalBusiness JSON-LD on the homepage: image/logo now point at an existing file (/images/pest-heroes-logo.png, was a 404 logo.png); added @id, logo, and geo (address geocoded to 36.7764447, -76.0367879); @type is now ["LocalBusiness","HomeAndConstructionBusiness"]; telephone normalized to +1-757-367-8342.
- Created /images/og-image.jpg (1200x630), so the og:image/twitter share is no longer a 404.
- Added .vercelignore excluding docs, HANDOFF.md, README.md, *.bat, .netlify, .env*, images/originals from the deployment. Verified /docs/ACCOUNTS.md, /HANDOFF.md, /README.md now return 404. Docs reviewed for secrets: none (ACCOUNTS.md holds only TODOs and the repo URL).
- Rewrote llms.txt in proper llms.txt markdown format (was robots.txt style). Added NAP, services with URLs, areas, offer, license.
- Homepage H1 is now "Pest Control in Virginia Beach & Hampton Roads"; the hook moved to the subhead. /pest-control-hampton-roads H1 is now "Pest Control in Hampton Roads".
- Removed the obsolete meta keywords tag from the homepage.
- Fixed a wrong phone number: pest-control-hampton-roads.html showed 757-801-3001 in three CTAs; now 757-367-8342 (NAP consistency).

Still open from the audit (needs Troy's inputs or a follow-up round):
- Conversion tracking: Google Ads conversion label (send_to) on the thank-you event, GA4, Meta/Facebook pixel, Nextdoor pixel, call-click tracking.
- Reviews (6 to 8 real Google reviews) and technician/owner bios: sections stay held back.
- City pages, service-page expansion (800+ words, per-service FAQs), pest library, pricing page: content projects.
- Service + BreadcrumbList schema on service pages; BlogPosting schema on the 12 posts; width/height + lazy loading on content images.
- sameAs (GBP/Facebook/Yelp) omitted: no verified profile URLs supplied.
- The older audit section recommended restructuring URLs to /services/<slug> and /blog/<slug>. NOT done: it conflicts with the completed Section 6 clean URLs, canonicals, sitemap, and the verified 301 redirect map. Flagged for a decision.