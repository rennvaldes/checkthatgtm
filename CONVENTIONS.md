# Code Conventions

## File Naming

### Components
- **Format**: `camelCase.tsx`
- **Examples**:
  - ✅ `navigationBar.tsx`
  - ✅ `blogCard.tsx`
  - ❌ `NavigationBar.tsx`

### Component Sub-files
- **Format**: Same as parent, with brevity and clarity
- **Pattern over verbosity**: logo is a logo, list is a list, button is a button
- **Examples**:
  - ✅ `navigationLogo.tsx` (not `navigationBarAnimatedLogo.tsx`)
  - ✅ `navigationMenu.tsx` (not `navigationBarMobileMenu.tsx`)
  - ✅ `blogCard.tsx` (not `blogArticleCard.tsx`)
  - Pattern recognition: if it's in `/navigation/`, it's navigation-related

### Utilities/Helpers
- **Format**: `camelCase.ts`
- **Examples**: `classnames.ts`, `utils.ts`, `helpers.ts`

### Types
- **Location**: Co-located in domain/feature folder
- **Exception**: Move to `/common/` or `/types/` only if shared across features
- **Examples**:
  - ✅ `components/blog/types.ts` (blog-specific types)
  - ✅ `lib/types/common.ts` (shared across app)

### Hooks
- **Format**: `useHookName.ts`
- **Examples**: `useHasMountedWhen.ts`, `useScroll.ts`

## Principles

1. **Brevity**: Remove redundant prefixes when context is clear
2. **Clarity**: Name should immediately convey purpose
3. **Simplicity**: Avoid over-specification
4. **Pattern**: Let folder structure provide context, not filename

## Examples in Practice

```
components/
  navigation/
    navigationBar.tsx      # Main navigation component
    navigationMenu.tsx     # Mobile menu (not navigationBarMobileMenu.tsx)
    navigationLogo.tsx     # Animated logo (not navigationBarAnimatedLogo.tsx)
    types.ts              # Navigation-specific types

  blog/
    blogRoot.tsx          # Main blog page
    blogCard.tsx          # Article card
    blogFilters.tsx       # Filter controls
    blogAnimations.tsx    # Animation utilities
    types.ts              # Blog-specific types
```
