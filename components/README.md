# `/components` - React Components

This directory contains all reusable React components organized by feature, section, and purpose. Components follow a structured naming and filing convention for maintainability and scalability.

## Directory Structure

### `./components/about-sections`
Components specific to the About page (`/about`).

**Subdirectories**:
- `Company/`: Company information section
- `Footer/`: About page-specific footer (if different from global)
- `HeroSection/`: About page hero/header
- `Statement/`: Mission/vision statement section
- `Testimonials/`: Customer testimonials
- `Values/`: Company values section
- `v2/`: Version 2 redesigned components

**Purpose**: Page-specific components that compose the About page layout and content.

### `./components/analytics`
Analytics and tracking components.

**Contents**:
- Analytics provider wrappers
- Tracking event components
- Third-party analytics integrations (Google Analytics, PostHog, etc.)

**Usage**:
```typescript
import { PostHogPageView } from '@/components/analytics/PostHogPageView';
```

### `./components/blog-sections`
Components specific to blog pages and blog listing.

**Subdirectories**:
- `ArticlePage/`: Individual blog post page components
- `ArticlesSection/`: Blog listing/grid components
- `v2/`: Version 2 blog components

**Purpose**: Components for rendering blog content, article cards, and blog-specific layouts.

### `./components/case-studies-sections`
Components for case study pages.

**Subdirectories**:
- `v2/`: Version 2 case study components

**Purpose**: Dedicated components for displaying customer success stories and case studies.

### `./components/common`
Reusable components used across multiple pages and sections.

**Key Components**:
- `Button`: Shared button component with variants
- `CTABanner`: Call-to-action banner (used on multiple pages)
- `FullWidthBanner`: Full-width banner component
- `Spacer`: Consistent spacing component
- `TestimonialsCarousel`: Reusable testimonial carousel
- `TeamMemberCard`: Team member profile cards
- `AlignedLeft`: Left-aligned content layout
- `BookingFormEmbed`: Demo booking form

**Purpose**: Shared, generic components that maintain consistency across the application.

### `./components/home-sections`
Components specific to the homepage (`/`).

**Subdirectories**:
- `HeroSection/`: Homepage hero component
- `HeroVideoSection/`: Hero with video background
- `v2/`: Version 2 homepage components
  - `HelpedGrowSection`
  - `CaseStudySection`
  - `ServiceAsSoftware`
  - `HowItWorksSection`
  - `ResultsSection`
  - `PricingSection`
  - `BannerSection`
  - `TestimonialsSection`
  - `FaqContentLayoutSection`

**Purpose**: Homepage-specific sections that compose the main landing page.

### `./components/icons`
SVG icon components.

**Contents**:
- Custom icon components built from SVG files
- Named icons for specific UI elements
- Reusable across the application

**Naming Convention**: Descriptive names often with size suffix
- Example: `ArrowRight16`, `Logo`, `CheckIcon`

**Usage**:
```typescript
import ArrowRight16 from '@/components/icons/ArrowRight16';

<ArrowRight16 className="w-4 h-4" />
```

### `./components/layout`
Global layout components used on every page.

**Subdirectories**:
- `Footer/`: Global footer component
  - `v2/`: Version 2 footer
- `Navbar/`: Global navigation bar
  - Multiple navigation variants

**Purpose**: Components that provide consistent structure across all pages.

### `./components/pages-sections`
Components for pages under the `/pages` route.

**Subdirectories**:
- `origin-story/`: Origin story page components
  - `HeroSection`
  - `VideoSection`
  - `ProblemSection`
  - `ProofPointSection`
  - `ScalingSection`
  - `PatternSection`
  - `BreakthroughSection`
  - `WorkshopsSection`
  - `DifferenceSection`
  - `ResultsSection`
  - `WhyItMattersSection`

**Purpose**: Page-specific components for the `/pages` directory routes.

### `./components/pricing-sections`
Components specific to the pricing page (`/pricing`).

