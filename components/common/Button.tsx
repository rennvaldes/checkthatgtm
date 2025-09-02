"use client";

import React from "react";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  ariaLabel?: string;
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-7 py-4 text-lg",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full font-medium tracking-tight transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-gradient-to-b from-[#FFD54D] to-[#FFC107] text-black shadow-[0_4px_0_#B8860B] hover:brightness-105 active:translate-y-[2px] active:shadow-[0_2px_0_#B8860B] ring-black",
  secondary:
    "bg-black text-white border border-white/20 hover:bg-white hover:text-black ring-white",
};

export default function Button({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
  size = "md",
  fullWidth,
  ariaLabel,
}: ButtonProps) {
  const cls = [
    baseClasses,
    variants[variant],
    sizeClasses[size],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button aria-label={ariaLabel} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
