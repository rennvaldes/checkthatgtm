# `/app` - Next.js App Router

This directory contains the Next.js 15 App Router pages and routing structure. Each folder represents a route in the application, following the file-based routing convention.

## Directory Structure

### Root Files

#### `layout.tsx`
Global layout component that wraps all pages.

**Contents**:
- HTML document structure
- Global metadata configuration
- Analytics scripts (Google Analytics, PostHog, LinkedIn, Twitter, HubSpot)
- Font loading (Clash Display, Messina Sans)
- Global providers
- Navbar and Footer components

**Purpose**: Provides consistent structure and global functionality across all pages.

#### `page.tsx`
Homepage component (`/` route).

**Sections**:
- Hero Section
- Helped Grow Section
- Service as Software Section
- How It Works Section
- Results Section
- Pricing Section
- Banner Section
- FAQ Section
- Testimonials Section
- CTA Banner Section

### Routes

#### `/about` - About Page
Company information, team, and values.

**Files**:
- `page.tsx`: About page component

**Sections**:
- Hero Section
- Company Section
- Values Section
- Team Section
- Testimonials Section
- CTA Banner

#### `/blog` - Blog Section
Blog listing and individual article pages.

**Structure**:
```
/blog
  ├── page.tsx           (Blog listing /blog)
  └── [slug]/
      └── page.tsx       (Individual post /blog/post-title)
```

**Features**:
- Dynamic routing for blog posts
- Fetches content from Strapi CMS
- Category filtering
- Search functionality

#### `/blog/[slug]` - Individual Blog Post
Dynamic route for individual blog articles.

**Data Source**: Strapi CMS

#### `/book-demo` - Demo Booking Page
Contact form for scheduling product demos.

**Features**:
- Booking form integration
- Lead capture
- CTA focused layout

#### `/careers` - Careers Page
Job listings and company culture information.

**Purpose**: Recruiting and hiring information

#### `/guides` - Guides Section
Educational content and how-to guides.

**Structure**:
```
/guides
  ├── [id]/
  │   └── page.tsx       (Individual guide /guides/123)
  └── components/        (Guide-specific components)
```

**Features**:
- Dynamic routing for individual guides
- Custom components for guide layout
- Likely fetches from CMS

#### `/pages` - Additional Pages
Custom pages that don't fit standard categories.

**Structure**:
```
/pages
  └── origin-story/
      └── page.tsx       (Origin story /pages/origin-story)
```

**Current Pages**:
- **Origin Story** (`/pages/origin-story`): Company history and founding story
  - Multiple section components
  - Video embed
  - Narrative-driven content

**Purpose**: Container for one-off pages that don't belong in other categories.

#### `/pricing` - Pricing Page
Product pricing and plan information.

**Features**:
- Pricing tiers
- Comparison tables
- Expert team showcase
- Solutions overview
- CTA sections

#### `/testimonials` - Testimonials Page
Customer success stories and reviews.

**Purpose**: Social proof and case studies

#### `/tools` - Tools Section
Interactive tools or resources.

**Structure**:
```
/tools
  └── [id]/
      └── page.tsx       (Individual tool /tools/tool-name)
```

**Features**:
- Dynamic routing for individual tools
- Interactive tool pages

#### `/_case-study` - Case Studies
Customer success stories (prefixed with `_` to indicate special route).

**Structure**:
```
/_case-study
  └── [slug]/
      └── page.tsx       (Individual case study)
```

**Note**: The `_` prefix indicates this is a special route or might be used for organizational purposes.

## Routing Conventions

### File-Based Routing
Next.js 15 uses file-based routing:

```
app/
  ├── page.tsx           → /
  ├── about/
  │   └── page.tsx      → /about
  ├── blog/
  │   ├── page.tsx      → /blog
  │   └── [slug]/
  │       └── page.tsx  → /blog/my-post
  └── pricing/
      └── page.tsx      → /pricing
```

### Dynamic Routes
Use `[param]` for dynamic segments:

```typescript
// app/blog/[slug]/page.tsx
interface PageProps {
  params: { slug: string };
}

export default function BlogPost({ params }: PageProps) {
  const { slug } = params;
  // Fetch post by slug
}
```

