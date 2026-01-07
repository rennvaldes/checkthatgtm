"use client";

import { forwardRef, CSSProperties } from "react";
import {
  buildDefaultSrc,
  buildSrcSet,
  buildPlaceholderUrl,
  buildSizes,
  type ResponsiveSizes,
} from "@/lib/cloudflare/image";

// Base props shared by all variants
interface BaseProps {
  src: string;
  alt: string;
  sizes?: string | ResponsiveSizes;
  quality?: number | "auto";
  format?: "auto" | "webp" | "avif" | "jpeg";
  className?: string;
  priority?: boolean;
  draggable?: boolean;
}

// Props when fill is true (width/height optional)
interface FillProps extends BaseProps {
  fill: true;
  width?: number;
  height?: number;
}

// Props when fill is false/undefined (width/height required)
interface SizedProps extends BaseProps {
  fill?: false;
  width: number;
  height: number;
}

export type CloudflareImageProps = FillProps | SizedProps;

/**
 * CloudflareImage - CDN-optimized image component
 * Uses Cloudflare Image Resizing for responsive images
 *
 * Supports two modes:
 * - Sized: explicit width/height (like native img)
 * - Fill: fills parent container (like Next.js Image fill)
 */
export const CloudflareImage = forwardRef<HTMLImageElement, CloudflareImageProps>(
  (props, ref) => {
    const {
      src,
      alt,
      sizes,
      quality,
      format = "auto",
      className,
      priority = false,
      draggable,
    } = props;

    const fill = "fill" in props && props.fill;
    const width = "width" in props ? props.width : undefined;
    const height = "height" in props ? props.height : undefined;

    // These functions handle production vs dev/preview internally
    const defaultSrc = buildDefaultSrc(src, quality, format);
    const srcSet = buildSrcSet(src, quality, format);
    const computedSizes = buildSizes(sizes);
    const placeholder = buildPlaceholderUrl(src);

    // Fill mode styles (matches Next.js Image fill behavior)
    const fillStyle: CSSProperties = fill
      ? {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }
      : {};

    return (
      <img
        ref={ref}
        src={defaultSrc}
        srcSet={srcSet || undefined}
        sizes={computedSizes}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        alt={alt}
        className={className}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        draggable={draggable}
        style={{
          ...fillStyle,
          ...(placeholder !== src && {
            backgroundImage: `url(${placeholder})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }),
        }}
      />
    );
  }
);

CloudflareImage.displayName = "CloudflareImage";
