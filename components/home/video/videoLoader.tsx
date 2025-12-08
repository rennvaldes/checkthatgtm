"use client";

import { useState, useRef, useEffect, memo } from "react";
import { useTransition, a } from "@react-spring/web";

import { cx } from "@/lib/classnames";
import { VIDEO } from "./videoConstants";

interface VideoLoaderProps {
  isLoaded: boolean;
  isActive: boolean;
  dark?: boolean;
}

function VideoLoaderComponent({ isLoaded, isActive, dark }: VideoLoaderProps) {
  const [shouldShow, setShouldShow] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isLoaded) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setShouldShow(false);
    } else if (isActive) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(
        () => setShouldShow(true),
        VIDEO.LoaderDelay
      );
    }
  }, [isLoaded, isActive]);

  const transitions = useTransition(shouldShow, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return transitions(
    (style, item) =>
      item && (
        <a.div
          className={cx(
            "absolute inset-0 w-full h-full",
            "flex items-center justify-center",
            "z-[3] pointer-events-none"
          )}
          style={style}
        >
          <div
            className={cx(
              "w-10 h-10 max-sm:w-[30px] max-sm:h-[30px]",
              "border-[3px] max-sm:border-[2.5px] border-solid rounded-full",
              "inline-block box-border",
              "animate-spin opacity-70",
              dark
                ? "border-black border-b-transparent"
                : "border-white border-b-transparent"
            )}
          />
        </a.div>
      )
  );
}

export const VideoLoader = memo(VideoLoaderComponent);
