# Homepage Footer & Navigation Plan

## Design System Summary

Based on the visual references, here are the key design tokens:

**Colors:**
- Page background: Cream/Beige (#E8E2DA or similar)
- Footer/Sitemap section background: #E6E3DE (darker cream, edge-to-edge)
- Dark text: Black or near-black
- Muted text: Gray (#999 or similar)
- Button dark bg: Black with white text
- Button secondary bg: #E6E3DE (existing secondary variant)
- Button tertiary bg: #F1EEE9 (cream/off-white - for social links)
- Input border: 1px stroke in muted color
- Input background: Same as page bg

**Typography:**
- Newsletter title: 20px
- Label text: text-sm
- CTA buttons: Medium weight with arrow icons
- Title Dark: Large, bold
- Title Muted: Large, regular weight

**Spacing:**
- Newsletter title to input: 24px gap
- Social buttons: 16px gap
- Sitemap height: 66px
- Sticky CTA positioning: 12px from top (mobile), 14px from top (desktop)

**Sticky CTA Behavior:**
- The "Discover now" button from the CTA Section becomes sticky when scrolling
- Mobile: Sticks at 12px from viewport top
- Desktop: Sticks at 14px from viewport top, appears in the navbar at right edge

**Components:**
- Rounded corners on buttons and inputs
- Inline arrow icons (→) in CTAs
- Backdrop blur on sticky nav: 15px
- Grid system: 12 columns (reused throughout)
- Button variants: Reuse base Button component
  - primary: Black bg with white text (existing)
  - secondary: #E6E3DE bg (existing)
  - tertiary: #F1EEE9 bg (new variant for social links)
- Loading spinner: CSS-based spinning circle (from mikematas-com project)
  - Reference: /Users/georgemaine/Developer/_/projects/mikematas-com/components/video/videoLoader.tsx
  - Reference: /Users/georgemaine/Developer/_/projects/mikematas-com/components/video/video.module.css
  - 40px desktop, 30px mobile, opacity 0.7, spinning border animation

---

## Global navigation

**Logo SVG:**
```svg
<svg width="113" height="18" viewBox="0 0 113 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M110.886 15.2056C111.552 15.2056 112.093 15.7504 112.093 16.4222C112.093 17.094 111.553 17.6388 110.886 17.6388C110.219 17.6388 109.681 17.094 109.681 16.4222C109.681 15.7504 110.221 15.2056 110.886 15.2056ZM110.886 15.4486C110.353 15.4486 109.922 15.8838 109.922 16.4222C109.922 16.9606 110.353 17.3958 110.886 17.3958C111.42 17.3958 111.851 16.9606 111.851 16.4222C111.851 15.8838 111.42 15.4486 110.886 15.4486ZM110.946 15.8139C111.179 15.8139 111.368 16.0045 111.368 16.2396C111.368 16.3936 111.286 16.5286 111.165 16.6033L111.471 17.0305H111.174L110.911 16.6652H110.644V17.0305H110.403V15.8139H110.946ZM110.946 16.0569H110.644V16.4222H110.946C111.04 16.4222 111.117 16.3491 111.125 16.257V16.2396C111.125 16.1379 111.045 16.0569 110.946 16.0569Z" fill="#151515"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.7015 4.38654V17.6417H21.9833V7.70113H25.4995V4.38812H18.6999L18.7015 4.38654Z" fill="#151515"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.771 7.45986C31.0294 7.45986 29.4892 8.9766 29.4892 11.0095C29.4892 13.0424 31.0294 14.5592 32.771 14.5592C34.5126 14.5592 36.0528 13.0424 36.0528 11.0095C36.0528 8.9766 34.5126 7.45986 32.771 7.45986ZM26.2074 11.0111C26.2074 7.2931 29.0754 4.14685 32.7726 4.14685C36.4697 4.14685 39.3377 7.2931 39.3377 11.0111C39.3377 14.7291 36.4697 17.8753 32.7726 17.8753C29.0754 17.8753 26.2074 14.7291 26.2074 11.0111Z" fill="#151515"/>
<path d="M52.6378 17.6417H56.2752L60.8659 4.38809H57.3874L54.5493 13.5537L52.3499 5.80795C51.6529 3.61622 48.5804 3.61622 47.885 5.80795L45.7045 13.4949L42.967 4.38809H39.4964L43.933 17.6417H47.5814L50.1175 8.32368L52.6378 17.6417Z" fill="#151515"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M62.3144 1.54715H65.5962V4.38687H69.1124V7.69988H65.5962V14.3275H69.1124V17.6405H67.2371C64.5185 17.6405 62.3129 15.4154 62.3129 12.6694V1.54715H62.3144Z" fill="#151515"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M70.9869 0.00799561H74.2687V4.38669H77.5505C80.269 4.38669 82.4747 6.61178 82.4747 9.35779V17.6419H79.1929V7.70129H74.2687V17.6419H70.9869V0.00799561Z" fill="#151515"/>
<path d="M3.30225 8.99395C3.30225 5.80482 5.71876 3.36374 8.53016 3.36374C10.223 3.36374 11.5996 4.09114 12.5246 5.30136H16.3083C15.0245 2.25041 12.2619 0.0300903 8.52859 0.0300903C3.74276 0.0300903 0 4.12132 0 8.99395C0 13.8666 3.73332 17.9578 8.52229 17.9578C11.082 17.9578 13.2436 17.043 14.7634 15.45C16.2721 13.8682 17.0446 11.7288 17.0446 9.45612V7.79009H8.52859V11.1237H13.5174C13.2908 11.9163 12.9006 12.5992 12.3862 13.1392C11.5477 14.0175 10.2749 14.6257 8.52387 14.6257C5.71562 14.6257 3.30382 12.1863 3.30382 8.99554L3.30225 8.99395Z" fill="#151515"/>
<path d="M108.411 0.00158821H103.805C101.422 0.00158821 99.2143 1.26739 97.9934 3.33524L96.5413 5.79538L90.7392 0.00317642H82.4702L91.6517 9.16715C92.24 9.76114 93.2926 10.5378 93.8117 10.8268C93.84 10.8427 93.829 10.8856 93.796 10.8856H85.9848V17.6403H87.0766C89.4601 17.6403 91.6674 16.3745 92.8882 14.3066L94.3388 11.8481L100.142 17.6403H108.411L98.8304 8.07764C98.2829 7.52494 97.7071 7.06913 97.1329 6.81501C97.1014 6.80072 97.1108 6.75466 97.1454 6.75466H108.413V0L108.411 0.00158821Z" fill="#151515"/>
</svg>
```

### Mobile XP

- navbar non-sticky. re-use grid container. h-fit, pt64px
- No menu icon (one pager)
- CTA in join us section becomes sticky at 12px

```
┌────────────────────────────────────────┐
│ Grid Container (12 cols)               │
│ h-fit, pt-64px, NON-STICKY             │
│                                        │
│  ┌─────────────┐                      │
│  │ GrowthX     │                      │
│  │ Logo (SVG)  │                      │
│  └─────────────┘                      │
│                                        │
└────────────────────────────────────────┘

Note: CTA from "Join us" section becomes sticky at 12px from top
```

### Desktop XP

- nav re-uses grid. left edge has logo
- navbar height 64px page bg 75% bg-blur 15px sticky
- CTA from "join us" section sticks to right edge at 14px from top

```
┌──────────────────────────────────────────────────────────────────┐
│ Grid Container (12 cols)                                         │
│ h-64px, STICKY, bg-page 75% opacity, backdrop-blur-15px         │
│                                                                  │
│  ┌────────────┬────────────────────────────┬───────────────────┐│
│  │ GrowthX    │                            │  [Discover now →] ││
│  │ Logo       │        (empty)             │  (sticky CTA from ││
│  │ (left edge)│                            │   Join us section)││
│  └────────────┴────────────────────────────┴───────────────────┘│
└──────────────────────────────────────────────────────────────────┘

Note: The CTA button from "Join us" section becomes sticky and appears
      in the navbar at 14px from top when scrolling on desktop
```

## CTA Section

### Mobile XP

- reuse Grid
- Label: col-span-full, "Join us"
- Content: col-span-full, stacked (Title Group + CTA)
- Title Group
  -- Title Dark: "Get started with AI-Led Growth"
  -- Title Muted: "Whether you're a budding startup or an established enterprise, discover how our AI can streamline your content creation and fuel your growth."
- CTA Discover now

```
┌────────────────────────────────────────┐
│ Grid Container (12 cols)               │
│                                        │
│  ┌──────────────────────────────────┐ │
│  │ Join us (text-sm, muted)         │ │
│  │ col-span-full                    │ │
│  └──────────────────────────────────┘ │
│                                        │
│  ┌──────────────────────────────────┐ │
│  │ Get started with AI-Led Growth   │ │
│  │ (large, dark, bold)              │ │
│  │                                  │ │
│  │ Whether you're a budding startup │ │
│  │ or an established enterprise...  │ │
│  │ (large, muted)                   │ │
│  │                                  │ │
│  │  [Discover now  →]               │ │
│  │  (dark button, rounded)          │ │
│  │ col-span-full                    │ │
│  └──────────────────────────────────┘ │
│                                        │
└────────────────────────────────────────┘
```

### Desktop XP

- reuse Grid
- Label: col-span-1, "Join us"
- Gap: col 2 empty
- Content: col-span-8 col-start-3 (Title Group + CTA stacked)
- Cols 11-12: empty
- Title Group
  -- Title Dark: "Get started with AI-Led Growth"
  -- Title Muted: "Whether you're a budding startup or an established enterprise, discover how our AI can streamline your content creation and fuel your growth."
- CTA Discover now

```
┌─────────────────────────────────────────────────────────────────────┐
│ Grid Container (12 cols)                                            │
│                                                                     │
│  ┌────┬─┬───────────────────────────────────────────────────────┐  │
│  │Col │2│  Col 3-10 (Content Area)                              │  │
│  │1   │ │                                                        │  │
│  │    │ │  ┌──────────────────────────────────────────────────┐ │  │
│  │Join│ │  │ Get started with AI-Led Growth (dark, bold)      │ │  │
│  │us  │ │  └──────────────────────────────────────────────────┘ │  │
│  │    │ │  ┌──────────────────────────────────────────────────┐ │  │
│  │    │ │  │ Whether you're a budding startup or an           │ │  │
│  │    │ │  │ established enterprise, discover how our AI      │ │  │
│  │    │ │  │ can streamline your content creation and fuel    │ │  │
│  │    │ │  │ your growth. (muted)                             │ │  │
│  │    │ │  └──────────────────────────────────────────────────┘ │  │
│  │    │ │                                                        │  │
│  │    │ │  ┌─────────────────────┐                              │  │
│  │    │ │  │ Discover now    →   │                              │  │
│  │    │ │  └─────────────────────┘                              │  │
│  └────┴─┴───────────────────────────────────────────────────────┘  │
│                                                        Cols 11-12   │
└─────────────────────────────────────────────────────────────────────┘
```

References:

- /Users/georgemaine/Developer/growthxai/website/tmp/footer/cta-section-mobile-experience.png
- /Users/georgemaine/Developer/growthxai/website/tmp/footer/cta-section-desktop-experience.png

## Footer CTA Section

**Background:** #E6E3DE (darker cream, edge-to-edge full width)

**Footer X Logo SVG:**
```svg
<svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.7215 3.00146H19.5092C17.3297 3.00146 15.3113 4.16176 14.1949 6.05726L12.8671 8.31236L7.56141 3.00291H0L8.39581 11.4031C8.93386 11.9476 9.89629 12.6595 10.371 12.9245C10.3969 12.939 10.3869 12.9783 10.3567 12.9783H3.21388V19.17H4.21229C6.3918 19.17 8.4102 18.0097 9.52657 16.1142L10.853 13.8606L16.1601 19.17H23.7215L14.9603 10.4044C14.4596 9.89776 13.9331 9.47994 13.408 9.247C13.3792 9.2339 13.3878 9.19168 13.4195 9.19168H23.7229V3L23.7215 3.00146Z" fill="#080A0D"/>
</svg>
```

### Mobile XP

- Full-width background #E6E3DE (edge-to-edge)
- Grid inside background section
- Stack content
- Row one: X logo (GrowthX mark)
- Row two: newsletter, title(20px, dark color, 24px gap title/field) "Subscribe to the GrowthX Newsletter", input "E-mail"(rounded, stroke, page bg, 1px, 16px font size. inline rounded arrow right icon cta "F1EEE9" bg ). Re-use logic/flow from main. onClick/submit btn -> show CSS spinner loader (from mikematas-com videoLoader.tsx) as cta icon, once completed show checkmark
- Row 3
  --- flex container
  ---- text sm muted "follow us" occupy space
  ---- flex container, w-fit, gap 16px
  ----- for each linkedin//twitter create tertiary btn variant (bg #F1EEE9) + arrow right icon.

```
┌────────────────────────────────────────────────────────┐
│ ▓▓▓▓▓▓▓▓▓▓▓ FULL WIDTH BG #E6E3DE ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│ ▓                                                    ▓ │
│ ▓  ┌────────────────────────────────────────────┐  ▓ │
│ ▓  │ Grid Container (12 cols)                   │  ▓ │
│ ▓  │                                            │  ▓ │
│ ▓  │  ┌──────────────────────────────────────┐ │  ▓ │
│ ▓  │  │  ╳  (X logo, dark)                   │ │  ▓ │
│ ▓  │  └──────────────────────────────────────┘ │  ▓ │
│ ▓  │                                            │  ▓ │
│ ▓  │  ┌──────────────────────────────────────┐ │  ▓ │
│ ▓  │  │ Subscribe to the GrowthX Newsletter  │ │  ▓ │
│ ▓  │  │ (20px, dark, 24px gap below)         │ │  ▓ │
│ ▓  │  └──────────────────────────────────────┘ │  ▓ │
│ ▓  │                                            │  ▓ │
│ ▓  │  ┌──────────────────────────────────────┐ │  ▓ │
│ ▓  │  │ ┌────────────────────────────────┐   │ │  ▓ │
│ ▓  │  │ │ E-mail               [→]       │   │ │  ▓ │
│ ▓  │  │ │ (rounded, stroke, bg page)     │   │ │  ▓ │
│ ▓  │  │ └────────────────────────────────┘   │ │  ▓ │
│ ▓  │  └──────────────────────────────────────┘ │  ▓ │
│ ▓  │                                            │  ▓ │
│ ▓  │  ┌──────────────────────────────────────┐ │  ▓ │
│ ▓  │  │ Follow us (text-sm, muted)           │ │  ▓ │
│ ▓  │  │ ┌────────────────┐ ┌──────────────┐ │ │  ▓ │
│ ▓  │  │ │ LinkedIn   →   │ │ Twitter  →   │ │ │  ▓ │
│ ▓  │  │ │ (tertiary btn) │ │ (tertiary)   │ │ │  ▓ │
│ ▓  │  │ │ bg #F1EEE9     │ │ bg #F1EEE9   │ │ │  ▓ │
│ ▓  │  │ └────────────────┘ └──────────────┘ │ │  ▓ │
│ ▓  │  └──────────────────────────────────────┘ │  ▓ │
│ ▓  └────────────────────────────────────────────┘  ▓ │
│ ▓                                                    ▓ │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
└────────────────────────────────────────────────────────┘
```

### Desktop XP

- Full-width background #E6E3DE (edge-to-edge)
- Grid inside background section
- X Logo span 2 col aligned to top and left edge
- Newsletter span Col 3-6 (4 cols total)
- Follow links occupy rest (Col 7-12), content aligned to right and bottom edge

```
┌────────────────────────────────────────────────────────────────────────────────────┐
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ FULL WIDTH BG #E6E3DE ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│ ▓                                                                                ▓ │
│ ▓  ┌──────────────────────────────────────────────────────────────────────────┐▓ │
│ ▓  │ Grid Container (12 cols)                                                 │▓ │
│ ▓  │                                                                          │▓ │
│ ▓  │  ┌──────┬───────────────────────────────┬──────────────────────────────┐│▓ │
│ ▓  │  │Col   │ Col 3-6                       │ Col 7-12                     ││▓ │
│ ▓  │  │1-2   │                               │                              ││▓ │
│ ▓  │  │      │                               │                (top aligned) ││▓ │
│ ▓  │  │ ╳    │ Subscribe to the GrowthX      │                              ││▓ │
│ ▓  │  │      │ Newsletter (20px, dark)       │                              ││▓ │
│ ▓  │  │(top  │                               │                              ││▓ │
│ ▓  │  │left) │ ┌────────────────────────┐    │                              ││▓ │
│ ▓  │  │      │ │ E-mail          [→]    │    │                              ││▓ │
│ ▓  │  │      │ │ (rounded, stroke,      │    │                              ││▓ │
│ ▓  │  │      │ │  bg page color)        │    │                              ││▓ │
│ ▓  │  │      │ └────────────────────────┘    │                              ││▓ │
│ ▓  │  │      │                               │            (bottom aligned)  ││▓ │
│ ▓  │  │      │                               │  Follow us ┌──────┐ ┌──────┐││▓ │
│ ▓  │  │      │                               │  (muted)   │LinkedIn│Twitter│││▓ │
│ ▓  │  │      │                               │            │   →   │   →   │││▓ │
│ ▓  │  │      │                               │            │tertiary│tertiary││▓ │
│ ▓  │  │      │                               │            └──────┘ └──────┘││▓ │
│ ▓  │  └──────┴───────────────────────────────┴──────────────────────────────┘│▓ │
│ ▓  └──────────────────────────────────────────────────────────────────────────┘▓ │
│ ▓                                                                                ▓ │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
└────────────────────────────────────────────────────────────────────────────────────┘
```

**Newsletter API Integration:**
- Endpoint: POST /app/api/subscribe/route.ts (exists on main branch)
- Uses Beehiiv API v2 for subscriptions
- Requires env vars: NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID, NEXT_PUBLIC_BEEHIIV_API_TOKEN
- Request: { email: string }
- Loading state: CSS spinner (not video files)

References:

- /Users/georgemaine/Developer/growthxai/website/tmp/footer/footer-cta-section-mobile-experience.png
  /Users/georgemaine/Developer/growthxai/website/tmp/footer/footer-cta-section-desktop-experience.png

## Sitemap section

**Background:** #E6E3DE (darker cream, edge-to-edge full width)

- text sm muted height 66px "© 2025 GrowthX. All rights reserved." left aligned.

### Mobile & Desktop XP (Same layout)

```
┌────────────────────────────────────────────────────────────────┐
│ ▓▓▓▓▓▓▓▓▓▓▓ FULL WIDTH BG #E6E3DE ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│ ▓                                                            ▓ │
│ ▓  ┌──────────────────────────────────────────────────────┐ ▓│
│ ▓  │ Grid Container (12 cols)                             │ ▓│
│ ▓  │                                                      │ ▓│
│ ▓  │  ┌────────────────────────────────────────────────┐ │ ▓│
│ ▓  │  │ © 2025 GrowthX. All rights reserved.           │ │ ▓│
│ ▓  │  │ (text-sm, muted, h-[66px], left-aligned)       │ │ ▓│
│ ▓  │  └────────────────────────────────────────────────┘ │ ▓│
│ ▓  │                                                      │ ▓│
│ ▓  └──────────────────────────────────────────────────────┘ ▓│
│ ▓                                                            ▓ │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
└────────────────────────────────────────────────────────────────┘
```

References:
  - /Users/georgemaine/Developer/growthxai/website/tmp/footer/footer-sitemap-section-desktop-experience.png
  - /Users/georgemaine/Developer/growthxai/website/tmp/footer/footer-sitemap-section-mobile-experience.png
