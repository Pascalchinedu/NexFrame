// GA4 Event Tracking Utility

interface EventParams {
  [key: string]: string | number | boolean
}

/**
 * Track custom events in Google Analytics 4
 * @param eventName - Name of the event (e.g., 'demo_booked', 'newsletter_signup')
 * @param params - Additional parameters for the event
 */
export function trackEvent(eventName: string, params?: EventParams) {
  if (typeof window === 'undefined') return

  const gtag = (window as any).gtag
  if (!gtag) return

  gtag('event', eventName, params)
}

/**
 * Common events for the landing page
 */
export const trackingEvents = {
  // CTA Events
  bookDemo: () => trackEvent('demo_booking_clicked', { value: 1 }),
  watchDemo: () => trackEvent('demo_video_clicked', { value: 1 }),
  
  // Section engagement
  scrolledToBenefits: () => trackEvent('section_view', { section: 'benefits' }),
  scrolledToHowItWorks: () => trackEvent('section_view', { section: 'how_it_works' }),
  scrolledToTestimonials: () => trackEvent('section_view', { section: 'testimonials' }),
  scrolledToFAQ: () => trackEvent('section_view', { section: 'faq' }),
  
  // Form events
  formSubmitted: (formType: string) => trackEvent('form_submit', { form_type: formType }),
  newsletterSignup: () => trackEvent('newsletter_signup', { value: 1 }),
  
  // Engagement
  accordionOpened: (index: number) => trackEvent('accordion_opened', { index }),
  carouselNext: () => trackEvent('carousel_navigation', { direction: 'next' }),
  carouselPrev: () => trackEvent('carousel_navigation', { direction: 'prev' }),
}
