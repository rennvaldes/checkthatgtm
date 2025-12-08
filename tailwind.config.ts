import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './litebox-lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '600px',
      'md': '800px',
      'lg': '1000px',
      'xl': '1200px',
      '2xl': '1400px',
      '3xl': '1800px',
      '4xl': '2200px',
      '5xl': '2600px',
      '6xl': '3000px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // Shadcn semantic colors
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        // Brand colors
        pink: "hsl(var(--pink))",
        yellow: "hsl(var(--yellow))",
        // Legacy colors (keep for backward compatibility)
        'primary-black': '#080A0D',
        'primary-gray': '#959595',
        'ui-black': 'rgb(32, 35, 58)',
        'ui-white': 'rgb(247, 244, 255)',
        'ui-veige': '#DEDEF0',
        'ui-blue': 'rgb(68, 0, 255)',
        'ui-whitest': 'rgb(253, 253, 255)',
        'ui-green': 'rgb(15, 228, 126)',
        'ui-green-light': 'rgb(51, 255, 157)',
        'ui-peach': 'rgb(255, 218, 202)',
        'ui-grey': 'rgb(125, 129, 158)',
      },
      fontFamily: {
        'clash-display': ['var(--font-clash-display)', 'ui-sans-serif', 'system-ui'],
        'kepler-std': ['kepler-std-semicondensed'],
        'messina-sans': ['var(--font-messina-sans)', 'sans-serif'],
        elza: ['elza'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
export default config;