**Subdirectories**:
- `ComparisonSection/`: Pricing comparison tables
- `ExpertsSection/`: Expert team showcase
- `HeroSection/`: Pricing page hero
- `WorkstreamsSection/`: Service offerings/workstreams
- `v2/`: Version 2 pricing components
  - `ExpertsV2`
  - `HeroV2`
  - `SolutionsSection`
  - `FormSection`

**Purpose**: Pricing page-specific sections and components.

### `./components/ui`
Low-level, atomic UI components.

**Contents**:
- Basic UI primitives (often from Shadcn UI)
- Button variants
- Input components
- Card components
- Modal/Dialog components
- Form elements

**Purpose**: Smallest, most reusable UI building blocks. These are typically styled wrappers around native HTML elements or third-party UI libraries.

## Component Naming & Filing Convention

### Single-File Components
Components defined in a single file must be in a `.tsx` file with the same name:

```
Navbar.tsx
```

**Usage**:
```typescript
import Navbar from '@/components/layout/Navbar';
```

### Multi-File Components
Components with multiple files must be in a folder with the component name:

```
HeroSection/
  ├── index.tsx       (main component)
  ├── Video.tsx       (sub-component)
  ├── utils.ts        (component-specific utilities)
  └── styles.module.css (optional styles)
```

**Main Component**: Always named `index.tsx` to shorten import paths

**Usage**:
```typescript
import HeroSection from '@/components/home-sections/HeroSection';
// Instead of: '@/components/home-sections/HeroSection/index'
```

### Naming Rules

1. **Always start with a capital letter**: `Button.tsx`, not `button.tsx`
2. **Use PascalCase**: `HeroSection`, not `hero-section` or `hero_section`
3. **Be descriptive**: `TestimonialsCarousel`, not `Carousel`
4. **Match folder and file names**: `HeroSection/index.tsx`

## Component Organization Best Practices

### 1. Co-location
Keep related files together:
```
HeroSection/
  ├── index.tsx
  ├── HeroImage.tsx
  ├── HeroContent.tsx
  ├── types.ts
  └── utils.ts
```

### 2. Versioning
Use `v2`, `v3` folders for redesigns:
```
components/
  ├── about-sections/
  │   ├── HeroSection.tsx    (old version)
  │   └── v2/
  │       └── HeroSection.tsx (new version)
```

This allows gradual migration without breaking existing pages.

### 3. Shared vs. Specific
- **Shared components**: `/components/common`
- **Page-specific components**: `/components/[page]-sections`
- **Global components**: `/components/layout`

### 4. Component Structure
```typescript
// 1. Imports
import React from 'react';
import { SomeType } from './types';

// 2. Types/Interfaces
interface MyComponentProps {
  title: string;
  onAction?: () => void;
}

// 3. Component
export default function MyComponent({ title, onAction }: MyComponentProps) {
  // 4. Hooks
  const [state, setState] = useState();

  // 5. Handlers
  const handleClick = () => { ... };

  // 6. Render
  return <div>...</div>;
}
```

## Component Development Guidelines

### Props Design
```typescript
// Good - specific, typed props
interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

// Bad - vague, untyped props
interface ButtonProps {
  [key: string]: any;
}
```

### Composition over Configuration
```typescript
// Good - composable
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>

// Bad - too many props
<Card title="Title" content="Content" showHeader={true} />
```

### Client vs Server Components
```typescript
// Client component (uses hooks, events)
'use client';
export function InteractiveButton() { ... }

// Server component (default, better performance)
export function StaticContent() { ... }
```

## Testing Components

```typescript
import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';

describe('HeroSection', () => {
  it('renders title', () => {
    render(<HeroSection title="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
```

## Related Documentation

- `/app`: Next.js pages that use these components
- `/lib/shadcn/ui`: Third-party UI components
- `/lib/litebox-lib/ui`: Litebox UI components
