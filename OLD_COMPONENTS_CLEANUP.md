# Old Homepage Components Cleanup Strategy

## Overview
When migrating the new homepage, we need to handle the old `components/home-sections/` carefully because **some components are shared with other routes**.

---

## Component Inventory

### ✅ Safe to Delete (Homepage-Only Components)

These 21 components are **only** used by the old homepage:

```
components/home-sections/
├── CustomPlans.tsx                      ❌ DELETE
├── EarthSection.tsx                     ❌ DELETE
├── FaqSection.tsx                       ❌ DELETE
├── HelpedGrowSection.tsx                ❌ DELETE
├── HeroSection/                         ❌ DELETE (entire directory)
│   ├── DecorationsAndContainer.tsx
│   ├── IncreasePercentageCard.tsx
│   ├── StatsCard.tsx
│   ├── TitleAndButtons.tsx
│   └── index.tsx
├── HeroVideoSection/                    ❌ DELETE (entire directory)
│   ├── index.tsx
│   └── utils.tsx
├── HowItWorksSection.tsx                ❌ DELETE
├── ParallaxSection.tsx                  ❌ DELETE
├── PricingSection.tsx                   ❌ DELETE
├── ResultsSection.tsx                   ❌ DELETE
├── ServiceAsSoftware.tsx                ❌ DELETE
├── WhoWeAreForSection.tsx               ❌ DELETE
└── v2/
    ├── BannerSection.tsx                ❌ DELETE
    ├── CaseStudySection.tsx             ❌ DELETE
    ├── FaqContentLayoutSection.tsx      ❌ DELETE
    ├── HelpedGrowSection.tsx            ❌ DELETE
    ├── HeroSection.tsx                  ❌ DELETE
    ├── HowItWorksSection.tsx            ❌ DELETE
    ├── PricingSection.tsx               ❌ DELETE
    ├── ResultsSection.tsx               ❌ DELETE
    └── ServiceAsSoftware.tsx            ❌ DELETE
```

### ⚠️ Keep (Shared with Other Routes)

These 2 components are used by **other pages** and must be preserved:

```
components/home-sections/
├── ReviewsSection.tsx                   ✅ KEEP - Used by /testimonials
└── v2/
    └── TestimonialsSection.tsx          ✅ KEEP - Used by /about
```

---

## Cleanup Options

### Option A: Move Shared Components (Clean Architecture) ⭐ Recommended

**Benefits:**
- ✅ Clean separation: `home-sections/` can be completely deleted
- ✅ Better naming: `components/sections/` is more accurate
- ✅ Future-proof: Clear where shared sections live

**Steps:**

1. Create new directory:
```bash
mkdir -p components/sections
```

2. Move shared components:
```bash
git mv components/home-sections/ReviewsSection.tsx components/sections/
git mv components/home-sections/v2/TestimonialsSection.tsx components/sections/
```

3. Update imports in `/app/about/page.tsx`:
```tsx
// Before:
import TestimonialsSection from "@/components/home-sections/v2/TestimonialsSection";

// After:
import TestimonialsSection from "@/components/sections/TestimonialsSection";
```

4. Update imports in `/app/testimonials/page.tsx`:
```tsx
// Before:
import ReviewsSection from "@/components/home-sections/ReviewsSection";

// After:
import ReviewsSection from "@/components/sections/ReviewsSection";
```

5. Delete entire old directory:
```bash
rm -rf components/home-sections/
```

6. Verify no broken imports:
```bash
npm run build
```

---

### Option B: Keep Shared Components in Place (Minimal Changes)

**Benefits:**
- ✅ No import updates needed
- ✅ Faster migration
- ✅ Less risk of breaking other pages

**Drawbacks:**
- ⚠️ Confusing naming: `home-sections/` no longer contains home sections
- ⚠️ Mixed directory: New homepage uses `home/`, old sections in `home-sections/`

**Steps:**

1. Delete homepage-only files individually:
```bash
# Root level deletions
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

# Directory deletions
rm -rf components/home-sections/HeroSection/
rm -rf components/home-sections/HeroVideoSection/

# v2 deletions
rm components/home-sections/v2/BannerSection.tsx
rm components/home-sections/v2/CaseStudySection.tsx
rm components/home-sections/v2/FaqContentLayoutSection.tsx
rm components/home-sections/v2/HelpedGrowSection.tsx
rm components/home-sections/v2/HeroSection.tsx
rm components/home-sections/v2/HowItWorksSection.tsx
rm components/home-sections/v2/PricingSection.tsx
rm components/home-sections/v2/ResultsSection.tsx
rm components/home-sections/v2/ServiceAsSoftware.tsx
```

