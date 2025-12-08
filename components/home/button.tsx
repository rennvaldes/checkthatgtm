"use client";

import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { cx } from "@/lib/classnames";
import { IconArrowRight } from "@/components/home/assets/assetsIcons";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  fullWidth?: boolean;
  className?: string;
}

export function Button({
  href,
  onClick,
  children,
  variant = "primary",
  fullWidth = false,
  className
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const springProps = useSpring({
    opacity: isHovered ? 0.8 : 1,
    config: { tension: 300, friction: 35 },
  });

  const baseClasses = cx(
    "px-[21px] py-[11px] h-11 rounded-full text-base lg:text-lg lg:leading-[1.5] lg:tracking-[-0.04em] font-normal flex items-center gap-2 w-fit",
    variant === "primary"
      ? "bg-foreground text-background"
      : variant === "secondary"
      ? "bg-secondary text-foreground"
      : "bg-background text-foreground",
    fullWidth && "w-full justify-center max-w-[300px]",
    className
  );

  const content = (
    <>
      {children}
      <IconArrowRight />
    </>
  );

  const commonProps = {
    className: baseClasses,
    style: springProps,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };

  if (href) {
    return (
      <animated.a href={href} {...commonProps}>
        {content}
      </animated.a>
    );
  }

  return (
    <animated.button onClick={onClick} {...commonProps}>
      {content}
    </animated.button>
  );
}
