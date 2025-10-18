# `/static` - Static Configurations and Globals

This directory contains static configurations, constants, type definitions, and global CSS that are used throughout the application.

## Files

### `constants.ts`
Application-wide constants and environment variables.

**Contents**:
```typescript
// Strapi CMS configuration
export const STRAPI_DEV_TOKEN
export const STRAPI_BASE_URL
export const STRAPI_IS_LOCAL_ENV

// Cache keys
export const HERO_SECTION_DATA_KEY
```

**Usage**:
```typescript
import { STRAPI_BASE_URL } from '@/static/constants';
```

### `types.ts`
Global type definitions used across multiple files and components.

**Key Types**:
- `IconProps`: Standard props for icon components
  - `className?: string`: Tailwind classes for styling
  - `extraProps?: any`: Additional props to pass through

- `CardData`: Data structure for content cards (blog posts, case studies, etc.)
  - Document metadata (id, documentId)
  - Visual content (image, image_alt)
  - Content fields (title, description, category)
  - Publisher information (avatar, name, legend)
  - Optional styling and metrics

**Usage**:
```typescript
import { IconProps, CardData } from '@/static/types';

const MyIcon: React.FC<IconProps> = ({ className }) => {
  // Icon implementation
};

const cards: CardData[] = [...];
```

### `globals.css`
Global CSS styles and Tailwind CSS configuration.

**Contents**:
- Tailwind directives (`@tailwind base`, `@tailwind components`, `@tailwind utilities`)
- Global CSS resets and base styles
- Custom Tailwind classes and utilities
- CSS variables for theming
- Global animations and transitions

**Key Features**:
- Root-level CSS variables
- Global typography styles
- Base component styling
- Utility class definitions
- Custom @layer definitions for Tailwind

## Purpose

The `/static` directory serves as a central location for:

1. **Configuration Management**: Environment-specific settings and API configurations
2. **Type Safety**: Shared TypeScript types that enforce consistency
3. **Global Styling**: CSS that applies across the entire application
4. **Constants**: Single source of truth for unchanging values

## Best Practices

1. **Constants**:
   - Use UPPER_SNAKE_CASE for constant names
   - Group related constants together
   - Document purpose of each constant
   - Use environment variables for sensitive data

2. **Types**:
   - Keep types generic and reusable
   - Export all types from this file
   - Use descriptive type names
   - Document complex type structures

3. **Global CSS**:
   - Minimize global styles
   - Prefer Tailwind utilities over custom CSS
   - Use CSS variables for theming
   - Document any custom utilities

4. **Organization**:
   - Keep files focused and purposeful
   - Don't mix unrelated configurations
   - Update types when data structures change
   - Version control all changes

## Related Files

- `/types/global.d.ts`: TypeScript global declarations
- `/tailwind.config.ts`: Tailwind configuration
- `/app/layout.tsx`: Global layout that imports globals.css
