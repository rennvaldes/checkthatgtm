# Homepage Migration Plan

## Overview
Migrate the new homepage from `feat__proj-reposition-website` branch to replace the current production homepage on `main` branch.

---

## Current State Analysis

### Source Branch: `feat__proj-reposition-website`
- **Location**: Fresh Next.js 15 install with isolated homepage
- **Homepage**: `app/page.tsx` - New composition using `components/home/*`
- **Components**: All home components isolated in `components/home/` directory (42 files)
- **Assets**:
  - Videos: `public/videos/*.mov` (4 files: context, strategy, execution, optimization)
  - Images: Various logo/image files referenced by components
- **Layout**: Minimal `app/layout.tsx` with just font loading
- **Only Route**: Home page (/)

### Target Branch: `main` (Production)
- **Location**: Full production site with multiple routes
- **Homepage**: `app/page.tsx` - Old homepage using `components/home-sections/*`
- **Routes**:
  - Blog (`/blog`, `/blog/[slug]`)
  - Guides (`/guides`, `/guides/[id]`)
  - Legal pages (`/legal/*`)
  - Pricing (`/pricing`)
  - About (`/about`)
  - Careers (`/careers`)
  - Tools (`/tools`, `/tools/[id]`)
  - Testimonials (`/testimonials`)
  - Book Demo (`/book-demo`)
  - Case Studies (`/_case-study/*`)
- **Layout**: Full `app/layout.tsx` with:
  - Navbar from `components/layout/Navbar`
  - Footer from `components/layout/Footer/v2`
  - Analytics (PostHog, Google Analytics, LinkedIn, Twitter)
  - Metadata and SEO
  - Font loading (Clash Display + Messina Sans)
- **Components**: Extensive component library for all routes

---

## Migration Strategy

### Phase 1: Preparation & Analysis

#### 1.1 Identify All Assets to Migrate
- [ ] List all video files in `public/videos/`
- [ ] List all image files referenced by new homepage components
- [ ] Compare fonts between branches (lib/fonts vs assets/fonts)
- [ ] Compare global styles (app/globals.css vs static/globals.css)
- [ ] Identify any new dependencies in package.json

#### 1.2 Verify Component Dependencies
- [ ] Confirm `components/home/` has no dependencies on old homepage
- [ ] Verify `components/ui/avatar.tsx` compatibility (shadcn component)
- [ ] Check if any lib utilities need updates (lib/data.ts, lib/classnames.ts, lib/content.json)

---

### Phase 2: Create Migration Branch

```bash
# 1. Ensure main is up to date
git checkout main
git pull origin main

# 2. Create migration branch from main
git checkout -b feat/new-homepage-migration

# 3. Verify starting point
git log -1 --oneline
```

---

### Phase 3: Copy New Homepage Components

#### 3.1 Copy Component Directory
```bash
# From feat__proj-reposition-website branch, copy components/home/ to new branch
git checkout feat__proj-reposition-website
git checkout feat/new-homepage-migration

# Copy entire home directory
git checkout feat__proj-reposition-website -- components/home/
```

**What Gets Copied:**
- `components/home/` (42 files)
  - `assets/` - Icons and logos
  - `button.tsx` - Custom button component
  - `comparison/` - Comparison section
  - `custom/` - Custom components (link-button)
  - `fit/` - Fit section
  - `footer/` - All footer components
  - `grid/` - Grid system
  - `hero/` - Hero sections
  - `people/` - People section
  - `platform/` - Platform section
  - `pricing/` - Pricing section
  - `process/` - Process section
  - `sectionHeader.tsx` - Section header component
  - `video/` - Video player system
  - `index.tsx` - Barrel export

#### 3.2 Update Home Page
```bash
# Copy new app/page.tsx
git checkout feat__proj-reposition-website -- app/page.tsx
```

**New `app/page.tsx` imports:**
```tsx
import { HeroText, HeroLogos, HeroVideo } from "@/components/home/hero";
import { PlatformFeatures } from "@/components/home/platform";
import { PeopleRoot } from "@/components/home/people";
import { ProcessRoot } from "@/components/home/process/processRoot";
import { ComparisonRoot } from "@/components/home/comparison";
import { FitRoot } from "@/components/home/fit";
import { PricingRoot } from "@/components/home/pricing";
import { NavigationBar, CtaSection, FooterCtaSection, SitemapSection } from "@/components/home/footer";
```

