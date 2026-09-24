# Architecture

## Stack
- Static HTML/CSS/JS (no framework, no build step)
- Google Fonts (Inter) via CDN
- Deployed on Vercel (static hosting)

## Structure
```
pestheroes-rebuild/
  index.html          Homepage (hero form, pest selector, services, process, guarantee, testimonials, areas)
  services.html       All services overview
  contact.html        Contact + inspection request form
  about.html          Company story
  faq.html            Accordion FAQ with FAQPage schema
  service-areas.html  Hampton Roads service areas
  termite.html        (+ 7 more service detail pages)
  css/style.css       All styles (~19KB, no framework)
  js/main.js          Mobile menu, FAQ accordion, form handling (~2KB)
  robots.txt           Allow all + sitemap reference
  sitemap.xml          16 URLs
```

## Request flow
- User requests a page -> Vercel CDN serves static HTML
- CSS/JS loaded synchronously in <head>/<body>
- Forms: client-side honeypot validation -> success message (wire to backend or Formspree on deploy)

## Key decisions
- Static site instead of Wix: eliminates ~1MB JS bloat, improves load time and SEO
- No framework: a marketing site for a local business does not need React
- Phone number is the primary CTA (click-to-call); forms are secondary
- Inter font from Google Fonts: clean, professional, widely available
