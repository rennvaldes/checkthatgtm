# `/lib` - Library and Utilities

This directory contains reusable utility code, third-party integrations, and shared libraries used throughout the application.

## Directory Structure

### `./lib/animations`
Custom animation utilities and components for enhancing UI interactions.

- Provides reusable animation patterns
- Integrates with Framer Motion and other animation libraries
- Used across components for consistent motion design

### `./lib/api`
API-related functions and services for communicating with backend services.

#### `./lib/api/strapi`
Strapi CMS integration layer:
- API client configuration
- Data fetching utilities
- Type-safe API calls to Strapi backend
- Handles blog posts, case studies, and other CMS content

### `./lib/litebox-lib`
Custom components and utilities from the Litebox library.

#### `./lib/litebox-lib/hooks`
Custom React hooks from Litebox:
- Reusable stateful logic
- Common UI interaction patterns

#### `./lib/litebox-lib/ui`
Pre-built UI components from Litebox:
- **Accordion**: Collapsible content sections
- **Video**: Video player components with custom controls
- Additional reusable UI elements

#### `./lib/litebox-lib/utils`
Utility functions from the Litebox library:
- Helper methods
- Common transformations
- Shared logic

### `./lib/shadcn`
Components from the Shadcn UI library.

#### `./lib/shadcn/ui`
Pre-built, accessible UI components:
- Built on Radix UI primitives
- Fully customizable with Tailwind CSS
- Type-safe component library

### `./lib/utils`
General utility functions and helper methods used across the application:
- String formatting utilities
- Date/time helpers
- Data transformation functions
- Common validation logic
- Tailwind CSS utility helpers (cn function)

## Usage

### Importing from lib

```typescript
// API utilities
import { fetchBlogPosts } from '@/lib/api/strapi';

// Animation utilities
import { fadeIn } from '@/lib/animations';

// Shadcn components
import { Button } from '@/lib/shadcn/ui/button';

// General utilities
import { cn } from '@/lib/utils';
```

## Best Practices

1. **Keep it Generic**: Code in `/lib` should be reusable and not tied to specific features
2. **Type Safety**: Always provide TypeScript types for utilities and functions
3. **Documentation**: Document complex utilities with JSDoc comments
4. **Testing**: Utility functions should be unit tested
5. **Dependencies**: Third-party code should be isolated here, not scattered throughout the app
