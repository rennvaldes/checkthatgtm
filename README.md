# GrowthX Marketing Website

A modern, high-performance marketing website built with Next.js 15, TypeScript, and Tailwind CSS. Features AI-powered content, interactive animations, and seamless CMS integration.

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3 + SASS
- **UI Components**: Radix UI + Shadcn UI
- **Animations**: Framer Motion + Lottie
- **CMS**: Strapi (Headless CMS)
- **Data Fetching**: TanStack Query (React Query)
- **Icons**: Heroicons + Lucide React + Iconify
- **Carousels**: Embla Carousel + Swiper
- **Video**: Vidstack React + React Player
- **Forms**: Default.com integration
- **Analytics**: Google Analytics, PostHog, LinkedIn, Twitter, HubSpot, Koala

## 📦 Getting Started

### Prerequisites
- Node.js 20+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server (runs on port 3555)
npm run dev
```

Open [http://localhost:3555](http://localhost:3555) in your browser.

### Available Scripts

```bash
npm run dev      # Start development server (port 3555)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📁 Project Structure

```
.
├── app/                    # Next.js 15 App Router (pages & routing)
│   ├── layout.tsx         # Global layout with analytics & providers
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── blog/              # Blog listing & individual posts
│   ├── pricing/           # Pricing page
│   ├── pages/             # Additional pages (e.g., origin-story)
│   └── ...                # Other routes
│
├── components/            # React components
│   ├── common/           # Shared components (Button, CTABanner, etc.)
│   ├── layout/           # Global layout components (Navbar, Footer)
│   ├── icons/            # SVG icon components
│   ├── home-sections/    # Homepage-specific sections
│   ├── about-sections/   # About page sections
│   ├── blog-sections/    # Blog page sections
│   ├── pricing-sections/ # Pricing page sections
│   ├── pages-sections/   # /pages route sections
│   ├── ui/               # Low-level UI primitives
│   └── ...               # Other section-specific components
│
├── lib/                   # Utilities & third-party integrations
│   ├── api/              # API clients (Strapi integration)
│   ├── animations/       # Animation utilities
│   ├── litebox-lib/      # Litebox UI library
│   ├── shadcn/           # Shadcn UI components
│   └── utils/            # Helper functions
│
├── hooks/                 # Custom React hooks
│   ├── useResponsiveDevice.tsx
│   ├── useAlignedContentLeft.ts
│   └── useGetQueryWithRefetchOnChange.ts
│
├── assets/                # Static assets
│   ├── fonts/            # Custom fonts (Clash Display, Messina Sans)
│   ├── img/              # Images organized by section
│   └── lottie/           # Lottie animation files
│
├── static/                # Static configurations
│   ├── constants.ts      # App-wide constants & env variables
│   ├── types.ts          # Global TypeScript types
│   └── globals.css       # Global CSS & Tailwind config
│
├── types/                 # TypeScript declarations
│   └── global.d.ts       # Global type definitions
│
└── public/                # Public assets (favicon, social images)
```

### 📚 Directory Documentation

Each major directory contains detailed documentation:

- [`/app`](./app/README.md) - Next.js pages and routing
- [`/components`](./components/README.md) - React components organization
- [`/lib`](./lib/README.md) - Utilities and third-party integrations
- [`/hooks`](./hooks/README.md) - Custom React hooks
- [`/assets`](./assets/README.md) - Static assets (fonts, images, animations)
- [`/static`](./static/README.md) - Global configurations and constants
- [`/types`](./types/README.md) - TypeScript type definitions

## 🏗️ Component Filing Structure & Naming

Always start component names with a capital letter.

### Single-File Components
Must go inside a `.tsx` file with the same name:
```
Navbar.tsx
```

### Multi-File Components
Must go inside a folder with the component name:
```
HeroSection/
  ├── index.tsx       # Main component
  ├── Video.tsx       # Sub-component
  └── utils.ts        # Component-specific utilities
```

The main component must be named `index.tsx` to shorten the import path:
```typescript
import HeroSection from '@/components/HeroSection';
// Not: '@/components/HeroSection/index'
```

## 🎨 Design System

### Spacing
Uses a custom `<Spacer>` component for consistent vertical spacing:
```tsx
<Spacer size="d122" />  // Small spacing
<Spacer size="d164" />  // Medium spacing
<Spacer size="large" /> // Large spacing
```

### Typography
- **Display/Headings**: Clash Display
- **Body Text**: Messina Sans
- **Editorial**: TT Livret Text

### Color System
- Primary Background: `#F1EEE9`
- Primary Text: `#151515`
- Accent Yellow: `#FFCC00`
- Secondary Gray: `#9c9c9c`

## 📊 Data & CMS

### Strapi Integration
Content is managed through a headless Strapi CMS. See [`/lib/api`](./lib/README.md) for API documentation.

Environment variables required:
```env
NEXT_PUBLIC_STRAPI_BASE_URL=https://your-strapi-instance.com
NEXT_PUBLIC_STRAPI_DEV_API_TOKEN=your-api-token
```

## 🔧 Development Guidelines

### TypeScript
Always define prop types:
```typescript
interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}
```

### Client vs Server Components
Use Server Components by default. Only add `'use client'` when you need:
- React hooks (useState, useEffect, etc.)
- Event handlers
- Browser APIs

## 📈 Analytics

Integrated analytics platforms:
- Google Analytics
- PostHog (product analytics)
- LinkedIn Insight Tag
- Twitter Pixel
- HubSpot
- Koala

All configured in `app/layout.tsx`.

## 🚢 Deployment

```bash
# Build for production
npm run build

# Start production server
npm run start
```

## 📄 License

UNLICENSED - Proprietary software for GrowthX

## 👥 Authors

Built by Litebox LLC for GrowthX

---

For detailed information about specific directories, see the README files in each directory.
