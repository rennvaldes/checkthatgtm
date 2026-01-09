"use client";

import { a, useSpring } from "@react-spring/web";
import { useRef, useEffect } from "react";
import { useIsMobile, usePrefersReducedMotion } from "@/lib/hooks";

interface VisualProps {
  visual: {
    type: string;
    video?: string;
    poster?: string;
    items: any;
  };
  inView: boolean;
}

export function PlatformVisual({ visual, inView }: VisualProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useIsMobile();
  const prefersReducedMotion = usePrefersReducedMotion();
  const shouldAnimate = inView && !isMobile && !prefersReducedMotion;

  // Animate background gradient
  const spring = useSpring({
    progress: shouldAnimate ? 1 : 0,
    config: { tension: 300, friction: 35 },
    immediate: !shouldAnimate,
  });

  // Auto-play/pause video based on in-view state
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Mobile / reduced motion: avoid autoplaying inline videos.
    if (isMobile || prefersReducedMotion) {
      video.pause();
      video.currentTime = 0;
      return;
    }

    if (inView) {
      // Reset to beginning and play when in view
      video.currentTime = 0;
      video.play().catch((error) => {
        // AbortError is expected when video is paused before play completes
        if (error.name === 'AbortError') return;

        // Retry for non-abort errors
        setTimeout(() => {
          video.currentTime = 0;
          video.play().catch(() => {});
        }, 100);
      });
    } else {
      // Pause and reset when out of view
      video.pause();
      video.currentTime = 0;
    }
  }, [inView, visual.video, isMobile, prefersReducedMotion]);

  return (
    <div className="w-full max-w-[492px] lg:max-w-none flex-1 p-0 lg:p-5 lg:shadow-[inset_0_0_0_0.25px_hsl(var(--border))] flex items-center justify-center">
      <a.div
        style={{
          background:
            isMobile || prefersReducedMotion
              ? "linear-gradient(180deg, #303030 0%, #303030 100%)"
              : spring.progress.to(
                  [0, 1],
                  [
                    "linear-gradient(180deg, #818EFF 0%, #4856C6 100%)",
                    "linear-gradient(180deg, #303030 0%, #303030 100%)",
                  ]
                ),
        }}
        className="aspect-square lg:aspect-auto w-full lg:w-auto lg:h-full max-w-[492px] lg:max-w-none overflow-hidden relative"
      >
        <video
          ref={videoRef}
          src={visual.video}
          poster={visual.poster}
          className="w-full h-full object-cover relative z-10"
          playsInline
          muted
          loop
          preload={isMobile || prefersReducedMotion ? "none" : "metadata"}
        />
      </a.div>
    </div>
  );
}
