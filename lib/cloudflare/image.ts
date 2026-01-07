import {
  IMAGE_BREAKPOINTS,
  VIEWPORT_BREAKPOINTS,
  CLOUDFLARE_CDN_PATH,
  PRODUCTION_DOMAIN,
  DEFAULT_QUALITY,
  PLACEHOLDER_CONFIG,
} from "./constants";

export interface ImageUrlParams {
  src: string;
  width?: number;
  height?: number;
  quality?: number | "auto";
  format?: "auto" | "webp" | "avif" | "jpeg";
  fit?: "scale-down" | "contain" | "cover" | "crop";
  blur?: number;
}

export interface ResponsiveSizes {
  cinema?: string;
  desktop?: string;
  tablet?: string;
  mobile?: string;
}

// Only use Cloudflare CDN on production (growthx.ai)
// Preview deployments and local dev should use original images
const isProduction = process.env.APP_HOST === "growthx.ai";
const shouldUseCDN = isProduction && process.env.NODE_ENV !== "development";

/**
 * Build Cloudflare Image CDN URL
 * Format: https://growthx.ai/cdn-cgi/image/{options}/{source}
 */
export function buildImageUrl({
  src,
  width,
  height,
  quality = DEFAULT_QUALITY,
  format = "auto",
  fit = "scale-down",
  blur,
}: ImageUrlParams): string {
  // Only use CDN on production
  if (!shouldUseCDN) {
    return src;
  }

  const options: string[] = [];

  if (width) options.push(`width=${width}`);
  if (height) options.push(`height=${height}`);
  if (quality) options.push(`quality=${quality}`);
  if (format) options.push(`format=${format}`);
  if (fit) options.push(`fit=${fit}`);
  if (blur) options.push(`blur=${blur}`);

  const optionsString = options.join(",");

  // Handle absolute URLs vs relative paths
  if (src.startsWith("http")) {
    return `${PRODUCTION_DOMAIN}${CLOUDFLARE_CDN_PATH}/${optionsString}/${src}`;
  }

  // Local path (ensure leading slash)
  const path = src.startsWith("/") ? src : `/${src}`;
  return `${PRODUCTION_DOMAIN}${CLOUDFLARE_CDN_PATH}/${optionsString}${path}`;
}

/**
 * Build placeholder URL for blur-up effect
 */
export function buildPlaceholderUrl(src: string): string {
  if (!shouldUseCDN) {
    return src;
  }

  return buildImageUrl({
    src,
    width: PLACEHOLDER_CONFIG.width,
    quality: PLACEHOLDER_CONFIG.quality,
    blur: PLACEHOLDER_CONFIG.blur,
  });
}

/**
 * Generate srcSet for responsive images
 */
export function buildSrcSet(
  src: string,
  quality?: number | "auto",
  format?: "auto" | "webp" | "avif" | "jpeg"
): string {
  if (!shouldUseCDN) {
    return "";
  }

  return IMAGE_BREAKPOINTS.map(
    (w) => `${buildImageUrl({ src, width: w, quality, format })} ${w}w`
  ).join(", ");
}

/**
 * Build default src (average of breakpoints ~1574px)
 */
export function buildDefaultSrc(
  src: string,
  quality?: number | "auto",
  format?: "auto" | "webp" | "avif" | "jpeg"
): string {
  if (!shouldUseCDN) {
    return src;
  }

  const avgWidth = Math.ceil(
    IMAGE_BREAKPOINTS.reduce((a, b) => a + b) / IMAGE_BREAKPOINTS.length
  );

  return buildImageUrl({ src, width: avgWidth, quality, format });
}

/**
 * Build sizes attribute from string or responsive object
 * Supports cinema/desktop/tablet/mobile breakpoints
 */
export function buildSizes(sizes: string | ResponsiveSizes | undefined): string | undefined {
  if (!sizes) return undefined;
  if (typeof sizes === "string") return sizes;

  const { cinema, desktop, tablet, mobile } = sizes;

  return [
    cinema && `(min-width:${VIEWPORT_BREAKPOINTS.cinema}px) ${cinema}`,
    desktop && `(min-width:${VIEWPORT_BREAKPOINTS.desktop}px) ${desktop}`,
    tablet && `(min-width:${VIEWPORT_BREAKPOINTS.tablet}px) ${tablet}`,
    mobile,
  ]
    .filter(Boolean)
    .join(", ");
}
