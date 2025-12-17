import { cx } from "@/lib/classnames";
import { PropsWithChildren } from "react";

interface GridProps {
  className?: string;
  noGap?: boolean;
}

export function Grid({
  children,
  className,
  noGap = false,
}: PropsWithChildren<GridProps>) {
  return (
    <div
      className={cx(
        "mx-auto w-[calc(100%-48px)] max-w-[1280px]",
        "grid grid-cols-12",
        !noGap && "gap-x-3 md:gap-x-4 lg:gap-x-5",
        className
      )}
    >
      {children}
    </div>
  );
}
