import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Nexframe Systems | Accounting Automation Software for CPAs',
  description: 'Automate accounting workflows, reduce errors by 90%, and save 15-20 hours/week. Bank-grade security, SOC 2 Type II certified.',
  keywords: ['accounting automation', 'CPA software', 'accounting workflow automation', 'accounting errors', 'time savings'],
  generator: 'Next.js',
  referrer: 'strict-origin-when-cross-origin',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#0A2540',
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
  openGraph: {
    title: 'Nexframe Systems | Accounting Automation Software for CPAs',
    description: 'Automate accounting workflows, reduce errors by 90%, and save 15-20 hours/week.',
    url: 'https://nexframe-systems.com',
    siteName: 'Nexframe Systems',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nexframe Systems - Accounting Automation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexframe Systems | Accounting Automation Software for CPAs',
    description: 'Automate accounting workflows, reduce errors by 90%, and save 15-20 hours/week.',
    images: ['/og-image.png'],
    creator: '@nexframesystems',
  },
  alternates: {
    canonical: 'https://nexframe-systems.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Nexframe Systems',
    url: 'https://nexframe-systems.com',
    logo: 'https://nexframe-systems.com/logo.png',
    description: 'Accounting automation software for CPAs',
    sameAs: [
      'https://linkedin.com/company/nexframe',
      'https://youtube.com/@nexframe',
      'https://twitter.com/nexframesystems',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-800-NEXFRAME',
      contactType: 'Customer Service',
    },
  }

  const softwareAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Nexframe Systems',
    applicationCategory: 'BusinessApplication',
    offers: {
      '@type': 'Offer',
      price: '99',
      priceCurrency: 'USD',
    },
    operatingSystem: 'Cloud',
    url: 'https://nexframe-systems.com',
    author: {
      '@type': 'Organization',
      name: 'Nexframe Systems',
    },
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema()) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
