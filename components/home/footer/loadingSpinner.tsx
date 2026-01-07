"use client";

import { useTransition, a } from "@react-spring/web";

interface LoadingSpinnerProps {
  show: boolean;
  className?: string;
}

export function LoadingSpinner({ show, className }: LoadingSpinnerProps) {
  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return transitions(
    (style, item) =>
      item && (
        <a.div
          className={`flex items-center justify-center pointer-events-none ${className || ""}`}
          style={style}
        >
          <div
            className="opacity-70 w-10 h-10 md:w-[30px] md:h-[30px] border-[3px] md:border-[2.5px] border-current border-t-transparent rounded-full inline-block box-border animate-spin"
          />
        </a.div>
      )
  );
}
