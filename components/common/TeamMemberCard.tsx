"use client";

import React from "react";
import Image from "next/image";

export type TeamMemberCardProps = {
  name: string;
  title: string;
  image?: string;
  subtitle?: string;
  href?: string;
  badge?: string;
  grayscale?: boolean;
  className?: string;
  wrapperClassName?: string;
  imageAspectClass?: string;
  imageSizes?: string;
  nameClassName?: string;
  titleClassName?: string;
  rightSlot?: React.ReactNode;
};

export default function TeamMemberCard({
  name,
  title,
  image,
  subtitle,
  href,
  badge,
  grayscale = true,
  className = "",
  wrapperClassName = "w-[300px] lg:w-[360px]",
  imageAspectClass = "aspect-[3/3]",
  imageSizes = "(max-width: 1024px) 33vw, 360px",
  nameClassName = "text-[26px] font-semibold text-[#141414] tracking-tight",
  titleClassName = "text-lg text-[#303030] mt-2.5 tracking-tight leading-[1.25] max-w-[220px]",
  rightSlot,
}: TeamMemberCardProps) {
  const Wrapper: any = href ? "a" : "div";
  return (
    <Wrapper
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${wrapperClassName} bg-[#E6E3DE] border border-primary-gray ${className}`}
    >
      <div className="p-2 md:p-4">
        <div className={`${imageAspectClass} relative overflow-hidden mb-4`}>
          {image ? (
            <Image
              src={image}
              alt={name}
              fill
              sizes={imageSizes}
              className={`object-cover ${grayscale ? "grayscale" : ""}`}
            />
          ) : (
            <div className="w-full h-full bg-[#DCD9D5]" />
          )}
        </div>

        <div className="flex items-start justify-between gap-4">
          <div>
            <div className={nameClassName}>{name}</div>
            <div className={titleClassName}>{title}</div>
            {subtitle ? (
              <div className="text-sm text-[#6B6B6B] mt-1 tracking-tight">{subtitle}</div>
            ) : null}
          </div>
          {rightSlot ? (
            <div className="shrink-0 flex flex-col items-center gap-2">{rightSlot}</div>
          ) : badge ? (
            <div className="shrink-0 text-xs px-2 py-1 rounded border border-primary-gray text-[#303030] bg-white">
              {badge}
            </div>
          ) : null}
        </div>
      </div>
    </Wrapper>
  );
}
