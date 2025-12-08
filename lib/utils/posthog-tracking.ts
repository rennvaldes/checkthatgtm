// PostHog tracking utility
import posthog from 'posthog-js';

export const trackPostHogEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    posthog.capture(eventName, properties || {});
  }
};

// Predefined event names
export const POSTHOG_EVENTS = {
  // Demo booking events
  DEMO_BOOKING_CLICKED: 'demo_booking_clicked',
  DEMO_BOOKING_PAGE_VISITED: 'demo_booking_page_visited',
  DEMO_FORM_LOADED: 'demo_form_loaded',
  
  // Lead generation events
  EMAIL_SIGNUP_CLICKED: 'email_signup_clicked',
  EMAIL_SIGNUP_SUBMITTED: 'email_signup_submitted',
  NEWSLETTER_SUBSCRIPTION: 'newsletter_subscription',
  
  // Navigation events
  CTA_CLICKED: 'cta_clicked',
  PRICING_PAGE_VISITED: 'pricing_page_visited',
  ABOUT_PAGE_VISITED: 'about_page_visited',
  
  // Content engagement
  BLOG_ARTICLE_VIEWED: 'blog_article_viewed',
  VIDEO_PLAYED: 'video_played',
  FAQ_EXPANDED: 'faq_expanded',
  
  // User journey events
  PAGE_VIEW: 'page_view',
  SESSION_START: 'session_start',
} as const;

// Helper functions for specific event types
export const trackDemoBookingClick = (source: string, location?: string) => {
  trackPostHogEvent(POSTHOG_EVENTS.DEMO_BOOKING_CLICKED, {
    source, // e.g., 'navbar', 'pricing_page', 'hero_section'
    location, // e.g., 'desktop', 'mobile'
    category: 'conversion',
    value: 1,
  });
};

export const trackDemoPageVisit = (referrer?: string, utmParams?: Record<string, string>) => {
  trackPostHogEvent(POSTHOG_EVENTS.DEMO_BOOKING_PAGE_VISITED, {
    referrer,
    ...utmParams,
    category: 'conversion',
    page: '/book-demo',
  });
};

export const trackEmailSignup = (source: string, email?: string) => {
  trackPostHogEvent(POSTHOG_EVENTS.EMAIL_SIGNUP_SUBMITTED, {
    source,
    email_domain: email ? email.split('@')[1] : undefined,
    category: 'lead_generation',
    value: 1,
  });
};

export const trackCTAClick = (ctaText: string, location: string, destination?: string) => {
  trackPostHogEvent(POSTHOG_EVENTS.CTA_CLICKED, {
    cta_text: ctaText,
    location,
    destination,
    category: 'engagement',
  });
};

export const trackPageView = (page: string, title?: string) => {
  trackPostHogEvent(POSTHOG_EVENTS.PAGE_VIEW, {
    page,
    title,
    timestamp: new Date().toISOString(),
  });
};

export const trackBlogArticleView = (articleSlug: string, articleTitle: string) => {
  trackPostHogEvent(POSTHOG_EVENTS.BLOG_ARTICLE_VIEWED, {
    article_slug: articleSlug,
    article_title: articleTitle,
    category: 'content_engagement',
  });
};

export const trackVideoPlay = (videoTitle: string, location: string) => {
  trackPostHogEvent(POSTHOG_EVENTS.VIDEO_PLAYED, {
    video_title: videoTitle,
    location,
    category: 'content_engagement',
  });
};

// User identification helper
export const identifyUser = (userId: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    posthog.identify(userId, properties);
  }
};

// Set user properties
export const setUserProperties = (properties: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    posthog.setPersonProperties(properties);
  }
};
