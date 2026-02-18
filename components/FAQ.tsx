'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

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

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-foreground/60">
            Everything you need to know about Nexframe.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-secondary transition-colors text-left"
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <span className="font-semibold text-primary pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-accent flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div
                  id={`faq-content-${index}`}
                  className="px-6 py-4 bg-secondary border-t border-border"
                >
                  <p className="text-foreground/70 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center p-8 bg-secondary rounded-lg">
          <h3 className="text-xl font-semibold text-primary mb-2">
            Still have questions?
          </h3>
          <p className="text-foreground/60 mb-4">
            Our team is here to help. Reach out to us for more information.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
