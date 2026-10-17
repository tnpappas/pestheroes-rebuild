# Known Issues

## Open

| ID | Severity | Date | Issue | Workaround |
|----|----------|------|-------|------------|
| 1 | Medium | 2026-09-24 | Form submission is client-side only (shows success message, does not send email or save data) | Wire to Formspree, Netlify Forms, or a serverless function |
| 3 | Low | 2026-09-24 | No real customer testimonials | Homepage Reviews section now shows a visible [TODO] placeholder (2026-10-07); replace with 6 to 8 real Google reviews |
| 5 | Info | 2026-09-24 | No Google Analytics or analytics tracking installed | Add Plausible or GA4 when ready |
| 6 | Info | 2026-09-24 | No Open Graph image file exists yet (og-image.jpg referenced but not created) | Create a 1200x630 social preview image |
| 7 | Low | 2026-10-07 | Blog images under /images/blog/ have no provenance record; could include stock | Audit against the no-stock-photography rule before launch |

## Resolved

| ID | Date | Issue | Resolution |
|----|------|-------|------------|
| 2 | 2026-10-07 | Hero/service images were stock (shutterstock/Unsplash) | Replaced the five live stock photos with real Pest Heroes field photos and deleted the stock files |
| 4 | 2026-09-24 | No real logo image (text-based PH badge) | Real Pest Heroes logo wired into header, footer, and favicon |