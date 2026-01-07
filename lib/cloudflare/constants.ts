// Responsive image breakpoints
export const IMAGE_BREAKPOINTS = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

// Viewport breakpoints (matching Tailwind config)
export const VIEWPORT_BREAKPOINTS = {
  cinema: 1920,
  desktop: 1180,
  tablet: 768,
  mobile: 0,
} as const;

// Cloudflare CDN base path
export const CLOUDFLARE_CDN_PATH = "/cdn-cgi/image";

// Production domain
export const PRODUCTION_DOMAIN = "https://growthx.ai";

// Default image quality
export const DEFAULT_QUALITY = 85;

// Placeholder settings (blur-up effect)
export const PLACEHOLDER_CONFIG = {
  width: 32,
  quality: 10,
  blur: 50,
} as const;