---

### Phase 4: Copy Assets

#### 4.1 Copy Video Files
```bash
# Copy all video files
git checkout feat__proj-reposition-website -- public/videos/
```

**Files to copy:**
- `public/videos/context.mov` (11.7 MB)
- `public/videos/strategy.mov` (11.8 MB)
- `public/videos/execution.mov` (8.2 MB)
- `public/videos/optimization.mov` (847 KB)

#### 4.2 Copy Image Files
```bash
# Identify which images are new/different
git diff main:public/ feat__proj-reposition-website:public/ --name-only

# Copy new images
git checkout feat__proj-reposition-website -- public/images/
```

**Expected images to migrate:**
- Company logos (Scale, TechCrunch, Grammarly, Framer, Pitch, Lyft, Semrush)
- Team member avatars
- Any new icons or graphics

#### 4.3 Verify Asset Paths
- [ ] Check all image paths in components reference correct locations
- [ ] Verify video paths match `public/videos/*.mov`
- [ ] Ensure no broken asset references

---

### Phase 5: Fonts & Typography

#### 5.1 Compare Font Setup

**Source branch** (`feat__proj-reposition-website`):
- Location: `lib/fonts.ts`
- Uses: Messina Sans (variable font)

**Target branch** (`main`):
- Location: `assets/fonts.ts`
- Uses: Clash Display + Messina Sans

#### 5.2 Font Migration Strategy

**Option A: Keep both font files (recommended)**
- Keep main branch's `assets/fonts.ts` (for other routes)
- Also keep new branch's `lib/fonts.ts` if different
- Update imports in `app/layout.tsx` to include both

**Option B: Consolidate into single file**
- Merge font definitions into one file
- Update all imports across the codebase

**Recommended: Option A** - Less risk of breaking other routes

#### 5.3 Update Layout Font Loading
```bash
# Review current layout
cat app/layout.tsx

# Compare with new branch
git diff main:app/layout.tsx feat__proj-reposition-website:app/layout.tsx
```

**Important:** The new homepage uses `messinaSans.variable` - ensure this is loaded in the main layout.

---

### Phase 6: Styles & Global CSS

#### 6.1 Compare Global Styles
```bash
# Check differences in global styles
git diff main:app/globals.css feat__proj-reposition-website:app/globals.css

# Or check if different location
git diff main:static/globals.css feat__proj-reposition-website:app/globals.css
```

#### 6.2 Merge CSS Changes

**Steps:**
1. Identify new CSS variables or classes added for new homepage
2. Add new styles to main branch's global CSS
3. Preserve existing styles for other routes
4. Test that both old routes and new homepage render correctly

**Key areas to check:**
- Tailwind @layer directives
- Custom CSS variables (colors, spacing)
- Animation keyframes
- Font-face declarations

---

### Phase 7: Dependencies & Configuration

#### 7.1 Compare package.json
```bash
git diff main:package.json feat__proj-reposition-website:package.json
```

**Check for new dependencies:**
- `@react-spring/web` (used by platform section)
- Any other new packages

**If new dependencies exist:**
```bash
# Add missing dependencies
npm install @react-spring/web
```

#### 7.2 Verify Tailwind Configuration
```bash
# Check tailwind config differences
git diff main:tailwind.config.ts feat__proj-reposition-website:tailwind.config.ts
```

**Ensure custom breakpoints are present:**
- `md: 800px`
- `lg: 1000px`
- `xl: 1200px`

#### 7.3 Verify Next.js Configuration
```bash
git diff main:next.config.js feat__proj-reposition-website:next.config.mjs
```

**Ensure image domains allow:**
- Strapi CMS images
- Any external image sources

---

### Phase 8: Data & Content

#### 8.1 Copy Content Data
```bash
# Copy content.json if it has new homepage data
git checkout feat__proj-reposition-website -- lib/content.json
```

**Important:** This file may contain data for both old and new homepages. Review carefully:
- Keep data for other routes (blog, testimonials, etc.)
- Add new homepage data
- Remove old homepage data (if not needed)

#### 8.2 Update lib/data.ts
```bash
# Check if data.ts has new methods
git diff main:lib/data.ts feat__proj-reposition-website:lib/data.ts
```

Add any new data accessor methods needed by new homepage.

---

### Phase 9: Layout Integration

#### 9.1 Review Layout Requirements

