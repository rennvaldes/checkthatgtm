"use client";

import { useEffect, useRef, useState } from "react";

export function StickyBookButton() {
  const placeholderRef = useRef<HTMLDivElement>(null);
  const [buttonPosition, setButtonPosition] = useState({ right: 0 });
  const [shouldStick, setShouldStick] = useState(false);

  // Keep the CTA aligned with its original position until it sticks.
  useEffect(() => {
    let rafId = 0;

    const update = () => {
      if (!placeholderRef.current) return;

      const rect = placeholderRef.current.getBoundingClientRect();

      // Update button position when not sticky
      if (rect.top > 14) {
        setButtonPosition({
          right: window.innerWidth - rect.right,
        });
      }

      setShouldStick(rect.top <= 14);
    };

    const scheduleUpdate = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        update();
      });
    };

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    scheduleUpdate();

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Placeholder that stays in document flow */}
      <div ref={placeholderRef} className="w-fit relative z-60">
        {!shouldStick && (
          <a
            href="https://checkthat.ai"
            className="inline-flex h-9 items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-80 whitespace-nowrap"
          >
            Get started
            <span aria-hidden="true" className="font-bold">→</span>
          </a>
        )}
      </div>

      {/* Fixed button that appears when scrolling */}
      {shouldStick && (
        <div
          className="fixed top-[14px] z-60"
          style={{ right: `${buttonPosition.right}px` }}
        >
          <a
            href="https://checkthat.ai"
            className="inline-flex h-9 items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-80 whitespace-nowrap"
          >
            Get started
            <span aria-hidden="true" className="font-bold">→</span>
          </a>
        </div>
      )}
    </>
  );
}
