"use client";

import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import Link from "next/link";
import { cx } from "@/lib/classnames";
import { IconArrowRight } from "@/components/home/assets/assetsIcons";

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  fullWidth?: boolean;
  className?: string;
}

export function LinkButton({
  href,
  children,
  variant = "primary",
  fullWidth = false,
  className
}: LinkButtonProps) {
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

  // Check if the link is external
  const isExternal = href.startsWith("http") || href.startsWith("https");

  if (isExternal) {
    return (
      <animated.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...commonProps}
      >
        {content}
      </animated.a>
    );
  }

  // For internal links, use Next.js Link
  return (
    <Link href={href} passHref legacyBehavior>
      <animated.a {...commonProps}>
        {content}
      </animated.a>
    </Link>
  );
}
