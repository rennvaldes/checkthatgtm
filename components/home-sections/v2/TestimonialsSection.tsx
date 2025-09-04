"use client";

import React from "react";
import { livretText } from "@/assets/fonts";
import ContentLayout from "@/components/layout/ContentLayout";
import Spacer from "@/components/common/Spacer";
import Image from "next/image";
import TestimonialsCarousel from "@/components/common/TestimonialsCarousel";
import { useAlignedContentLeft } from "@/hooks/useAlignedContentLeft";

type Testimonial = {
  logo: { src: string; alt: string };
  quote: string;
  authorName: string;
  authorTitle: string;
};

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      logo: {
        src: "https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_strapi_1339eb5432.svg",
        alt: "Strapi",
      },
      quote:
        "GrowthX elevated our content engine with a repeatable system that actually moved pipeline. The quality bar went up while cadence increased.",
      authorName: "Marcel Santilli",
      authorTitle: "CEO, GrowthX",
    },
    {
      logo: {
        src: "https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/teleport_2a6d7a59e9.svg",
        alt: "Teleport",
      },
      quote:
        "We scaled production without sacrificing editorial depth. Their workflow blended our experts with AI in a way that just worked.",
      authorName: "Jane Doe",
      authorTitle: "VP Marketing, Teleport",
    },
    {
      logo: {
        src: "https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/Ramp_idx_W_Yq9_Eu_0_1e7f07ca5f.svg",
        alt: "Ramp",
      },
      quote:
        "Distribution and CRO finally clicked. Our content started showing up where it mattered and converted far better than before.",
      authorName: "John Smith",
      authorTitle: "Head of Growth, Ramp",
    },
    {
      logo: {
        src: "https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_webflow_b7ad975616.svg",
        alt: "Webflow",
      },
      quote:
        "They brought a real system—planning, production, and measurement—so our team could focus on messaging and results.",
      authorName: "Alex Lee",
      authorTitle: "Director of Content, Webflow",
    },
    {
      logo: {
        src: "https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_strapi_1339eb5432.svg",
        alt: "Strapi",
      },
      quote:
        "GrowthX elevated our content engine with a repeatable system that actually moved pipeline. The quality bar went up while cadence increased.",
      authorName: "Marcel Santilli",
      authorTitle: "CEO, GrowthX",
    },
    {
      logo: {
        src: "https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/teleport_2a6d7a59e9.svg",
        alt: "Teleport",
      },
      quote:
        "We scaled production without sacrificing editorial depth. Their workflow blended our experts with AI in a way that just worked.",
      authorName: "Jane Doe",
      authorTitle: "VP Marketing, Teleport",
    },
    {
      logo: {
        src: "https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/Ramp_idx_W_Yq9_Eu_0_1e7f07ca5f.svg",
        alt: "Ramp",
      },
      quote:
        "Distribution and CRO finally clicked. Our content started showing up where it mattered and converted far better than before.",
      authorName: "John Smith",
      authorTitle: "Head of Growth, Ramp",
    },
    {
      logo: {
        src: "https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_webflow_b7ad975616.svg",
        alt: "Webflow",
      },
      quote:
        "They brought a real system—planning, production, and measurement—so our team could focus on messaging and results.",
      authorName: "Alex Lee",
      authorTitle: "Director of Content, Webflow",
    },
  ];

  // Reusable alignment calculation
  const { padLeft } = useAlignedContentLeft({
    containerMax: 1440,
    gutter: 16,
    cols: 12,
    leftCols: 2,
    offset: -290, // match your current visual tweak
    minApplyWidth: 768,
    initialPad: 0,
  });

  return (
    <section className="overflow-hidden">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={
            <div className="text-lg font-medium mb-4 md:mb-0">Testimonials</div>
          }
          rightContent={
            <div className="flex flex-col gap-8">
              <h2 className="text-3xl lg:text-5xl tracking-tighter">
                Praise <br />
                <span className="text-primary-gray">
                  Why our customers love us
                </span>
              </h2>
            </div>
          }
        />
      </div>
      <Spacer size="medium" />
      <div className="px-4 md:px-0" style={{ paddingLeft: padLeft }}>
        <TestimonialsCarousel
          disableInnerPadding
          items={testimonials}
          renderSlide={(t) => (
            <div className="p-6 md:p-8 border border-[#DCD9D5] h-[320px] md:h-[540px] flex flex-col justify-between lg:min-w-[520px] lg:max-w-[521px]">
              <div className="mb-6">
                <div className="relative h-[24px] md:h-[28px] w-full max-w-[160px]">
                  <Image
                    src={t.logo.src}
                    alt={t.logo.alt}
                    fill
                    sizes="160px"
                    className="object-contain"
                  />
                </div>
              </div>

              <p className={`${livretText.className} text-[24px] font-light leading-[1.1] lg:leading-[1.3] tracking-tight text-[#151515]`}>
                “{t.quote}”
              </p>

              <div className="flex items-center gap-3">
                <div className="tracking-tight text-base leading-[1.2]">
                  <div className="font-semibold text-[#151515]">{t.authorName}</div>
                  <div className="text-primary-gray">{t.authorTitle}</div>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </section>
  );
}
