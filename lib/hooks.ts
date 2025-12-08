"use client";

import { useState, useEffect, useRef } from "react";

// Media query hook
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

// Scroll direction hook (for hiding navbar on scroll)
export function useScrollDirection() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY.current;
      const isAtTop = currentScrollY <= 0;

      setIsVisible(isScrollingUp || isAtTop);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isVisible };
}

// Window event listener hook
export function useWindowEvent(
  type: string,
  listener: (e: Event) => void,
  enabled = true
) {
  useEffect(() => {
    if (enabled) {
      window.addEventListener(type, listener, { passive: false });
    }
    return () => window.removeEventListener(type, listener);
  }, [type, listener, enabled]);
}

// Touch device detection hook
export function useIsTouchDevice(): boolean {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  return isTouchDevice;
}

