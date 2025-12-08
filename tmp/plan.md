# GrowthX Website Redesign - Implementation Plan

> **Goal:** Convert companies to use GrowthX for growth marketing. Secondary: branding & hiring.
> **Stack:** Next.js 16 + React 19 + Tailwind CSS + shadcn/ui + react-spring
> **CTA:** Book a Call → https://growthx.ai/book-demo (Typeform)
> **Content:** Static JSON (`lib/content.json`)

---

## Design Tokens

### Colors (Mapped to shadcn semantics)

| shadcn Token             | Hex       | GrowthX Name    | Usage                                       |
| ------------------------ | --------- | --------------- | ------------------------------------------- |
| `--background`           | `#F1EEE9` | paper           | Page background (`bg-background`)           |
| `--foreground`           | `#080A0D` | ink             | Primary text (`text-foreground`)            |
| `--primary`              | `#080A0D` | ink             | Primary buttons (`bg-primary`)              |
| `--primary-foreground`   | `#F1EEE9` | paper           | Text on primary (`text-primary-foreground`) |
| `--secondary`            | `#E6E3DE` | paper-secondary | Secondary bg (`bg-secondary`)               |
| `--secondary-foreground` | `#080A0D` | ink             | Text on secondary                           |
| `--muted`                | `#E6E3DE` | paper-secondary | Muted backgrounds (`bg-muted`)              |
| `--muted-foreground`     | `#959595` | charcoal        | Muted text (`text-muted-foreground`)        |
| `--accent`               | `#FFC3D6` | pink            | Accent color (`bg-accent`)                  |
| `--accent-foreground`    | `#080A0D` | ink             | Text on accent                              |
| `--border`               | `#B3B3B3` | border          | Borders (`border-border`)                   |
| `--input`                | `#B3B3B3` | border          | Input borders                               |
| `--ring`                 | `#080A0D` | ink             | Focus rings                                 |

**Additional brand colors (non-shadcn):**
| Token      | Hex       | Usage        |
| ---------- | --------- | ------------ |
| `--icon`   | `#231F20` | Icon color   |
| `--pink`   | `#FFC3D6` | Accent pink  |
| `--yellow` | `#FFE57B` | Accent yellow |

### Typography

- **Font:** Messina Sans (all text)
- **Weights:** Regular (400), Medium (500), Semibold (600), Bold (700)

---

## Table of Contents

