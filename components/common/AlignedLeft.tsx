"use client";

import React from "react";
import { useAlignedContentLeft, type AlignedOptions } from "@/hooks/useAlignedContentLeft";

export type AlignedLeftProps = {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  options?: AlignedOptions;
};

/**
 * Wrapper that applies dynamic left padding so its content aligns with the
 * right column of the site grid, without using a container.
 */
export default function AlignedLeft({ className, style, children, options }: AlignedLeftProps) {
  const { padLeft } = useAlignedContentLeft(options);
  return (
    <div className={className} style={{ paddingLeft: padLeft, ...style }}>
      {children}
    </div>
  );
}
