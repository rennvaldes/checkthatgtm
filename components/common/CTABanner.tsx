"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Button from "./Button";
import ArrowRight16 from "../icons/ArrowRight16";

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

  bgClassName = "bg-[#FFD83E]",
  containerClassName = "w-full",
  titleClassName = "text-4xl md:text-[72px] lg:text-[96px] font-semibold tracking-tighter leading-[0.96] text-primary-black text-center",
  descriptionClassName = "text-primary-black/80 text-sm md:text-base lg:text-lg text-center max-w-3xl mx-auto",
  buttonsWrapperClassName = "flex items-center justify-center gap-3 md:gap-4 max-sm:flex-col",

  primaryButton,
  secondaryButton,
}: CTABannerProps) {
  return (
    <section className={`${bgClassName} max-h-[606px] py-[46px]`}>
      <div className={`${containerClassName} px-4 md:px-6 lg:px-8 mx-auto max-w-[1200px] flex flex-col items-center gap-[46px]`}>
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
              <Button
                href={primaryButton.href}
                onClick={primaryButton.onClick}
                className={primaryButton.className}
                variant="secondary"
                size="md"
              >
                <span className="inline-flex items-center gap-20">
                  {primaryButton.label}
                  <ArrowRight16 />
                </span>
              </Button>
            ) : null}

            {secondaryButton?.label ? (
              <Button
                href={secondaryButton.href}
                onClick={secondaryButton.onClick}
                className={secondaryButton.className}
                variant="outline"
                size="md"
              >
                {secondaryButton.label}
              </Button>
            ) : null}
          </div>
        )}

        {description ? (
          <p className={`${descriptionClassName} max-w-[498px] mx-auto tracking-tight`}>
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}