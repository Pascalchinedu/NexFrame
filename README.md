# Nexframe Systems - Landing Page

A high-performance, SEO-optimized landing page for Nexframe Systems built with Next.js 16, Tailwind CSS, and Shadcn/UI.

## Project Overview

Nexframe Systems is a B2B SaaS platform for accounting automation. This landing page is designed to:

- Drive demo bookings from CPAs and accounting firm partners
- Establish brand credibility and trust
- Optimize for search engines (organic discovery)
- Provide excellent user experience on all devices
- Track user engagement with Google Analytics 4

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Components**: Shadcn/UI
- **Animations**: Framer Motion
- **Analytics**: Google Analytics 4 (GA4)
- **Deployment**: Vercel
- **Font**: Geist (Google Fonts)

## Key Features

### 1. SEO Optimization
- Comprehensive meta tags and Open Graph support
- JSON-LD schema markup (Organization, SoftwareApplication, FAQPage, Breadcrumbs)
- Optimized robots.txt and sitemap.xml
- Structured data for rich snippets
- Mobile-first responsive design

### 2. Components
- **Navbar**: Sticky navigation with mobile hamburger menu
- **Hero**: Full-width hero with SVG animations and dual CTAs
- **Benefits**: 4-card grid highlighting key value propositions
- **How It Works**: 4-step timeline with animations
- **Testimonials**: Auto-advancing carousel with manual controls
- **FAQ**: Accordion with 8 pre-written Q&A pairs
- **Contact Form**: Demo booking form with validation
- **Newsletter**: Email subscription with validation
- **Footer**: Brand info, links, and social media

### 3. Performance
- Image optimization with next/image
- Code splitting with dynamic imports
- Responsive design with touch-friendly targets
- Optimized Core Web Vitals
- Target: Lighthouse score 90+

### 4. Analytics
- Google Analytics 4 integration
- Event tracking for CTAs, form submissions, and engagement
- Scroll depth tracking capability
- UTM parameter support

## Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_GA_ID=your-ga4-measurement-id
```

## Installation

1. **Clone or download the project**

```bash
git clone <repository-url>
cd nexframe-landing
```

2. **Install dependencies**

```bash
pnpm install
# or
npm install
```

3. **Set up environment variables**

Create `.env.local` and add your GA4 measurement ID

4. **Run development server**

```bash
pnpm dev
# or
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the landing page.

## Project Structure

```
/vercel/share/v0-project/
├── app/
│   ├── api/
│   │   ├── contact/route.ts       # Demo booking form API
│   │   └── subscribe/route.ts      # Newsletter signup API
│   ├── layout.tsx                  # Root layout with metadata & schemas
│   ├── page.tsx                    # Landing page
│   ├── globals.css                 # Global styles & design tokens
│   ├── robots.ts                   # Robots.txt generation
│   └── sitemap.ts                  # Sitemap.xml generation
├── components/
│   ├── Navbar.tsx                  # Navigation bar
│   ├── Hero.tsx                    # Hero section
│   ├── Benefits.tsx                # Benefits cards
│   ├── HowItWorks.tsx              # How it works timeline
│   ├── Testimonials.tsx            # Testimonials carousel
│   ├── FAQ.tsx                     # FAQ accordion
│   ├── ContactForm.tsx             # Demo booking form
│   ├── Newsletter.tsx              # Newsletter signup
│   ├── Footer.tsx                  # Footer
│   ├── GoogleAnalytics.tsx         # GA4 component
│   └── ui/                         # Shadcn/UI components
├── lib/
│   ├── utils.ts                    # Utility functions
│   ├── analytics.ts                # GA4 event tracking
│   └── schema.ts                   # SEO schema markup
├── public/                         # Static assets
├── package.json
└── IMPLEMENTATION.md               # Development guide
```

## API Endpoints

### POST `/api/contact`
Submit a demo booking request.

**Request body:**
```json
{
  "name": "John Doe",
  "email": "john@company.com",
  "company": "My CPA Firm"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Demo booking request received. We will contact you soon."
}
```

### POST `/api/subscribe`
Subscribe to the newsletter.

**Request body:**
```json
{
  "email": "john@company.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Successfully subscribed to our newsletter."
}
```

## Customization

### Colors
Brand colors are defined in `app/globals.css`:
- Primary: `#0A2540` (Navy)
- Accent: `#00D4C8` (Teal)
- Background: `#FFFFFF`
- Secondary: `#F8F9FA` (Light Gray)

### Fonts
Typography uses the Geist font family from Google Fonts.

### Content
Update content in individual component files:
- Hero copy: `components/Hero.tsx`
- Benefits: `components/Benefits.tsx`
- Steps: `components/HowItWorks.tsx`
- Testimonials: `components/Testimonials.tsx`
- FAQ: `components/FAQ.tsx`

## Analytics Events

Track the following events in GA4:

- `demo_booking_clicked`: "Book a Free Demo" button
- `demo_video_clicked`: "Watch 2-min Demo" button
- `section_view`: User scrolls to section (benefits, how_it_works, testimonials, faq)
- `form_submit`: Contact form submission (form_type: demo_booking)
- `newsletter_signup`: Newsletter subscription
- `accordion_opened`: FAQ accordion opened
- `carousel_navigation`: Testimonial carousel navigation

## Deployment

### Deploy to Vercel

1. **Push to GitHub**
```bash
git push origin main
```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your repository
   - Add environment variables (NEXT_PUBLIC_GA_ID)
   - Deploy

3. **Set up custom domain**
   - In Vercel dashboard, add your domain
   - Update DNS records as directed

4. **Submit to Google Search Console**
   - Verify site ownership
   - Submit sitemap.xml
   - Monitor crawl stats and indexing

## Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Score | 90+ |
| LCP (Largest Contentful Paint) | < 2.5s |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| Mobile Score | 90+ |

## SEO Checklist

- [x] Meta tags optimized
- [x] Schema markup (Organization, SoftwareApplication, FAQ, Breadcrumbs)
- [x] Open Graph tags
- [x] Mobile responsive
- [x] robots.txt configured
- [x] sitemap.xml created
- [x] GA4 integrated
- [ ] Google Search Console set up (manual)
- [ ] Domain submitted for indexing (manual)
- [ ] Core Web Vitals optimized (test in production)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android)

## License

Copyright © 2024 Nexframe Systems. All rights reserved.

## Support

For issues or questions:
1. Check the IMPLEMENTATION.md guide
2. Review component documentation
3. Open an issue in your repository

---

**Built with v0** | **Powered by Vercel**
