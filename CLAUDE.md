# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development (runs on port 3555)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Install dependencies
npm install
```

## Architecture Overview

### Stack
- **Framework**: Next.js 15.5.2 (App Router)
- **Package Manager**: npm (standardized for both dev and production)
- **Styling**: Tailwind CSS with custom animations
- **Content Management**: Strapi CMS integration
- **State Management**: React Query (@tanstack/react-query)
- **Type System**: TypeScript with strict mode enabled

### Key Architectural Patterns

#### 1. API Integration Layer
All Strapi CMS interactions go through `/lib/api/strapi/`:
- `config.ts`: Base Axios instance with auth token middleware
- Individual files for each content type (blog, case-studies, sections)
- Uses `getWithQsParams` helper for consistent query string handling

#### 2. Dynamic Route Handling (Next.js 15)
Dynamic routes now use Promise-based params:
```typescript
// Correct pattern for Next.js 15
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  // use resolvedParams.slug
}
```

#### 3. Component Organization
- **Single-file components**: `ComponentName.tsx`
- **Multi-file components**: `/ComponentName/index.tsx` with sub-components
- Component categories:
  - `/components/ui`: Atomic UI components
  - `/components/layout`: Page structure components
  - `/components/[feature]-sections`: Feature-specific sections
  - `/components/icons`: SVG icon components

#### 4. Section Spacing Pattern
All major sections on homepage and blog pages follow a consistent responsive spacing pattern:

**Standard Section Spacing:**
```tsx
// Use this pattern for py (vertical padding) or pt (top padding)
className="py-24 md:py-32 lg:py-44"
// OR
className="pt-24 md:pt-32 lg:pt-44"
```

**Breakdown:**
- Mobile: `py-24` = 96px
- Tablet: `md:py-32` = 128px
- Desktop: `lg:py-44` = 176px

**Examples:**
```tsx
// Homepage sections
<section className="pt-24 md:pt-32 lg:pt-44">
  <Grid>...</Grid>
</section>

// Blog sections
<Grid className="py-24 md:py-32 lg:py-44">
  <div>...</div>
</Grid>
```

**When to use:**
- All major page sections (hero, features, pricing, etc.)
- Blog sections (most recent, featured, all cards grid)
- Any section that needs consistent vertical spacing

**Exceptions:**
- Filter bars and smaller UI elements may use different spacing
- Headers may combine different pt/pb values (e.g., `pt-24 md:pt-32 lg:pt-44 pb-32`)

### Environment Configuration

Required environment variables:
```
NEXT_PUBLIC_STRAPI_BASE_URL       # Strapi CMS base URL
NEXT_PUBLIC_STRAPI_DEV_API_TOKEN  # API token for Strapi access
NEXT_PUBLIC_STRAPI_IS_LOCAL_ENV   # "true" for local development
APP_HOST                          # Production host (e.g., growthx.ai)
APP_PROTOCOL                      # Protocol (https/http)
```

### Path Aliases
- `@/*` maps to the project root (configured in tsconfig.json)

### Content Management
The site uses Strapi CMS for content management. Key content types:
- Blog articles with draft/publish states
- Case studies
- Various homepage sections (hero, pricing, FAQ, testimonials)

Draft content is shown when:
- `NEXT_PUBLIC_STRAPI_IS_LOCAL_ENV === "true"`
- `IS_PULL_REQUEST === "true"`

### Important Notes

1. **Next.js 15 Breaking Changes**: 
   - Removed config options: `swcMinify`, `outputFileTracing`
   - Dynamic route params are now Promises
   - Client components cannot be async

2. **Build Warnings to Address**:
   - Ambiguous Tailwind class `duration-[150ms]`
   - Missing dependency in `Input.tsx` useCallback hook
   - aria-disabled not supported by role search

3. **Port Configuration**: Dev server runs on port 3555 (not default 3000)

4. **Image Optimization**: Remote images from Strapi and HTTPS sources are allowed

5. **Redirects**: Configured in next.config.js for:
   - /resources/* → /guides/*
   - /blog/:id/:slug → /blog/:slug
   - /workshop → external Luma link

6. **Production Deployment**: Render.com uses npm for builds and deployments