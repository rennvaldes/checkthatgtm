"use client";

import { ReactNode, useMemo } from "react";
import { useInView } from "@react-spring/web";
import { useSpring, animated } from "@react-spring/web";

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
}

export function ScrollAnimationWrapper({
  children,
  className,
}: ScrollAnimationWrapperProps) {
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
