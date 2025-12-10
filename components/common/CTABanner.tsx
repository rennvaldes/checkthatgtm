"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

type CTAButton = {
  label?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
};

type CTABannerProps = {
  logoSrc?: string | StaticImageData;
  logoAlt?: string;
  title?: React.ReactNode;
  description?: string;

  bgClassName?: string;
  containerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  buttonsWrapperClassName?: string;

  primaryButton?: CTAButton;
  secondaryButton?: CTAButton;
};

export default function CTABanner({
  logoSrc,
  logoAlt = "Logo",
  title,
  description,

  bgClassName = "bg-[#C4CBFF]",
  containerClassName = "w-full",
  titleClassName = "text-4xl md:text-[72px] lg:text-[96px] font-semibold tracking-tighter leading-[0.96] text-primary-black text-center",
  descriptionClassName = "text-primary-black/80 text-sm md:text-base lg:text-lg text-center max-w-3xl mx-auto",
  buttonsWrapperClassName = "flex items-center justify-center gap-3 md:gap-4 max-sm:flex-col",

  primaryButton,
  secondaryButton,
}: CTABannerProps) {
  return (
    <section className={`${bgClassName} max-h-[606px] pt-[128.8px] pb-[184px] mx-auto w-[calc(100%-40px)] max-w-[1280px] px-4 md:px-6 lg:px-8`}>
      <div className={`flex flex-col items-center gap-[46px]`}>
        {logoSrc ? (
          <div className="flex justify-center">
            <Image
              src={logoSrc}
              alt={logoAlt}
              className="h-6 w-auto md:h-7 lg:h-8"
            />
          </div>
        ) : null}

        {title ? (
          <h2 className={`${titleClassName} max-w-[800px] mx-auto`}>
            {typeof title === "string" ? <span>{title}</span> : title}
          </h2>
        ) : null}

        {(primaryButton || secondaryButton) && (
          <div className={`${buttonsWrapperClassName}`}>
            {primaryButton?.label ? (
              primaryButton.href ? (
                <a
                  href={primaryButton.href}
                  className={`inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base text-primary-foreground transition-opacity hover:opacity-80 ${primaryButton.className || ""}`}
                >
                  {primaryButton.label}
                  <span aria-hidden="true">→</span>
                </a>
              ) : (
                <button
                  onClick={primaryButton.onClick}
                  className={`inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base text-primary-foreground transition-opacity hover:opacity-80 ${primaryButton.className || ""}`}
                >
                  {primaryButton.label}
                  <span aria-hidden="true">→</span>
                </button>
              )
            ) : null}

            {secondaryButton?.label ? (
              secondaryButton.href ? (
                <a
                  href={secondaryButton.href}
                  className={`inline-flex h-9 items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground transition-opacity hover:opacity-80 ${secondaryButton.className || ""}`}
                >
                  {secondaryButton.label}
                  <span aria-hidden="true">→</span>
                </a>
              ) : (
                <button
                  onClick={secondaryButton.onClick}
                  className={`inline-flex h-9 items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground transition-opacity hover:opacity-80 ${secondaryButton.className || ""}`}
                >
                  {secondaryButton.label}
                  <span aria-hidden="true">→</span>
                </button>
              )
            ) : null}
          </div>
        )}

        {description ? (
          <p className={`${descriptionClassName} max-w-[498px] mx-auto tracking-tight mb-[92px]`}>
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}