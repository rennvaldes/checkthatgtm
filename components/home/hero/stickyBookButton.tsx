"use client";

import { useRef, useState } from "react";
import { useScroll } from "@react-spring/web";

export function StickyBookButton() {
  const placeholderRef = useRef<HTMLDivElement>(null);
  const [buttonPosition, setButtonPosition] = useState({ right: 0 });
  const [shouldStick, setShouldStick] = useState(false);

  // Desktop: 14px from top
  // Mobile: 22px from top (centers with hamburger button at 40px: hamburger at top-2 (8px) + half of size-16 (32px) - half of h-9 (18px))
  const STICKY_TOP_MOBILE = 22;
  const STICKY_TOP_DESKTOP = 14;

  useScroll({
    onChange: () => {
      if (!placeholderRef.current) return;

      const rect = placeholderRef.current.getBoundingClientRect();
      const isMobile = window.innerWidth < 768;
      const threshold = isMobile ? STICKY_TOP_MOBILE : STICKY_TOP_DESKTOP;

      // Update button position when not sticky
      if (rect.top > threshold) {
        setButtonPosition({
          right: window.innerWidth - rect.right,
        });
      }

      setShouldStick(rect.top <= threshold);
    },
  });

  return (
    <>
      {/* Placeholder that stays in document flow */}
      <div ref={placeholderRef} className="w-fit relative z-[60]">
        {!shouldStick && (
          <a
            href="https://growthx.ai/book-demo"
            className="inline-flex h-9 items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground transition-opacity hover:opacity-80 whitespace-nowrap"
          >
            Book a demo
            <span aria-hidden="true">→</span>
          </a>
        )}
      </div>

      {/* Fixed button that appears when scrolling */}
      {shouldStick && (
        <div
          className="fixed top-[22px] md:top-[14px] z-[60]"
          style={{ right: `${buttonPosition.right}px` }}
        >
          <a
            href="https://growthx.ai/book-demo"
            className="inline-flex h-9 items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground transition-opacity hover:opacity-80 whitespace-nowrap"
          >
            Book a demo
            <span aria-hidden="true">→</span>
          </a>
        </div>
      )}
    </>
  );
}
