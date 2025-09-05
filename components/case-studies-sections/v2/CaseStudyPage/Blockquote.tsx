"use client";

import React from "react";
import Image from "next/image";
import QuoteBg from "@/assets/img/v2/quote-bg.png";

export default function CaseStudyBlockquote({
  text,
  cite,
  role,
  authorAvatar,
  variant = "simple",
}: {
  text: string;
  cite?: string;
  role?: string;
  authorAvatar?: string;
  variant?: "simple" | "article";
}) {
  if (variant === "article") {
    return (
      <section className="w-full">
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch bg-[#E6E3DE] p-4 md:p-6 rounded-sm overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none select-none absolute inset-0"
          >
            <Image
              src={QuoteBg}
              alt=""
              fill
              className="object-contain object-right opacity-60"
              sizes="100vw"
            />
          </div>
          <div className="md:col-span-2">
            <blockquote className="text-xl md:text-2xl leading-snug tracking-tight text-primary-black relative">
              “{text}”
            </blockquote>
          </div>
          <div className="flex items-center md:items-start md:justify-end gap-4 relative">
            {authorAvatar ? (
              <div className="relative w-24 h-24 md:w-28 md:h-28 shrink-0 overflow-hidden">
                <Image
                  src={authorAvatar}
                  alt={cite || "Author"}
                  fill
                  className="object-cover"
                  sizes="112px"
                />
              </div>
            ) : null}
            <div className="self-center md:self-start">
              {cite ? (
                <div className="text-primary-black font-semibold text-lg md:text-xl">
                  {cite}
                </div>
              ) : null}
              {role ? (
                <div className="text-primary-gray text-sm md:text-base">
                  {role}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <figure className="my-8 w-full">
      <div className="relative rounded-xl border border-[#151515]/10 bg-white p-6 md:p-8 shadow-[0_6px_24px_rgba(0,0,0,0.06)]">
        <span
          aria-hidden
          className="absolute -top-4 -left-3 text-6xl md:text-7xl text-primary-gray/20 select-none"
        >
          “
        </span>
        <blockquote className="relative text-xl md:text-2xl leading-snug tracking-tight text-primary-black/90">
          {text}
        </blockquote>
      </div>
      {(cite || role) && (
        <figcaption className="mt-3 pl-2 text-sm md:text-base text-primary-gray">
          {cite}
          {role ? (
            <span className="ml-1 text-primary-gray/80">— {role}</span>
          ) : null}
        </figcaption>
      )}
    </figure>
  );
}