**Main branch layout includes:**
- `<Navbar />` - Global navigation
- `<Footer />` or `<FooterV2 />` - Global footer
- Analytics scripts
- Metadata and SEO

**New homepage expects:**
- `<NavigationBar />` from `components/home/footer`
- `<FooterCtaSection />` and `<SitemapSection />` from `components/home/footer`

#### 9.2 Integration Strategy

**Option A: Use main branch's global Navbar/Footer (recommended)**
- Keep main's `app/layout.tsx` as-is
- Remove `<NavigationBar />`, `<FooterCtaSection />`, `<SitemapSection />` from `app/page.tsx`
- New homepage renders within global layout

**Option B: Make new footer components home-specific**
- Keep main's global Navbar
- Allow new homepage to render its own footer sections
- Other routes use main's global footer

**Recommended: Option A** - Maintain consistent navigation/footer across site

#### 9.3 Update app/page.tsx
```tsx
// Remove navigation/footer - handled by layout
export default function Home() {
  return (
    <main>
      {/* <NavigationBar /> - Removed, in layout */}
      <HeroText />
      <HeroLogos />
      <HeroVideo />
      <PlatformFeatures />
      <PeopleRoot />
      <ProcessRoot />
      <ComparisonRoot />
      <FitRoot />
      <PricingRoot />
      <CtaSection />
      {/* <FooterCtaSection /> - Removed, in layout */}
      {/* <SitemapSection /> - Removed, in layout */}
    </main>
  );
}
```

---

### Phase 10: Testing Checklist

#### 10.1 Build & Type Check
```bash
# Clean build
rm -rf .next
npm run build

# Type check
npx tsc --noEmit

# Lint
npm run lint
```

#### 10.2 Visual Testing

**New Homepage:**
- [ ] Hero section renders correctly
- [ ] Platform section with video playback works
- [ ] People section with avatars and logo pills displays
- [ ] Process section renders
- [ ] Comparison table works on desktop/mobile
- [ ] Fit section auto-cycles on desktop
- [ ] Pricing table displays correctly
- [ ] CTA sections render
- [ ] Footer with newsletter signup works

**Responsive Testing:**
- [ ] Mobile (320px, 375px, 414px)
- [ ] Tablet (768px, 834px)
- [ ] Desktop (1024px, 1280px, 1440px)
- [ ] Logo pills wrap on mobile (36px, 12px text)
- [ ] No horizontal scrolling

**Other Routes (Regression Testing):**
- [ ] `/blog` - Blog listing works
- [ ] `/blog/[slug]` - Individual blog posts render
- [ ] `/guides` - Guides listing works
- [ ] `/about` - About page renders
- [ ] `/pricing` - Pricing page works
- [ ] `/legal/privacy-policy` - Legal pages render
- [ ] Navigation and footer consistent across routes

#### 10.3 Asset Loading
- [ ] All images load without 404s
- [ ] Videos load and play correctly
- [ ] Fonts render properly
- [ ] No console errors

#### 10.4 Performance
- [ ] Run Lighthouse audit on new homepage
- [ ] Check bundle size hasn't increased significantly
- [ ] Verify videos are optimized and don't block render
- [ ] Check for unused dependencies

---

### Phase 11: Cleanup Old Homepage Components

#### 11.1 Identify Shared Components

**⚠️ IMPORTANT:** Some `components/home-sections/` components are shared with other routes!

**Used by other pages:**
- `home-sections/v2/TestimonialsSection.tsx` → Used by `/about` page
- `home-sections/ReviewsSection.tsx` → Used by `/testimonials` page

**Only used by old homepage (safe to delete):**
```
components/home-sections/CustomPlans.tsx
components/home-sections/EarthSection.tsx
components/home-sections/FaqSection.tsx
components/home-sections/HelpedGrowSection.tsx
components/home-sections/HeroSection/
components/home-sections/HeroVideoSection/
components/home-sections/HowItWorksSection.tsx
components/home-sections/ParallaxSection.tsx
components/home-sections/PricingSection.tsx
components/home-sections/ResultsSection.tsx
components/home-sections/ServiceAsSoftware.tsx
components/home-sections/WhoWeAreForSection.tsx
components/home-sections/v2/BannerSection.tsx
components/home-sections/v2/CaseStudySection.tsx
components/home-sections/v2/FaqContentLayoutSection.tsx
components/home-sections/v2/HelpedGrowSection.tsx
components/home-sections/v2/HeroSection.tsx
components/home-sections/v2/HowItWorksSection.tsx
components/home-sections/v2/PricingSection.tsx
components/home-sections/v2/ResultsSection.tsx
components/home-sections/v2/ServiceAsSoftware.tsx
```

