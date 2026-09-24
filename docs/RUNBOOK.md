# Runbook

## Deploy
1. Push changes to the `main` branch on GitHub (github.com/tnpappas/pestheroes-rebuild)
2. Vercel auto-deploys from the `main` branch
3. Verify the live site at the Vercel URL

## Rollback
1. Go to the Vercel dashboard
2. Find the previous deployment in the deployments list
3. Click "Instantly Rollback to this Deployment"
4. Or: `git revert <commit> && git push` to revert the code change

## Domain cutover (from Wix to Vercel)
1. Confirm the domain is not locked by Wix
2. If registered through Wix: unlock and transfer to an external registrar (adds 3-5 days)
3. If registered externally: change the DNS A record or nameservers to Vercel's
4. Wait for DNS propagation (lower TTL to 300 seconds 24 hours before cutover)
5. Confirm the new site loads at pestheroes.com
6. Confirm email still works (if any mailbox was on Wix)
7. Cancel Wix subscription

## Find a broken page
1. Check the Vercel deployment logs in the dashboard
2. Check the browser console for JS errors
3. Check that the file exists in the GitHub repo

## Wire up the contact form
1. Create a Formspree account (or use Netlify Forms)
2. Create a new form endpoint
3. Replace the form `action` attribute with the Formspree URL
4. Or: update the JS in `js/main.js` to POST via fetch to the endpoint
5. Test with a real submission to the Pest Heroes inbox

## Top 5 failure scenarios
1. **Domain expires**: Confirm auto-renew is on at the registrar. Add a calendar reminder 30 days before expiry.
2. **Vercel goes down**: Wait. Vercel status page at status.vercel.com. The site is static so any CDN can serve it as a fallback.
3. **Form spam**: Add Cloudflare Turnstile or hCaptcha to the form. The honeypot field blocks most bots.
4. **Google ranking drops after cutover**: Confirm 301 redirects are in place from old Wix URLs. Check Google Search Console for indexing errors.
5. **Broken links after migration**: Run a link checker (brokenlinkcheck.com or similar) on the live domain after cutover.
