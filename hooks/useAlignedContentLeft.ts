import { useEffect, useMemo, useState } from "react";

export type AlignedOptions = {
  containerMax?: number;
  gutter?: number;
  cols?: number;
  leftCols?: number;
  offset?: number;
  minApplyWidth?: number;
  initialPad?: number;
};

export function useAlignedContentLeft(options: AlignedOptions = {}) {
  const {
    containerMax = 1440,
    gutter = 16,
    cols = 12,
    leftCols = 2,
    offset = 0,
    minApplyWidth = 768,
    initialPad = 0,
  } = options;

  const [padLeft, setPadLeft] = useState<number>(initialPad);

  useEffect(() => {
    const handle = () => {
      const vw = window.innerWidth;
      if (vw < minApplyWidth) {
        setPadLeft(0 + offset);
        return;
      }
      const effective = Math.min(vw, containerMax);
      const containerLeft = Math.max((vw - effective) / 2, 0);
      const leftColWidth = (effective * leftCols) / cols;
      const padding = containerLeft + gutter + leftColWidth + offset;
      setPadLeft(Math.max(padding, 0));
    };

    handle();
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, [containerMax, gutter, cols, leftCols, offset, minApplyWidth]);

  return useMemo(() => ({ padLeft }), [padLeft]);
}
