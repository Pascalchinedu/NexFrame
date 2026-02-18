// SEO Schema Markup Utilities

const faqData = [
  {
    question: 'How quickly can we implement Nexframe?',
    answer: 'Most firms are up and running within 1-2 weeks. Our onboarding team guides you through each step, and integration with your existing accounting software typically takes 3-5 business days.',
  },
  {
    question: 'What accounting software does Nexframe integrate with?',
    answer: 'Nexframe integrates with QuickBooks Online, Xero, Wave, FreshBooks, and many other popular accounting platforms. We also support custom integrations for specialized tools.',
  },
  {
    question: 'Is Nexframe secure? What compliance certifications do you have?',
    answer: 'Yes, security is paramount. Nexframe is SOC 2 Type II certified, GDPR compliant, and ISO 27001 certified. We use bank-grade encryption and undergo regular security audits.',
  },
  {
    question: 'Can we customize workflows for our specific processes?',
    answer: 'Absolutely. Our drag-and-drop workflow builder allows unlimited customization. You can create workflows that match your exact processes without writing any code.',
  },
  {
    question: 'What happens if we need support?',
    answer: 'Our dedicated support team is available 24/7. You get a dedicated account manager, priority support, and access to our extensive knowledge base and API documentation.',
  },
  {
    question: 'Does Nexframe require any technical expertise?',
    answer: 'No. Nexframe is designed for accountants, not developers. The entire platform is no-code, and our team handles all technical integration work.',
  },
  {
    question: 'How much does Nexframe cost?',
    answer: 'Pricing is based on your firm\'s size and usage. We offer flexible plans starting at $99/month. Contact our sales team for a custom quote.',
  },
  {
    question: 'Can we scale Nexframe as our firm grows?',
    answer: 'Yes. Nexframe grows with your firm. Whether you\'re a solo practitioner or managing a 100+ person firm, our platform scales seamlessly without performance degradation.',
  },
]

export function generateFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function generateBreadcrumbSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://nexframe-systems.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Features',
        item: 'https://nexframe-systems.com#services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'How It Works',
        item: 'https://nexframe-systems.com#how-it-works',
      },
    ],
  }
}
