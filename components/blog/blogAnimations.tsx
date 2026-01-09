"use client";

import { ReactNode } from "react";
import { useSpring, a } from "@react-spring/web";
import { useHasMountedWhen } from "@/hooks/useHasMountedWhen";
import { useIntersection } from "@/hooks/useIntersection";
import { useIsMobile, useMedia, usePrefersReducedMotion } from "@/lib/hooks";

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
export function BlogPageWrapper({
  children,
  delay = 250,
  className,
}: BlogPageWrapperProps) {
  const hasMountedAfterDelay = useHasMountedWhen(delay);
  const isMobile = useIsMobile();
  const prefersReducedMotion = usePrefersReducedMotion();
  const shouldSkipAnimation = isMobile || prefersReducedMotion;

  const fadeInSpring = useSpring({
    opacity: shouldSkipAnimation ? 1 : hasMountedAfterDelay ? 1 : 0,
    config: { tension: 280, friction: 60 },
    immediate: shouldSkipAnimation,
  });

  return (
    <a.div style={fadeInSpring} className={className}>
      {children}
    </a.div>
  );
}

type BreakpointConfig = {
  scaleValue: number;
  translateYValue: number;
  rootMargin: string;
};

const ANIMATION_CONFIG = {
  mobile: { scaleValue: 0.9, translateYValue: 20, rootMargin: "-70px" },
  tablet: { scaleValue: 0.9, translateYValue: 20, rootMargin: "-70px" },
  desktop: { scaleValue: 0.95, translateYValue: 90, rootMargin: "-200px" },
  cinema: { scaleValue: 0.95, translateYValue: 90, rootMargin: "-200px" },
} as const;

// ~750ms easeInOut
const SPRING_CONFIG = {
  tension: 170,
  friction: 26,
};

type ScrollAnimationWrapperProps = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
};

/**
 * Scroll-triggered animation wrapper for media content.
 * Scales and translates content when it enters the viewport.
 * Respects prefers-reduced-motion.
 */
export function ScrollAnimationWrapper({
  children,
  className,
  disabled = false,
}: ScrollAnimationWrapperProps) {
  const config = useMedia<BreakpointConfig>(
    ["(min-width: 1920px)", "(min-width: 1180px)", "(min-width: 768px)"],
    [ANIMATION_CONFIG.cinema, ANIMATION_CONFIG.desktop, ANIMATION_CONFIG.tablet],
    ANIMATION_CONFIG.mobile
  );

  const [setRef, isIntersecting] = useIntersection({
    rootMargin: config.rootMargin,
    disabled,
  });

  const isMobile = useIsMobile();
  const prefersReducedMotion = usePrefersReducedMotion();

  const shouldSkipAnimation = disabled || prefersReducedMotion || isMobile;

  const initialTransform = `translateY(${config.translateYValue}px) scale(${config.scaleValue})`;
  const finalTransform = "translateY(0px) scale(1)";

  const springs = useSpring({
    transform: isIntersecting ? finalTransform : initialTransform,
    config: SPRING_CONFIG,
    immediate: shouldSkipAnimation || !isIntersecting,
    reset: false,
  });

  if (shouldSkipAnimation) {
    return <div className={className}>{children}</div>;
  }

  return (
    <a.div ref={setRef} style={springs} className={className}>
      {children}
    </a.div>
  );
}
