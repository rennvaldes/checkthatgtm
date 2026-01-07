"use client";

import {
  forwardRef,
  useState,
  useLayoutEffect,
  useRef,
  CSSProperties,
} from "react";
import {
  buildDefaultSrc,
  buildSrcSet,
  buildPlaceholderUrl,
  buildSizes,
  type ResponsiveSizes,
} from "@/lib/cloudflare/image";

// Loading states (matching SJA's implementation)
enum LoadingState {
  Initial = "INITIAL",
  Loading = "LOADING",
  Cached = "CACHED",
  Loaded = "LOADED",
}

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
  placeholder?: boolean;
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

// Loading indicator SVG (matching SJA's animated dots)
const LOADING_INDICATOR = `url("data:image/svg+xml;charset=UTF-8,%3csvg width='48' height='48' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' focusable='false'%3e%3cstyle type='text/css'%3e %40keyframes fadeExpand %7b 0%25 %7b opacity: 1; transform: scale(0.8);%7d 50%25, 100%25 %7b opacity: 0; transform: scale(0.65);%7d %7d %23c1, %23c2, %23c3 %7b animation: fadeExpand 600ms infinite 600ms alternate both; opacity: 0.5; transform-origin: 50%25 50%25;%7d %23c1 %7b animation-delay: 0ms;%7d %23c2 %7b animation-delay: 150ms;%7d %23c3 %7b animation-delay: 300ms;%7d %3c/style%3e%3ccircle id='c1' cx='6' cy='12' r='2' fill='%23000' /%3e%3ccircle id='c2' opacity='0.5' cx='12' cy='12' r='2' fill='%23000' /%3e%3ccircle id='c3' opacity='0.3' cx='18' cy='12' r='2' fill='%23000' /%3e%3c/svg%3e")`;

// Background color for loading state
const LOADING_BG_COLOR = "#f5f5f5";

/**
 * Get loading styles - only applied during Loading state with placeholder enabled
 */
function getLoadingStyle(
  state: LoadingState,
  placeholderUrl: string | undefined
): CSSProperties | undefined {
  if (!placeholderUrl || state !== LoadingState.Loading) {
    return undefined;
  }

  return {
    background: `center no-repeat ${LOADING_INDICATOR}, center / contain no-repeat url(${placeholderUrl}), ${LOADING_BG_COLOR}`,
  };
}

/**
 * CloudflareImage - CDN-optimized image component
 * Uses Cloudflare Image Resizing for responsive images
 *
 * Supports two modes:
 * - Sized: explicit width/height (like native img)
 * - Fill: fills parent container (like Next.js Image fill)
 */
export const CloudflareImage = forwardRef<
  HTMLImageElement,
  CloudflareImageProps
>((props, ref) => {
  const {
    src,
    alt,
    sizes,
    quality,
    format = "auto",
    className,
    priority = false,
    draggable,
    placeholder = true,
  } = props;

  const fill = "fill" in props && props.fill;
  const width = "width" in props ? props.width : undefined;
  const height = "height" in props ? props.height : undefined;

  // Loading state management (matching SJA)
  const imgRef = useRef<HTMLImageElement>(null);
  const [loadingState, setLoadingState] = useState<LoadingState>(
    LoadingState.Initial
  );

  // Transition to Loading state after 200ms delay (matching SJA)
  useLayoutEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (loadingState === LoadingState.Initial) {
      timeout = setTimeout(() => {
        setLoadingState(LoadingState.Loading);
      }, 200);
    }

    return () => clearTimeout(timeout);
  }, [loadingState]);

  // Check if image is already cached on mount
  useLayoutEffect(() => {
    if (imgRef.current?.complete) {
      setLoadingState(LoadingState.Cached);
    }
  }, []);

  // Handle image load
  const handleLoad = () => {
    setLoadingState(LoadingState.Loaded);
  };

  // These functions handle production vs dev/preview internally
  const defaultSrc = buildDefaultSrc(src, quality, format);
  const srcSet = buildSrcSet(src, quality, format);
  const computedSizes = buildSizes(sizes);
  const placeholderUrl = placeholder ? buildPlaceholderUrl(src) : undefined;

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

  // Loading styles (only during Loading state with placeholder enabled)
  const loadingStyle = getLoadingStyle(loadingState, placeholderUrl);

  // Merge refs
  const setRefs = (node: HTMLImageElement | null) => {
    (imgRef as React.MutableRefObject<HTMLImageElement | null>).current = node;
    if (typeof ref === "function") {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  };

  return (
    <img
      ref={setRefs}
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
      onLoad={handleLoad}
      style={{
        ...fillStyle,
        ...loadingStyle,
      }}
    />
  );
});

CloudflareImage.displayName = "CloudflareImage";