1. [Phase 1: Foundation](#phase-1-foundation) - Design system, Grid, Nav, Footer
2. [Phase 2: Hero Section](#phase-2-hero-section)
3. [Phase 3: Partners Section](#phase-3-partners-section)
4. [Phase 4: Video Section](#phase-4-video-section)
5. [Phase 5: Features Section](#phase-5-features-section)
6. [Phase 6: People Section](#phase-6-people-section)
7. [Phase 7: Process Section](#phase-7-process-section)
8. [Phase 8: Comparison Section](#phase-8-comparison-section)
9. [Phase 9: Fit Section](#phase-9-fit-section)
10. [Phase 10: Pricing Section](#phase-10-pricing-section)
11. [Phase 11: Join Us Section](#phase-11-join-us-section)

---

## Phase 1: Foundation (Global Components)

**Goal:** Set up design system, typography, grid, and reusable components.

### 1.1 Shadcn Setup

```bash
# Initialize shadcn with React 19 compatibility
npx shadcn@latest init --legacy-peer-deps

# Add essential components
npx shadcn@latest add button card badge separator navigation-menu sheet input --legacy-peer-deps
```

**Files Created:**

- `components.json` - shadcn configuration
- `lib/utils.ts` - shadcn's `cn()` utility (we'll replace with classnames)
- `components/ui/*` - Base shadcn components

### 1.2 Directory Structure

```
/components
  /ui                    # shadcn base (don't modify)
    button.tsx
    card.tsx
    badge.tsx
    ...
  /grid
    gridRoot.tsx
  /navbar
    navbarRoot.tsx
    navbarDesktop.tsx
    navbarMobile.tsx
  /footer
    footerRoot.tsx
    footerNewsletter.tsx
    footerLinkColumn.tsx
  /hero
    heroRoot.tsx
    heroLogoGrid.tsx
    heroVideo.tsx
  /assets
    assetsIcons.tsx      # All SVG icons in one file
/lib
  classnames.ts          # classnames utility
  hooks.ts               # All custom hooks in one file
  content.json           # Static content data
  data.ts                # Data access layer
/assets
  /fonts                 # Messina Sans font files
```

### 1.3 Classnames Utility

```typescript
// lib/classnames.ts
import classNames from "classnames";
import { twMerge } from "tailwind-merge";

export function cx(...inputs: classNames.ArgumentArray) {
  return twMerge(classNames(inputs));
}
```

**Install dependencies:**
```bash
npm install classnames tailwind-merge
```

### 1.4 Design Tokens (globals.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* =========================
       SHADCN SEMANTIC COLORS
       Mapped to GrowthX brand palette
       ========================= */
    --background: 45 24% 94%;        /* #F1EEE9 - paper */
    --foreground: 210 23% 3%;        /* #080A0D - ink */

    --card: 0 0% 100%;               /* #FFFFFF */
    --card-foreground: 210 23% 3%;   /* ink */

    --popover: 0 0% 100%;
    --popover-foreground: 210 23% 3%;

    --primary: 210 23% 3%;           /* #080A0D - ink */
    --primary-foreground: 45 24% 94%; /* paper */

    --secondary: 40 16% 88%;         /* #E6E3DE - paper-secondary */
    --secondary-foreground: 210 23% 3%;

    --muted: 40 16% 88%;             /* #E6E3DE */
    --muted-foreground: 0 0% 58%;    /* #959595 - charcoal */

    --accent: 343 100% 88%;          /* #FFC3D6 - pink */
    --accent-foreground: 210 23% 3%;

    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 98%;

    --border: 0 0% 70%;              /* #B3B3B3 */
    --input: 0 0% 70%;
    --ring: 210 23% 3%;              /* ink */

    /* =========================
       ADDITIONAL BRAND COLORS
       ========================= */
    --icon: 0 4% 12%;                /* #231F20 */
    --pink: 343 100% 88%;            /* #FFC3D6 */
    --yellow: 47 100% 74%;           /* #FFE57B */

    /* =========================
       RADIUS (shadcn default)
       ========================= */
    --radius: 0.5rem;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-family: var(--font-messina), system-ui, sans-serif;
  }
}
```

### 1.5 Tailwind Config Extension

```typescript
// tailwind.config.ts
// NOTE: shadcn init will generate most of this. We only add:
// - fontFamily for Messina
// - Additional brand colors (icon, pink, yellow)

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // shadcn will auto-generate these color mappings from CSS vars
      // We just add our extra brand colors
      colors: {
        icon: "hsl(var(--icon))",
        pink: "hsl(var(--pink))",
        yellow: "hsl(var(--yellow))",
      },
      fontFamily: {
        sans: ["var(--font-messina)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
```

**Usage examples with shadcn classes:**

```tsx
// These all work out of the box:
<div className="bg-background text-foreground" />      // paper bg, ink text
<div className="bg-primary text-primary-foreground" /> // ink bg, paper text
<div className="bg-secondary" />                       // paper-secondary bg
<div className="bg-muted text-muted-foreground" />     // muted bg, charcoal text
<div className="bg-accent" />                          // pink bg
<div className="border-border" />                      // #B3B3B3 border
<div className="text-icon" />                          // #231F20 for icons
<div className="bg-pink" />                            // pink accent
<div className="bg-yellow" />                          // yellow accent
```

### 1.6 Grid Component

```tsx
// components/grid/gridRoot.tsx
import { cx } from "@/lib/classnames";
import { PropsWithChildren } from "react";

interface GridProps {
  className?: string;
}

export function Grid({ children, className }: PropsWithChildren<GridProps>) {
  return (
    <div
      className={cx(
        "mx-auto w-full px-5 max-w-[1280px]",
        "grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12",
        "gap-x-3 md:gap-x-4 lg:gap-x-5",
        className
      )}
    >
      {children}
    </div>
  );
}
```

**Grid specs:**
- 12 columns on desktop (lg+)
- 8 columns on tablet (md)
- 4 columns on mobile
- 20px (gap-x-5) horizontal gap on desktop
- 16px (gap-x-4) on tablet
- 12px (gap-x-3) on mobile
- Max width: 1280px
- Padding: 20px (px-5)

### 1.7 Hooks

```tsx
// lib/hooks.ts
"use client";

import { useState, useEffect, useRef } from "react";

// Media query hook
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

// Scroll direction hook (for hiding navbar on scroll)
export function useScrollDirection() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY.current;
      const isAtTop = currentScrollY <= 0;

      setIsVisible(isScrollingUp || isAtTop);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isVisible };
}
```

---

## Phase 1 File Checklist

| File                            | Purpose                       | Status |
| ------------------------------- | ----------------------------- | ------ |
| `npx shadcn@latest init`        | Initialize shadcn             | ⬜     |
| `npm i classnames tailwind-merge` | Install classnames          | ⬜     |
| `lib/classnames.ts`             | cx() utility                  | ⬜     |
| `lib/hooks.ts`                  | Custom hooks                  | ⬜     |
| `app/globals.css`               | Design tokens & CSS variables | ⬜     |
| `tailwind.config.ts`            | Extended theme config         | ⬜     |
| `components/ui/*`               | Shadcn base components        | ⬜     |
| `components/grid/gridRoot.tsx`  | Grid/Container component      | ⬜     |

---

## Phase 2: Hero Section

*To be detailed after Phase 1 is complete.*

---

## Phase 3: Partners Section

*To be detailed after Phase 2 is complete.*

---

## Phase 4: Video Section

*To be detailed after Phase 3 is complete.*

---

## Phase 5: Features Section

*To be detailed after Phase 4 is complete.*

---

## Phase 6: People Section

*To be detailed after Phase 5 is complete.*

---

## Phase 7: Process Section

*To be detailed after Phase 6 is complete.*

---

## Phase 8: Comparison Section

*To be detailed after Phase 7 is complete.*

---

## Phase 9: Fit Section

*To be detailed after Phase 8 is complete.*

---

## Phase 10: Pricing Section

*To be detailed after Phase 9 is complete.*

---

## Phase 11: Join Us Section

*To be detailed after Phase 10 is complete.*
