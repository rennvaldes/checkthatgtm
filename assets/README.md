# `/assets` - Static Assets

This directory contains fonts, images, and other static assets that are bundled with the application and not fetched from external sources or CDNs.

## Directory Structure

### `./assets/fonts`
Custom web fonts used throughout the application.

#### `./assets/fonts/ClashDisplay`
Clash Display font family:
- Modern, bold display typeface
- Used for headings and large text
- Multiple weights and styles

#### `./assets/fonts/MessinaSans`
Messina Sans font family:
- Clean, readable sans-serif font
- Primary font for body text
- Variable font with multiple weights

#### `./assets/fonts/TT_LIVRET_TEXT`
TT Livret Text font family:
- Serif font for editorial content
- Used for special text sections
- Professional, elegant appearance

### `./assets/img`
Image assets organized by section or purpose.

#### `./assets/img/AboutSection`
Images specific to the About page:
- Team photos
- Company culture images
- Office/workspace photos

#### `./assets/img/FaqSection`
Images and illustrations for FAQ sections:
- Visual aids for common questions
- Decorative elements

#### `./assets/img/ResultsSection`
Charts, graphs, and visual representations of results:
- Performance metrics visualizations
- Success story graphics
- Data visualization assets

#### `./assets/img/brands`
Brand logos and partner company images:
- Client logos
- Partner brand assets
- Technology stack logos

#### `./assets/img/expertsSection`
Expert team member photos and related imagery:
- Professional headshots
- Expert contributor photos
- Bio section images

#### `./assets/img/logos`
GrowthX branding and logo variations:
- Main logo files
- Logo variations (light/dark, different sizes)
- Brand mark assets

##### `./assets/img/logos/v2`
Version 2 of logo assets:
- Updated brand identity
- Modern logo variations
- Latest design system logos

#### `./assets/img/v2`
Version 2 design system images:
- Updated visual assets
- Redesigned UI elements
- Modern imagery

##### `./assets/img/v2/icons`
Icon assets for v2 design:
- UI icons
- Feature icons
- Navigation icons

#### `./assets/img/workstreamsSection`
Images for the workstreams/process sections:

##### `./assets/img/workstreamsSection/cardIcons`
Icons used in workstream cards:
- Process step icons
- Feature highlights
- Category indicators

##### `./assets/img/workstreamsSection/icons`
Additional workstream-related icons:
- Workflow illustrations
- Process diagrams

### `./assets/lottie`
Lottie animation files (JSON-based animations):
- Animated illustrations
- Interactive UI animations
- Loading animations
- Micro-interactions

## Usage

### Importing Assets

```typescript
// Importing fonts (usually done in layout.tsx)
import { clashDisplay, messinaSans } from '@/assets/fonts';

// Importing images with Next.js Image
import HeroImage from '@/assets/img/v2/hero-image.png';
import Logo from '@/assets/img/logos/v2/logo.svg';

// Using in components
<Image src={HeroImage} alt="Hero" />

// Importing Lottie animations
import animationData from '@/assets/lottie/loading.json';
import Lottie from 'lottie-react';

<Lottie animationData={animationData} loop={true} />
```

## Best Practices

1. **Optimization**:
   - Compress images before adding them to the project
   - Use appropriate formats (WebP for photos, SVG for icons/logos)
   - Consider lazy loading for below-the-fold images

2. **Organization**:
   - Keep images organized by feature/section
   - Use descriptive file names
   - Version assets in separate folders (v2, v3, etc.) when redesigning

3. **Size Guidelines**:
   - Hero images: Max 1920px width
   - Thumbnails: 400-600px width
   - Icons: SVG preferred, or PNG at 2x resolution

4. **Font Loading**:
   - Fonts are loaded via Next.js font optimization
   - Minimize font file sizes
   - Only include necessary font weights

5. **Lottie Animations**:
   - Keep JSON files optimized
   - Test animation performance
   - Provide fallback for browsers without support