#### 11.2 Cleanup Strategy

**Option A: Move Shared Components (Recommended)**

1. Move shared components to new location:
```bash
# Create shared sections directory
mkdir -p components/sections

# Move shared components
git mv components/home-sections/ReviewsSection.tsx components/sections/
git mv components/home-sections/v2/TestimonialsSection.tsx components/sections/

# Update imports in about page
# Change: from "@/components/home-sections/v2/TestimonialsSection"
# To:     from "@/components/sections/TestimonialsSection"

# Update imports in testimonials page
# Change: from "@/components/home-sections/ReviewsSection"
# To:     from "@/components/sections/ReviewsSection"
```

2. Delete old homepage-only components:
```bash
# Remove old homepage components
rm -rf components/home-sections/
```

**Option B: Keep Shared Components in Place (Simpler)**

1. Delete only homepage-specific files:
```bash
# Remove individual files
rm components/home-sections/CustomPlans.tsx
rm components/home-sections/EarthSection.tsx
rm components/home-sections/FaqSection.tsx
rm components/home-sections/HelpedGrowSection.tsx
rm components/home-sections/HowItWorksSection.tsx
rm components/home-sections/ParallaxSection.tsx
rm components/home-sections/PricingSection.tsx
rm components/home-sections/ResultsSection.tsx
rm components/home-sections/ServiceAsSoftware.tsx
rm components/home-sections/WhoWeAreForSection.tsx
rm -rf components/home-sections/HeroSection/
rm -rf components/home-sections/HeroVideoSection/

# Remove v2 homepage-specific files
rm components/home-sections/v2/BannerSection.tsx
rm components/home-sections/v2/CaseStudySection.tsx
rm components/home-sections/v2/FaqContentLayoutSection.tsx
rm components/home-sections/v2/HelpedGrowSection.tsx
rm components/home-sections/v2/HeroSection.tsx
rm components/home-sections/v2/HowItWorksSection.tsx
rm components/home-sections/v2/PricingSection.tsx
rm components/home-sections/v2/ResultsSection.tsx
rm components/home-sections/v2/ServiceAsSoftware.tsx

# Keep these shared files:
# - components/home-sections/ReviewsSection.tsx (for /testimonials)
# - components/home-sections/v2/TestimonialsSection.tsx (for /about)
```

2. Update directory structure comment:
```tsx
// components/home-sections/ now contains only shared sections used by multiple pages
// New homepage uses components/home/
```

**Option C: Incremental Migration (Safest)**

1. First, deploy new homepage without deleting old components
2. Monitor for any unexpected issues
3. After 1-2 weeks, remove old components in separate PR

**Recommended: Option B** - Simpler, less refactoring needed

#### 11.3 Verify No Broken Imports

```bash
# Search for any remaining references to deleted components
grep -r "home-sections" app/ --include="*.tsx" --include="*.ts"

# Should only show:
# - app/about/page.tsx (TestimonialsSection)
# - app/testimonials/page.tsx (ReviewsSection)
```

#### 11.4 Clean Up Unused Dependencies

After removing old components, check for unused packages:

```bash
# Check for unused dependencies
npx depcheck

# Remove any packages only used by old homepage
npm uninstall <unused-package>
```

#### 11.5 Update Documentation
- [ ] Update README with new component structure
- [ ] Document that `components/home/` is for new homepage
- [ ] Document that `components/home-sections/` contains shared sections
- [ ] Update CLAUDE.md if needed
- [ ] Add comment in code explaining the dual structure (temporary)

---

### Phase 12: Commit & Deploy

#### 12.1 Commit Changes
```bash
# Stage all changes
git add .

# Commit with descriptive message
git commit -m "feat: migrate new homepage to production

- Move components/home/ from feat__proj-reposition-website
- Update app/page.tsx with new homepage composition
- Add video assets (context, strategy, execution, optimization)
- Add responsive logo pills with mobile wrapping
- Integrate with main branch layout (navbar/footer)
- Remove old components/home-sections/
- Maintain compatibility with all other routes

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

#### 12.2 Push & Create PR
```bash
# Push branch
git push -u origin feat/new-homepage-migration

