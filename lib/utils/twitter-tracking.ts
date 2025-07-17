// Twitter conversion tracking utility

export const trackTwitterConversion = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.twq) {
    window.twq('event', eventName, parameters || {});
  }
};

// Predefined conversion events
export const TWITTER_EVENTS = {
  LEAD: 'tw-q6cct-q6cct', // Lead generation event
  SIGNUP: 'tw-q6cct-q6cct', // Email signup event
  DEMO_BOOKING: 'tw-q6cct-q6cct', // Demo booking event
  NEWSLETTER_SUBSCRIPTION: 'tw-q6cct-q6cct', // Newsletter subscription event
} as const;

// Helper functions for specific conversion types
export const trackLeadGeneration = (source?: string) => {
  trackTwitterConversion(TWITTER_EVENTS.LEAD, {
    content_name: source || 'website',
    content_category: 'lead_generation'
  });
};

export const trackEmailSignup = (email?: string) => {
  trackTwitterConversion(TWITTER_EVENTS.SIGNUP, {
    content_name: 'email_signup',
    content_category: 'lead_generation',
    value: 1,
    currency: 'USD'
  });
};

export const trackDemoBooking = () => {
  trackTwitterConversion(TWITTER_EVENTS.DEMO_BOOKING, {
    content_name: 'demo_booking',
    content_category: 'conversion',
    value: 1,
    currency: 'USD'
  });
};

export const trackNewsletterSubscription = () => {
  trackTwitterConversion(TWITTER_EVENTS.NEWSLETTER_SUBSCRIPTION, {
    content_name: 'newsletter_subscription',
    content_category: 'lead_generation',
    value: 1,
    currency: 'USD'
  });
}; 