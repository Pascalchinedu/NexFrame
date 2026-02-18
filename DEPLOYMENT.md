# Deployment Guide - Nexframe Systems Landing Page

This guide covers deploying the Nexframe Systems landing page to production on Vercel.

## Pre-Deployment Checklist

### Code Quality
- [ ] All components tested locally (`pnpm dev`)
- [ ] No console errors or warnings
- [ ] All form submissions working
- [ ] Animations smooth on target devices
- [ ] Links and navigation working correctly

### SEO & Content
- [ ] Meta tags verified (title, description, OG tags)
- [ ] Images have alt text
- [ ] No broken links
- [ ] Content reviewed for accuracy
- [ ] Schema markup validated at schema.org

### Performance
- [ ] Run `pnpm build` successfully
- [ ] Check build output for warnings
- [ ] Test production build locally: `pnpm start`
- [ ] Lighthouse score 90+ (run in production)
- [ ] Core Web Vitals optimized

### Environment Variables
- [ ] `NEXT_PUBLIC_GA_ID` ready (Google Analytics 4 ID)
- [ ] Any other env vars documented

## Deployment Steps

### Step 1: Connect to GitHub (If Not Already Done)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit: Nexframe landing page"
git branch -M main
git remote add origin https://github.com/yourusername/nexframe-landing.git
git push -u origin main
```

### Step 2: Deploy to Vercel

#### Option A: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel --prod
```

3. Follow prompts to connect your project

#### Option B: Using Vercel Dashboard