### Route Groups (Optional)
Use `(folder)` for organization without affecting URL:

```
app/
  └── (marketing)/
      ├── about/
      └── pricing/
```

Both routes are still `/about` and `/pricing`, not `/(marketing)/about`.

## Page Component Structure

### Basic Page Template
```typescript
// app/my-page/page.tsx
import Spacer from '@/components/common/Spacer';
import HeroSection from '@/components/my-page-sections/HeroSection';
import CTABannerSection from '@/components/about-sections/v2/CTABannerSection';

export const metadata = {
  title: 'Page Title | GrowthX',
  description: 'Page description for SEO',
};

export default function MyPage() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Spacer size="d122" />
      <HeroSection />
      <Spacer size="d164" />
      {/* More sections */}
      <CTABannerSection />
    </main>
  );
}
```

### Metadata Configuration
```typescript
export const metadata = {
  title: 'GrowthX: Expert-Led, AI‑Powered Growth',
  description: 'Description for SEO',
  openGraph: {
    images: [{ url: '/social.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [{ url: '/social.png' }],
  },
};
```

### Dynamic Metadata
```typescript
// For dynamic routes
export async function generateMetadata({ params }: PageProps) {
  const post = await fetchPost(params.slug);

  return {
    title: post.title,
    description: post.excerpt,
  };
}
```

## Client vs Server Components

### Server Components (Default)
```typescript
// No 'use client' directive
export default function ServerPage() {
  // Can fetch data directly
  const data = await fetchData();
  return <div>{data.title}</div>;
}
```

**Benefits**:
- Better performance
- Smaller bundle size
- SEO friendly
- Can access backend directly

### Client Components
```typescript
'use client';

import { useState } from 'react';

export default function ClientPage() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

**When to use**:
- Need useState, useEffect, etc.
- Event handlers
- Browser APIs
- Interactive features

## Data Fetching

### Server Components
```typescript
async function getData() {
  const res = await fetch('https://api.example.com/data', {
    next: { revalidate: 3600 } // Revalidate every hour
  });
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return <div>{data}</div>;
}
```

### Client Components
```typescript
'use client';

import { useEffect, useState } from 'react';

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData);
  }, []);

  return <div>{data?.title}</div>;
}
```

## Layout Patterns

### Spacer Utility
The app uses a `<Spacer>` component for consistent vertical spacing:

```typescript
<Spacer size="d122" />  // Small spacing
<Spacer size="d164" />  // Medium spacing
<Spacer size="large" /> // Large spacing
```

### Section-Based Layout
Pages are composed of sections:

```typescript
export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Spacer size="d122" />
      <Section1 />
      <Spacer size="d164" />
      <Section2 />
      <Spacer size="d164" />
      <Section3 />
      <CTABannerSection />
    </main>
  );
}
```

## Best Practices

### 1. Metadata
Always provide metadata for SEO:
```typescript
export const metadata = {
  title: 'Page Title',
  description: 'Page description',
};
```

### 2. Component Organization
Keep page components minimal, delegate to section components:
```typescript
// Good
<HeroSection />
<FeaturesSection />

// Bad
<div>
  {/* 500 lines of inline JSX */}
</div>
```

### 3. Use Server Components
Default to server components unless you need client-side features:
```typescript
// Server component (default, better)
export default function Page() { ... }

// Client component (only when needed)
'use client';
export default function Page() { ... }
```

### 4. Co-locate Page-Specific Components
Use `components/[page]-sections/` for page-specific components:
```
app/pricing/page.tsx → components/pricing-sections/
app/about/page.tsx → components/about-sections/
```

### 5. Loading and Error States
Add loading.tsx and error.tsx:
```
app/blog/
  ├── page.tsx
  ├── loading.tsx
  └── error.tsx
```

## Related Documentation

- [Next.js App Router](https://nextjs.org/docs/app)
- [Next.js Routing](https://nextjs.org/docs/app/building-your-application/routing)
- `/components`: Page section components
- `/lib/api`: Data fetching utilities