2. Add documentation comment:
```tsx
/**
 * components/home-sections/
 *
 * LEGACY: This directory contains shared section components used by multiple pages.
 * - ReviewsSection.tsx → Used by /testimonials
 * - v2/TestimonialsSection.tsx → Used by /about
 *
 * New homepage components live in components/home/
 */
```

3. Verify structure:
```bash
ls components/home-sections/
# Should show:
# ReviewsSection.tsx
# v2/

ls components/home-sections/v2/
# Should show:
# TestimonialsSection.tsx
```

---

### Option C: Incremental Migration (Safest) 🛡️

**Benefits:**
- ✅ Zero risk: Deploy new homepage first, cleanup later
- ✅ Time to monitor: Catch any issues before cleanup
- ✅ Easy rollback: Old components still available if needed

**Drawbacks:**
- ⏰ Takes longer: Two separate PRs
- 💾 More storage: Temporary duplication

**Steps:**

**PR #1: Deploy New Homepage**
1. Add `components/home/` with new homepage
2. Update `app/page.tsx` to use new components
3. Deploy and monitor for 1-2 weeks
4. **Do not** delete any old components yet

**PR #2: Cleanup (after monitoring period)**
1. Follow Option A or B above
2. Deploy cleanup changes

---

## Recommended Approach

### For Production Migration: **Option A** (Move Shared Components)

**Why:**
- Clean architecture
- Future maintainability
- Only 2 import updates needed

**Migration checklist:**
- [ ] Create `components/sections/` directory
- [ ] Move `ReviewsSection.tsx` to new location
- [ ] Move `TestimonialsSection.tsx` to new location
- [ ] Update import in `app/about/page.tsx`
- [ ] Update import in `app/testimonials/page.tsx`
- [ ] Delete entire `components/home-sections/` directory
- [ ] Run `npm run build` to verify
- [ ] Test `/about` page renders correctly
- [ ] Test `/testimonials` page renders correctly
- [ ] Commit with clear message explaining cleanup

---

## Verification Commands

### Before Cleanup
```bash
# Count total files
find components/home-sections -type f | wc -l
# Expected: 28 files

# Show directory structure
tree components/home-sections -L 2
```

### After Cleanup (Option A)
```bash
# Verify old directory is gone
ls components/home-sections 2>/dev/null && echo "ERROR: Directory still exists" || echo "✓ Cleaned up"

# Verify new directory exists
ls components/sections/
# Expected: ReviewsSection.tsx TestimonialsSection.tsx

# Verify no broken imports
grep -r "home-sections" app/ --include="*.tsx"
# Expected: No results
```

### After Cleanup (Option B)
```bash
# Count remaining files
find components/home-sections -type f | wc -l
# Expected: 2 files

# List remaining files
find components/home-sections -type f
# Expected:
# components/home-sections/ReviewsSection.tsx
# components/home-sections/v2/TestimonialsSection.tsx
```

---

## Impact Analysis

### Pages Affected by Cleanup

| Page | Old Component Used | Action Required |
|------|-------------------|-----------------|
| `/` (homepage) | All home-sections components | ✅ Replaced with new `components/home/` |
| `/about` | `TestimonialsSection` | ⚠️ Update import (Option A) or no change (Option B) |
| `/testimonials` | `ReviewsSection` | ⚠️ Update import (Option A) or no change (Option B) |
| All other pages | None | ✅ No impact |

### Files Changed

**Option A:**
- Delete: 26 files from `components/home-sections/`
- Move: 2 files to `components/sections/`
- Update: 2 import statements

**Option B:**
- Delete: 26 files from `components/home-sections/`
- Keep: 2 files in place
- Update: 0 import statements

---

## Rollback Strategy

If issues arise after cleanup:

### Option A Rollback
```bash
# Restore old home-sections directory
git checkout HEAD~1 -- components/home-sections/

# Revert import changes
git checkout HEAD~1 -- app/about/page.tsx app/testimonials/page.tsx

# Remove sections directory
rm -rf components/sections/
```

### Option B Rollback
```bash
# Restore deleted files
git checkout HEAD~1 -- components/home-sections/
```

---

## Success Criteria

✅ New homepage uses `components/home/` exclusively
✅ No broken imports anywhere in the app
✅ `/about` page renders correctly
✅ `/testimonials` page renders correctly
✅ Build passes without errors
✅ No unused code warnings for old components
✅ Directory structure is clean and well-documented

---

## Timeline

- **Option A**: 30-60 minutes (includes testing)
- **Option B**: 15-30 minutes
- **Option C**: Split across 2 PRs (1-2 weeks between)

---

## Questions?

Refer to `MIGRATION_PLAN.md` for full context of the homepage migration.

---

*Last Updated: 2025-12-08*
