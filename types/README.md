# `/types` - TypeScript Type Definitions

This directory contains TypeScript type declarations and interfaces that extend the global scope or define types for modules without built-in type definitions.

## Files

### `global.d.ts`
Global TypeScript declarations that are available throughout the entire application without explicit imports.

**Contents**:

#### 1. Global Module Declarations
Declares types for importing various file formats:
- **Image formats**: `.webp`, `.png`, `.jpg`, `.jpeg`, `.svg`
- **Data formats**: `.json`

```typescript
declare module '*.png' {
  const content: string;
  export default content;
}
```

This allows you to import images and other assets in TypeScript files:
```typescript
import HeroImage from '@/assets/img/hero.png';
import data from './config.json';
```

#### 2. JSX Extensions
Allows any custom HTML element name in JSX:
```typescript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
```

This is useful for:
- Custom web components
- Third-party elements
- Experimental HTML features

#### 3. Window Interface Extensions
Extends the global `Window` interface with third-party scripts:

```typescript
declare global {
  interface Window {
    twq: any; // Twitter conversion tracking
  }
}
```

Allows safe access to global scripts:
```typescript
if (typeof window !== 'undefined' && window.twq) {
  window.twq('track', 'PageView');
}
```

## Purpose

The `/types` directory serves several critical purposes:

1. **Module Augmentation**: Adds type information for modules that don't have types
2. **Global Declarations**: Makes types available without imports
3. **Third-Party Integration**: Provides types for external scripts and services
4. **Asset Imports**: Enables TypeScript support for non-JS file imports

## When to Use This Directory

Add declarations to `/types/global.d.ts` when you need to:

1. **Import Non-JS Assets**:
   - Adding support for new file types (`.ico`, `.woff`, etc.)
   - Custom module types

2. **Extend Global Objects**:
   - Adding types for analytics scripts (Google Analytics, PostHog, etc.)
   - Browser API extensions
   - Third-party library globals

3. **JSX Customization**:
   - Custom HTML elements
   - Web components
   - Framework-specific elements

## Best Practices

1. **Minimal Global Scope**:
   - Only add truly global types here
   - Prefer local type definitions in `/static/types.ts` when possible
   - Keep this file focused and clean

2. **Documentation**:
   - Add comments explaining why each declaration exists
   - Document which third-party services use these types
   - Include links to relevant documentation

3. **Type Safety**:
   - Avoid using `any` when possible
   - Provide specific types for window extensions
   - Use proper TypeScript declaration syntax

4. **Organization**:
   - Group related declarations together
   - Use comments to separate sections
   - Keep the file organized and maintainable

## Related Files

- `/static/types.ts`: Application-specific types
- `/tsconfig.json`: TypeScript configuration
- Component-specific type files (e.g., `Button.types.ts`)

## Example Usage

### Importing Assets
```typescript
// Image imports work automatically
import Logo from '@/assets/img/logo.svg';
import HeroImage from '@/assets/img/hero.png';

// Use in components
<Image src={Logo} alt="Logo" />
```

### Using Third-Party Scripts
```typescript
// Twitter conversion tracking
useEffect(() => {
  if (typeof window !== 'undefined' && window.twq) {
    window.twq('track', 'Purchase', {
      value: 100.00,
      currency: 'USD'
    });
  }
}, []);
```

### Custom Elements
```typescript
// Can use custom elements without TypeScript errors
<custom-web-component attribute="value">
  Content
</custom-web-component>
```