# Create PR (if using gh cli)
gh pr create --title "Migrate New Homepage to Production" --body "$(cat <<'EOF'
## Summary
Migrates the new homepage from `feat__proj-reposition-website` branch to replace the current production homepage.

## Changes
- ✅ New homepage components in `components/home/` (42 files)
- ✅ Updated `app/page.tsx` with new composition
- ✅ Video assets added (`public/videos/*.mov`)
- ✅ Responsive logo pills with mobile wrapping (36px/12px)
- ✅ Integrated with existing layout (navbar/footer)
- ✅ Removed old `components/home-sections/`

## Testing
- [x] New homepage renders correctly on all breakpoints
- [x] All videos play properly
- [x] Responsive logo pills wrap on mobile
- [x] Other routes (blog, guides, etc.) still work
- [x] No console errors or broken assets
- [x] Build passes
- [x] Type check passes

## Preview
[Add screenshots or Vercel preview link]

## Checklist
- [x] Build passes locally
- [x] All routes tested
- [x] Responsive design verified
- [ ] Stakeholder review
- [ ] QA approval

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

---

## Risk Assessment

### Low Risk
- ✅ New homepage components are isolated in `components/home/`
- ✅ No name conflicts with main branch components
- ✅ Assets are additive (videos, images)
- ✅ Can test thoroughly before merging

### Medium Risk
- ⚠️ Font loading - ensure both font systems work
- ⚠️ Global CSS merge - may need careful review
- ⚠️ Layout integration - navigation/footer coordination

### High Risk
- ❌ None identified - changes are isolated

---

## Rollback Plan

If issues arise after merge:

```bash
# 1. Revert the merge commit
git revert <merge-commit-hash>

# 2. Or reset to previous state
git reset --hard <commit-before-merge>

# 3. Restore old homepage
git checkout <old-main-commit> -- app/page.tsx components/home-sections/

# 4. Force push (only if not yet deployed to production)
git push --force origin main
```

---

## Post-Migration

### 1. Monitor
- [ ] Watch for error reports in PostHog/Sentry
- [ ] Check analytics for unusual bounce rates
- [ ] Monitor page load times
- [ ] Verify no 404s for assets

### 2. Optimize
- [ ] Compress videos if needed (consider .mp4 or WebM)
- [ ] Optimize images (WebP format)
- [ ] Add lazy loading for below-fold content
- [ ] Consider CDN for video delivery

### 3. Documentation
- [ ] Update component documentation
- [ ] Document new homepage architecture
- [ ] Create style guide for new components

---

## Timeline Estimate

- **Phase 1-2** (Prep & Branch): 30 minutes
- **Phase 3-4** (Copy Components & Assets): 1 hour
- **Phase 5-7** (Fonts, Styles, Config): 1-2 hours
- **Phase 8-9** (Data & Layout): 1 hour
- **Phase 10** (Testing): 2-3 hours
- **Phase 11-12** (Cleanup & Deploy): 1 hour

**Total: 6-8 hours** for careful migration with thorough testing

---

## Key Files Summary

### To Copy from `feat__proj-reposition-website`:
```
components/home/                    (entire directory)
app/page.tsx                        (update with new homepage)
public/videos/*.mov                 (4 video files)
public/images/*                     (new logo/image files)
lib/content.json                    (merge new homepage data)
lib/fonts.ts                        (if different from main)
```

### To Preserve from `main`:
```
app/layout.tsx                      (keep global layout)
components/layout/Navbar            (keep navigation)
components/layout/Footer            (keep footer)
components/home-sections/           (delete after migration)
All other route components          (preserve unchanged)
```

### To Merge/Update:
```
package.json                        (add @react-spring/web if needed)
tailwind.config.ts                  (ensure custom breakpoints)
app/globals.css                     (merge any new styles)
lib/data.ts                         (add new homepage methods)
```

---

## Success Criteria

✅ New homepage displays correctly on all devices
✅ All videos and images load properly
✅ Responsive logo pills work as designed
✅ Other routes (blog, guides, etc.) remain functional
✅ No console errors or warnings
✅ Build and type check pass
✅ Performance metrics maintained or improved
✅ Analytics and tracking scripts still work

---

## Contact & Support

**Questions or Issues:**
- Check CLAUDE.md for project guidance
- Review component documentation in components/home/
- Refer back to feat__proj-reposition-website branch for reference implementation

---

*Last Updated: 2025-12-08*
