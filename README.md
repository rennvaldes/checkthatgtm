# GrowthXLabs Frontend App

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Project Structure

### `./lib`

Contains utility/reusable code & all third-party code.

- `./lib/animations`: Custom animation utilities and components for enhancing UI interactions.
- `./lib/api`: API-related functions and services for communicating with backend services (Strapi).
- `./lib/litebox-lib`: Custom components from the Litebox library, providing pre-built UI elements.
- `./lib/shadcn`: Custom components from the Shadcn library, providing pre-built UI elements.
- `./lib/utils`: General utility functions and helper methods used across the application.

### `./assets`

Fonts and images that must be stored in the app and are not provided by a library or fetching link.

### `./static`

Definitions, types, constants, configurations, CSS, etc...

- `./static/constants.ts`: Constants for both env values and other app-wide values.
- `./static/types.ts`: Global types used in multiple and spread files.
- `./static/globals.css`: Global CSS classes and Tailwind config.

General utility functions and helper methods used across the application.

### `./types`

TypeScript type definitions and interfaces used throughout the project, separated in files by purpose.

### `./hooks`

Custom React hooks for reusable stateful logic across components.

### `./components`

Reusable React components.

- `./components/icons`: Custom Icon components built from downloaded `.svg`.
- `./components/layout`: Components that define the overall structure of pages (e.g., headers, footers, sidebars).
- `./components/ui`: Smaller, atomic UI components like buttons, inputs, and cards.

## Components Filing Structure & Naming

Always start components names with a capital letter.

- _Single-file components_ must go inside a `.tsx` of the same name. Example: `Navbar.tsx`.

- _Multiple-file components_ must go inside a folder with the component name.

  - The main component must be named `index.tsx` to shorten the importing route. Example: `/HeroSection/index.tsx`.

  - All other sub-components or utilities must go inside that folder too. Example: `/HeroSection`, which contains a `Video.tsx` component and maybe a `utils.ts` with types or component-specific functions.

.
