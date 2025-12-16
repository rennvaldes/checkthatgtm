"use client";

import { ReactNode, useMemo } from "react";
import { useSpring, animated, useInView } from "@react-spring/web";
import { useHasMountedWhen } from "@/hooks/useHasMountedWhen";

type BlogPageWrapperProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

/**
 * Blog page wrapper that adds a smooth fade-in animation after initial layout stabilizes.
 * Prevents jarring layout shifts from async content loading (icons, images, grid calculations).
 *
 * @param delay - Milliseconds to wait before fading in (default: 250ms)
 */
export function BlogPageWrapper({ children, delay = 250, className }: BlogPageWrapperProps) {
  const hasMountedAfterDelay = useHasMountedWhen(delay);

  const fadeInSpring = useSpring({
    opacity: hasMountedAfterDelay ? 1 : 0,
    config: { tension: 280, friction: 60 },
  });

  return (
    <animated.div style={fadeInSpring} className={className}>
      {children}
    </animated.div>
  );
}

type ScrollAnimationWrapperProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Scroll-triggered animation wrapper for blog content (images, videos).
 * Fades in and slides up content when it enters the viewport.
 * Respects prefers-reduced-motion preference.
 */
export function ScrollAnimationWrapper({ children, className }: ScrollAnimationWrapperProps) {
  // Check for reduced motion preference
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // Detect when element enters viewport
  const [ref, inView] = useInView({
    once: true, // Only animate once (hold: true behavior)
  });

  // Spring animation: fade in + slide up
  const springs = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0%)" : "translateY(20%)",
    config: { tension: 280, friction: 60 },
    immediate: prefersReducedMotion, // Skip animation if reduced motion
  });

  return (
    <animated.div ref={ref} style={springs} className={className}>
      {children}
    </animated.div>
  );
}