1. Visit [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset**: Next.js
   - **Build Command**: `pnpm build` (or `npm run build`)
   - **Output Directory**: `.next`
5. Add Environment Variables:
   - `NEXT_PUBLIC_GA_ID`: Your GA4 measurement ID
6. Click "Deploy"

### Step 3: Add Custom Domain

1. In Vercel Dashboard, go to your project
2. Navigate to "Settings" → "Domains"
3. Click "Add Domain"
4. Enter your domain (e.g., nexframe-systems.com)
5. Vercel will show DNS records to add
6. Update DNS at your domain registrar (Namecheap, GoDaddy, etc.)
7. Wait for DNS propagation (can take up to 48 hours)

### Step 4: Set Up SSL Certificate

- Vercel automatically provisions an SSL certificate via Let's Encrypt
- Wait 5-10 minutes after DNS propagation for certificate generation
- Verify HTTPS is working on your domain

### Step 5: Configure Google Analytics

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your **Measurement ID** (format: G-XXXXXXXXXX)
3. Add to Vercel Environment Variables:
   - `NEXT_PUBLIC_GA_ID`: Your measurement ID
4. Redeploy to apply changes:
```bash
vercel --prod
```

5. Verify GA is tracking:
   - Visit your live site
   - Open Google Analytics → Realtime
   - You should see yourself in real-time data

### Step 6: Set Up Google Search Console

1. Visit [search.google.com/search-console](https://search.google.com/search-console)
2. Click "Add Property"
3. Enter your domain URL
4. Verify ownership:
   - Option 1: Add DNS record (recommended)
   - Option 2: Upload HTML file to root
5. Click "Verify"

### Step 7: Submit Sitemap

1. In Google Search Console, go to "Sitemaps"
2. Click "Add/Test Sitemap"
3. Enter: `https://your-domain.com/sitemap.xml`
4. Click "Submit"
5. Monitor "Coverage" for indexing status

### Step 8: Monitor Initial Indexing

1. **Coverage Report**: Check what pages are indexed
2. **Enhancements**: Verify schema markup is recognized
3. **Performance**: Monitor Core Web Vitals
4. **Queries**: After 2-4 weeks, check search appearance

## Post-Deployment Tasks

### Week 1
- [ ] Verify all pages are live and accessible
- [ ] Test forms (contact, newsletter) end-to-end
- [ ] Check GA4 is tracking events
- [ ] Monitor error logs in Vercel
- [ ] Test on mobile devices
- [ ] Verify images load correctly
- [ ] Test all external links

### Week 2-4
- [ ] Monitor Google Search Console for crawl errors
- [ ] Check Core Web Vitals in GA4
- [ ] Review Search Console "Performance" report
- [ ] Monitor form submissions in GA4
- [ ] Check for security issues (SSL, headers)

### Ongoing
- [ ] Review monthly GA4 analytics
- [ ] Monitor search rankings for target keywords
- [ ] Update content as needed
- [ ] Fix broken links if found
- [ ] Keep dependencies updated

## Monitoring & Maintenance

### Google Analytics 4

**Important Events to Monitor:**
- `demo_booking_clicked`: People clicking "Book a Free Demo"
- `form_submit` (demo_booking): Successful form submissions
- `newsletter_signup`: Newsletter signups
- `section_view`: Engagement with different sections

**Key Metrics:**
- Conversion rate (form submissions ÷ sessions)
- Bounce rate (lower is better)
- Average session duration
- Pages per session

### Performance Monitoring

**Check Weekly:**
- Core Web Vitals in GA4 (Good, Needs Improvement, Poor)
- Lighthouse scores (via PageSpeed Insights)
- Error rates in Vercel Analytics

**Lighthouse Targets:**
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

### Search Console Monitoring

**Check Monthly:**
- Coverage (errors, valid, warnings)
- Performance (clicks, impressions, CTR)
- Mobile Usability
- Core Web Vitals from field data

## Troubleshooting

### Issue: Page loads slowly
**Solution:**
1. Check Lighthouse report
2. Identify bottleneck (images, fonts, scripts)
3. Optimize identified resource
4. Redeploy

### Issue: GA4 not tracking
**Solution:**
1. Verify `NEXT_PUBLIC_GA_ID` is set in Vercel env vars
2. Check browser console for errors
3. Wait 24-48 hours for initial data
4. Use GA4 DebugView to trace events

### Issue: Form submissions not working
**Solution:**
1. Check browser console for errors
2. Verify API routes are deployed (`/api/contact`, `/api/subscribe`)
3. Check Vercel function logs for errors
4. Ensure email configuration is set up (if using email service)

### Issue: SEO not appearing in search
**Solution:**
1. Check Google Search Console → Coverage
2. Verify site is indexed (may take 2-4 weeks)
3. Check for indexing errors
4. Verify sitemap.xml is valid
5. Request indexing from GSC

### Issue: SSL certificate not issuing
**Solution:**
1. Verify DNS records are correct
2. Wait 5-10 minutes after DNS propagation
3. Try removing and re-adding domain
4. Contact Vercel support if persists

## Environment Variables Reference

### Required
- `NEXT_PUBLIC_GA_ID` - Google Analytics 4 Measurement ID (format: G-XXXXXXXXXX)

### Optional (for future integrations)
- Email service API keys (for newsletter)
- CRM integration tokens
- Payment processor keys

## Performance Optimization Tips

### Images
- Ensure all hero images are optimized (WebP format)
- Use `next/image` for automatic optimization
- Add alt text to all images

### Code
- Review bundle size: `pnpm build` output
- Remove unused dependencies
- Use dynamic imports for heavy libraries

### Content
- Minify CSS/JavaScript (automatic in production)
- Enable compression on your domain
- Consider CDN caching headers

## Rollback Process

If you need to rollback to a previous version:

1. In Vercel Dashboard, go to "Deployments"
2. Find the previous stable deployment
3. Click "..." → "Promote to Production"
4. Confirm the rollback

## Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Google Analytics Help**: https://support.google.com/analytics
- **Google Search Console Help**: https://support.google.com/webmasters

---

**Deployment Date**: [Add your deployment date]  
**Domain**: [Add your domain]  
**GA4 Property ID**: [Add your property ID]  
**Last Updated**: [Add date]
