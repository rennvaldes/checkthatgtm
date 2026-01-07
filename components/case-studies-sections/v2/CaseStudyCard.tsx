"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

type CaseStudyMeta = {
  visits?: string;
  pages?: string;
  duration?: string;
};

export type CaseStudyCardProps = {
  href: string;
  title: string;
  image?: string;
  imageAlt?: string;
  logo?: { src: string; alt: string };
  meta?: CaseStudyMeta;
  className?: string;
};

export default function CaseStudyCard({ href, title, image, imageAlt = "", logo, meta, className }: CaseStudyCardProps) {
  return (
    <Link
      href={href}
      className={[
        "group block rounded-none border border-[#151515]/10 bg-[#0E0E0E] text-white",
        "transition-transform duration-200 hover:-translate-y-1",
        className ?? ""
      ].join(" ")}
    >
      <div className="p-4 lg:p-6 flex flex-col justify-between h-full">
        <div className="relative mb-6 aspect-video w-full bg-[#EAE8E4] flex items-center justify-center">
          {logo?.src ? (
            <Image src={logo.src} alt={logo.alt} fill sizes="(min-width: 1024px) 480px, 100vw" className="object-contain p-6" />
          ) : image ? (
            // fallback to image
            <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 480px, 100vw" className="object-cover" />
          ) : null}
        </div>

        <div className="mt-auto">
          <h3 className="text-white text-xl md:text-2xl lg:text-[28px] font-semibold leading-[1.1] tracking-tight">
            {title}
          </h3>
          {meta ? (
            <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-white/80">
              {meta.visits ? <span>+{meta.visits} Visits</span> : null}
              {meta.pages ? <span>| {meta.pages} Pages</span> : null}
              {meta.duration ? <span>| {meta.duration}</span> : null}
            </div>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
