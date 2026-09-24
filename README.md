# Pest Heroes - Website Rebuild

## Stack
- Static HTML/CSS/JS (no framework, no build step)
- Google Fonts (Inter)
- Deploy-ready for Vercel, Netlify, or Cloudflare Pages

## What was rebuilt
The original site was on Wix (~1MB JS bloat per page, slow, no conversion features).
This rebuild adds everything top pest control sites have:

1. **Sticky header** with phone + CTA always visible
2. **Hero section** with inline quote form (the #1 conversion driver)
3. **Pest problem selector** grid ("What are you dealing with?" → service page)
4. **Services grid** with cards and "Learn more" links
5. **Process section** (Inspect → Treat → Prevent → Monitor → Guarantee)
6. **100% Satisfaction Guarantee** badge section
7. **Testimonials** with 5-star ratings
8. **Service areas** grid for local SEO
9. **FAQ** with accordion and schema markup (FAQPage structured data)
10. **Contact page** with detailed form (service type, urgency, message)
11. **Structured data** (LocalBusiness schema on homepage, FAQPage on FAQ)
12. **Mobile-first responsive** design with hamburger menu
13. **18 pages total** covering every service + areas + about + FAQ + contact

## Pages
| File | URL | Purpose |
|------|-----|---------|
| index.html | / | Homepage with hero form, pest selector, services, process, guarantee, testimonials, areas |
| services.html | /services | All services overview grid |
| contact.html | /contact | Contact info + detailed inspection request form |
| about.html | /about | Company story, why choose us, Safe House partnership |
| faq.html | /faq | Accordion FAQ with FAQPage schema markup |
| service-areas.html | /service-areas | All Hampton Roads service areas |
| termite.html | /termite | Termite inspections & treatment detail |
| seasonal-pest-control.html | /seasonal-pest-control | Seasonal IPM programs |
| mosquito-control.html | /mosquito-control | Mosquito & tick reduction programs |
| rodent-control.html | /rodent-control | Rodent exclusion programs |
| crawlspace-moisture.html | /crawlspace-moisture | Crawlspace & moisture solutions |
| real-estate-wdi.html | /real-estate-wdi | WDI inspections for real estate |
| move-in-treatment.html | /move-in-treatment | Move-in pest treatment |
| repair-services.html | /repair-services | Structural repair services |
| referral.html | /referral | Referral program |
| privacy-policy.html | /privacy-policy | Privacy policy |
| css/style.css | | Stylesheet (~19KB, all inline, no framework) |
| js/main.js | | Mobile menu, FAQ accordion, form handling (~2KB) |

## Business details
- **Name:** Pest Heroes
- **Phone:** 757-367-8342
- **Area:** Virginia Beach, Norfolk, Chesapeake, Hampton, Newport News, Portsmouth, Suffolk, Isle of Wight
- **Parent company:** TNP Digital Ventures LLC
- **Partner:** Safe House Property Inspections (23,000+ inspections)

## Deploy
1. Push to a GitHub repo
2. Connect to Vercel/Netlify/Cloudflare Pages
3. No build command needed (static files)
4. Set custom domain to pestheroes.com
5. Repoint DNS at the registrar
6. Cancel Wix subscription after confirming the new site is live

## Form handling
Forms currently show a success message client-side. To wire up:
- Use Formspree, Netlify Forms, or a serverless function
- POST to email service or CRM
- Add reCAPTCHA for spam protection
