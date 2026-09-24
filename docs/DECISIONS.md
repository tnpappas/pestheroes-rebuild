# Decisions

## 2026-09-24: Static HTML/CSS/JS instead of Wix
**Why:** Wix serves ~1MB of JS bloat per page, slow load times, poor mobile experience, no inline quote form, no structured data. Static HTML is a few KB per page, loads instantly, and ranks better in search.

## 2026-09-24: No CSS framework
**Why:** A marketing site for a local pest control business needs a custom look, not Bootstrap defaults. 19KB of custom CSS gives full control and zero unused code.

## 2026-09-24: Vercel for hosting
**Why:** Free tier, instant deploys from GitHub, automatic SSL, CDN. Troy's default hosting choice per the build standard.

## 2026-09-24: Honeypot instead of CAPTCHA
**Why:** Honeypot field is invisible to humans, blocks most bots, and does not add friction to the form. Add Cloudflare Turnstile or hCaptcha if spam becomes a problem.

## 2026-09-24: Form success message is client-side only
**Why:** No backend yet. On permanent deploy, wire forms to Formspree, Netlify Forms, or a serverless function. The honeypot and validation are in place; only the submission endpoint needs wiring.

## 2026-09-24: Inter font from Google Fonts
**Why:** Clean, professional, highly readable, free for commercial use, widely available. Alternative was system fonts (faster but less distinctive).

## 2026-09-24: Unsplash image in hero background
**Why:** Free license for commercial use. Should be replaced with a real photo of a Pest Heroes technician or a Virginia Beach home for authenticity.
