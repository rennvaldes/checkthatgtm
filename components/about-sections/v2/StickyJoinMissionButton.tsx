"use client";

import { useEffect, useRef, useState } from "react";

export function StickyJoinMissionButton() {
  const [isSticky, setIsSticky] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ left: 0, right: 0 });
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!placeholderRef.current) return;

      const rect = placeholderRef.current.getBoundingClientRect();
      const mobileThreshold = 12;
      const desktopThreshold = 14;
      const threshold = window.innerWidth >= 768 ? desktopThreshold : mobileThreshold;

      // Capture the button's position before it becomes sticky
      if (!isSticky) {
        setButtonPosition({
          left: rect.left,
          right: window.innerWidth - rect.right,
        });
      }

      // When the placeholder would scroll above the threshold, make button sticky
      setIsSticky(rect.top <= threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isSticky]);

  return (
    <>
      {/* Placeholder that stays in document flow */}
      <div ref={placeholderRef} className="w-fit relative z-[60]">
        {!isSticky && (
          <a
            href="/careers"
            className="inline-flex h-9 items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm text-background transition-opacity hover:opacity-80"
          >
            Join our Mission
            <span aria-hidden="true">→</span>
          </a>
        )}
      </div>

      {/* Fixed button that appears when scrolling */}
      {isSticky && (
        <div
          className="fixed top-[12px] md:top-[14px] z-[60]"
          style={{ right: `${buttonPosition.right}px` }}
        >
          <a
            href="/careers"
            className="inline-flex h-9 items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm text-background transition-opacity hover:opacity-80"
          >
            Join our Mission
            <span aria-hidden="true">→</span>
          </a>
        </div>
      )}
    </>
  );
}

