# PostHog Analytics Implementation

This document outlines the PostHog analytics implementation added to the GrowthX website.

## 🚀 What's Been Implemented

### 1. PostHog Script Integration
- **Location**: `app/layout.tsx`
- **Strategy**: `afterInteractive` for optimal performance
- **Configuration**: 
  - API Key: `phc_EYsgKoq2jVfc6ZU11DzXDh9NZKowk1BsLefnUxZUpqI`
  - API Host: `https://us.i.posthog.com`
  - Person Profiles: `always` (tracks both identified and anonymous users)

### 2. PostHog Tracking Utilities
- **File**: `lib/utils/posthog-tracking.ts`
- **Features**:
  - Event tracking with properties
  - User identification
  - Predefined event constants
  - Helper functions for common events

### 3. Demo Booking Click Tracking

All demo booking buttons throughout the site now track clicks with contextual information:

#### Desktop Navbar
- **Location**: `components/layout/Navbar/Desktop.tsx`
- **Event**: `demo_booking_clicked`
- **Properties**: `source: 'navbar', location: 'desktop'`

#### Mobile Navbar  
- **Location**: `components/layout/Navbar/Mobile.tsx`
- **Event**: `demo_booking_clicked`
- **Properties**: `source: 'navbar', location: 'mobile'`

#### Pricing Promo Card
- **Location**: `components/pricing-sections/HeroSection/PromoCard.tsx`
- **Event**: `demo_booking_clicked`
- **Properties**: `source: 'pricing_promo_card', location: 'pricing_page'`

#### Custom Plans Section
- **Location**: `components/home-sections/CustomPlans.tsx`
- **Event**: `demo_booking_clicked`
- **Properties**: `source: 'custom_plans_section', location: 'home_page'`

#### Pricing Section
- **Location**: `components/home-sections/PricingSection.tsx`
- **Event**: `demo_booking_clicked`
- **Properties**: `source: 'pricing_section', location: 'home_page'`

#### Footer
- **Location**: `components/layout/Footer/index.tsx`
- **Event**: `demo_booking_clicked`
- **Properties**: `source: 'footer', location: 'footer_section'`

### 4. Demo Booking Page Tracking

#### Page Visit Tracking
- **Location**: `app/book-demo/page.tsx`
- **Event**: `demo_booking_page_visited`
- **Properties**: Includes referrer and UTM parameters

#### Form Load Tracking
- **Location**: `app/book-demo/page.tsx`
- **Event**: `demo_form_loaded`
- **Properties**: `category: 'conversion', page: '/book-demo'`

### 5. Email Signup Tracking

#### Hero Section Email Form
- **Location**: `components/home-sections/HeroSection/TitleAndButtons.tsx`
- **Event**: `email_signup_submitted`
- **Properties**: `source: 'hero_section', email_domain: [extracted from email]`

### 6. Page View Tracking

#### Global Page View Component
- **Location**: `components/analytics/PostHogPageView.tsx`
- **Purpose**: Automatically tracks page views across all pages
- **Event**: `page_view`
- **Properties**: `page: [pathname], title: [page title]`

## 📊 Event Types Tracked

### Conversion Events
- `demo_booking_clicked` - When any demo booking button is clicked
- `demo_booking_page_visited` - When the demo booking page is visited
- `demo_form_loaded` - When the demo form iframe loads successfully

### Lead Generation Events  
- `email_signup_submitted` - When email signup forms are submitted
- `email_signup_clicked` - When email signup buttons are clicked

### Navigation Events
- `page_view` - Automatic page view tracking
- `cta_clicked` - General CTA click tracking

### Content Engagement Events
- `blog_article_viewed` - Blog article page views
- `video_played` - Video engagement tracking
- `faq_expanded` - FAQ interaction tracking

## 🛠 How to Add More Tracking

### 1. Import the Utility Functions
```typescript
import { trackPostHogEvent, trackDemoBookingClick, POSTHOG_EVENTS } from '@/lib/utils/posthog-tracking';
```

### 2. Track Custom Events
```typescript
// Basic event tracking
trackPostHogEvent('custom_event_name', {
  property1: 'value1',
  property2: 'value2'
});

// Using predefined events
trackPostHogEvent(POSTHOG_EVENTS.CTA_CLICKED, {
  cta_text: 'Get Started',
  location: 'hero_section'
});
```

### 3. Track Demo Booking Clicks
```typescript
onClick={() => trackDemoBookingClick('source_name', 'location_context')}
```

### 4. Track User Identification
```typescript
import { identifyUser, setUserProperties } from '@/lib/utils/posthog-tracking';

// Identify a user
identifyUser('user123', {
  email: 'user@example.com',
  plan: 'enterprise'
});

// Set user properties
setUserProperties({
  company: 'Acme Corp',
  role: 'Marketing Manager'
});
```

## 🎯 Analytics Dashboard

All tracked events will appear in your PostHog dashboard at:
- **Instance**: https://us.i.posthog.com
- **Project**: phc_EYsgKoq2jVfc6ZU11DzXDh9NZKowk1BsLefnUxZUpqI

### Key Metrics to Monitor
1. **Demo Booking Funnel**: Track clicks → page visits → form loads
2. **Traffic Sources**: Which sources drive the most demo bookings
3. **Email Signups**: Lead generation from different page sections
4. **User Journey**: Page flow and conversion paths
5. **Geographic Data**: Where your highest-value leads come from

## 🔧 Performance Considerations

- **Loading Strategy**: PostHog loads `afterInteractive` to avoid blocking page render
- **Minimal Impact**: Tracking calls are non-blocking and batched
- **Error Handling**: All tracking functions gracefully handle cases where PostHog isn't loaded
- **Type Safety**: Full TypeScript support with proper type definitions

## 🚨 Important Notes

1. **GDPR Compliance**: Consider implementing cookie consent if targeting EU users
2. **Data Retention**: Configure data retention policies in PostHog dashboard
3. **Environment Separation**: Consider using different PostHog projects for dev/staging/production
4. **Privacy**: Email domains are tracked, but not full email addresses for privacy
5. **Testing**: All tracking functions check for PostHog availability before executing

## 📈 Next Steps

1. **Set up Dashboards**: Create custom dashboards in PostHog for key metrics
2. **Funnel Analysis**: Set up conversion funnels from page view → demo booking
3. **Cohort Analysis**: Track user behavior patterns over time
4. **A/B Testing**: Use PostHog's feature flags for conversion optimization
5. **Alerts**: Set up alerts for significant changes in conversion metrics
