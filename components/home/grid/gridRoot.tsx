import { cx } from "@/lib/classnames";
import { PropsWithChildren } from "react";

/**
 * Editorial Grid System
 * Grid: 18 → 22 → 30 columns (mobile → tablet → desktop)
 */

// Size - controls content width
type Size = "normal" | "medium" | "inset";

// Grid columns: 18 → 22 → 30
const GRID = "grid grid-cols-[repeat(18,1fr)] tablet:grid-cols-[repeat(22,1fr)] desktop:grid-cols-[repeat(30,1fr)] gap-0";

// Breakout wrapper - escapes parent container to full viewport width
const BREAKOUT = "w-screen ml-[calc(-50vw+50%)]";

// Size → grid-column classes
const SIZE_STYLES: Record<Size, string> = {
  inset: "col-[2/span_16] tablet:col-[3/span_18] desktop:col-[8/span_16]",
  medium: "col-[2/span_16] tablet:col-[3/span_18] desktop:col-[6/span_20]",
  normal: "col-[2/span_16] tablet:col-[3/span_18] desktop:col-[3/span_26]",
};

// Margins for media elements
const MEDIA_MARGINS = "my-[4.375rem] desktop:my-24 cinema:my-32";

/**
 * GridRoot - base grid wrapper for content
 * Used as the outer container for body text
 */
interface GridRootProps {
  size?: Size;
  className?: string;
  innerClassName?: string;
}

export function GridRoot({
  children,
  size = "inset",
  className,
  innerClassName,
}: PropsWithChildren<GridRootProps>) {
  return (
    <div className={cx(GRID, "w-full max-w-[1920px] mx-auto", className)}>
      <div className={cx(SIZE_STYLES[size], "self-center", innerClassName)}>
        {children}
      </div>
    </div>
  );
}

/**
 * GridMedia - for images/videos/blockquotes
 * Breaks out of parent container and centers with max-width
 */
interface GridMediaProps {
  isInset?: boolean;
  size?: Size;
  className?: string;
  innerClassName?: string;
}

export function GridMedia({
  children,
  isInset,
  size,
  className,
  innerClassName,
}: PropsWithChildren<GridMediaProps>) {
  // Determine size from prop or isInset boolean
  const resolvedSize = size || (isInset ? "inset" : "normal");

  return (
    <div className={cx(BREAKOUT, MEDIA_MARGINS, className)}>
      <div className={cx(GRID, "max-w-[1920px] mx-auto")}>
        <div className={cx(SIZE_STYLES[resolvedSize], innerClassName)}>
          {children}
        </div>
      </div>
    </div>
  );
}

// Export types and constants for external use
export type { Size };
export { GRID, BREAKOUT, SIZE_STYLES, MEDIA_MARGINS };
