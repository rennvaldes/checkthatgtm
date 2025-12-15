"use client";

import { ReactNode } from "react";
import { useSpring, animated } from "@react-spring/web";
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
