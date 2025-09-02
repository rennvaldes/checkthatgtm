"use client";

import React from "react";
import Image, { type ImageProps } from "next/image";

export type FullWidthBannerProps = {
  backgroundImageSrc?: ImageProps["src"]; // string | StaticImport
  backgroundColor?: string; // tailwind color or hex
  overlayClassName?: string; // e.g., "bg-black/40"
  className?: string;
  contentClassName?: string; // applied to inner container
  children: React.ReactNode;
  priorityImage?: boolean;
};

/**
 * Full width banner with optional background image/color.
 * - Background spans full width of viewport.
 * - Content is constrained to the site container.
 */
export default function FullWidthBanner({
  backgroundImageSrc,
  backgroundColor = "#000000",
  overlayClassName = "bg-black/30",
  className = "",
  contentClassName = "",
  children,
  priorityImage = false,
}: FullWidthBannerProps) {
  return (
    <section className={["relative w-full", className].filter(Boolean).join(" ")}> 
      {/* Background layer */}
      <div className="absolute inset-0 -z-10">
        {backgroundImageSrc ? (
          <Image
            src={backgroundImageSrc}
            alt=""
            fill
            priority={priorityImage}
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full" style={{ backgroundColor }} />
        )}
        {/* Overlay for readability */}
        {overlayClassName && (
          <div className={["absolute inset-0", overlayClassName].join(" ")} />
        )}
      </div>

      {/* Content container */}
      <div className={["container mx-auto px-4", contentClassName].filter(Boolean).join(" ")}> 
        {children}
      </div>
    </section>
  );
}
