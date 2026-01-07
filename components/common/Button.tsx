"use client";

import React from "react";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline-solid";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  ariaLabel?: string;
  fillFrom?: string;
  fillTo?: string;
  borderFrom?: string;
  borderTo?: string;
  textColorClass?: string;
  innerClassName?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-7 py-4 text-lg",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full font-medium tracking-tight transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "",
  secondary: "",
  "outline-solid": "border border-[#303030] bg-transparent text-[#303030] border-[1.5px]",
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
  fillFrom,
  fillTo,
  borderFrom,
  borderTo,
  textColorClass,
  innerClassName,
  disabled,
  type = "button",
}: ButtonProps) {
  const isPrimary = variant === "primary";
  const isSecondary = variant === "secondary";
  const isOutline = variant === "outline-solid";

  const outerCls = [
    baseClasses,
    variants[variant],
    fullWidth ? "w-full" : "",
    isPrimary
      ? (borderFrom && borderTo
          ? "p-[1.5px] bg-[linear-gradient(to_bottom,var(--btn-border-from),var(--btn-border-to))] shadow-[0_0_0.5px_1px_rgba(0,0,0,0.10),0_2px_2px_2px_rgba(0,0,0,0.05),0_1px_5px_0_rgba(0,0,0,0.10),0_2px_4px_0_rgba(0,0,0,0.20)]"
          : "p-[1.5px] bg-[linear-gradient(to_bottom,#EDBE00,#4F3F00)] shadow-[0_0_0.5px_1px_rgba(0,0,0,0.10),0_2px_2px_2px_rgba(0,0,0,0.05),0_1px_5px_0_rgba(0,0,0,0.10),0_2px_4px_0_rgba(0,0,0,0.20)]")
      : isSecondary
      ? (borderFrom && borderTo
          ? "p-[1.5px] bg-[linear-gradient(to_bottom,var(--btn-border-from),var(--btn-border-to))] shadow-[0_0_0.5px_1px_rgba(0,0,0,0.10),0_2px_2px_2px_rgba(0,0,0,0.05),0_1px_5px_0_rgba(0,0,0,0.10),0_2px_4px_0_rgba(0,0,0,0.20)]"
          : "p-[1.5px] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.6),#000000)] shadow-[0_0_0.5px_1px_rgba(0,0,0,0.10),0_2px_2px_2px_rgba(0,0,0,0.05),0_1px_5px_0_rgba(0,0,0,0.10),0_2px_4px_0_rgba(0,0,0,0.20)]")
      : isOutline
      ? "hover:bg-ui-black/5 active:bg-ui-black/10"
      : sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const innerSpan = (
    <span
      className={[
        "inline-flex items-center justify-center rounded-full",
        sizeClasses[size],
        fullWidth ? "w-full" : "",
        fillFrom && fillTo
          ? [
              "bg-[linear-gradient(to_bottom,var(--btn-from),var(--btn-to))]",
              textColorClass ?? "text-white",
              "shadow-[inset_0_3px_1px_0_rgba(255,255,255,0.30),inset_0_-8px_4px_0_rgba(255,255,255,0.07),inset_0_11px_7.7px_4px_rgba(255,255,255,0.35)]",
            ].join(" ")
          : isPrimary
          ? "bg-[linear-gradient(to_bottom,#FFCC00,#E7B900)] text-black shadow-[inset_0_3px_1px_0_rgba(255,255,255,0.30),inset_0_-8px_4px_0_rgba(255,255,255,0.07),inset_0_11px_7.7px_4px_rgba(255,255,255,0.35)]"
          : isSecondary
          ? "bg-[linear-gradient(to_bottom,#242424,#252525)] text-white shadow-[inset_0_3px_1px_0_rgba(255,255,255,0.30),inset_0_4px_4.7px_4px_rgba(255,255,255,0.35)]"
          : isOutline
          ? "bg-transparent text-ui-black"
          : "",
        innerClassName ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={
        fillFrom && fillTo
          ? ({
              ["--btn-from" as any]: fillFrom,
              ["--btn-to" as any]: fillTo,
            } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        aria-label={ariaLabel}
        className={outerCls}
        style={borderFrom && borderTo ? ({ ["--btn-border-from" as any]: borderFrom, ["--btn-border-to" as any]: borderTo } as React.CSSProperties) : undefined}
      >
        {isPrimary || isSecondary || isOutline ? innerSpan : children}
      </Link>
    );
  }

  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className={outerCls}
      disabled={disabled}
      type={type}
      style={borderFrom && borderTo ? ({ ["--btn-border-from" as any]: borderFrom, ["--btn-border-to" as any]: borderTo } as React.CSSProperties) : undefined}
    >
      {isPrimary || isSecondary || isOutline ? innerSpan : children}
    </button>
  );
}
