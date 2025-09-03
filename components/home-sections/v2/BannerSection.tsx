"use client";

import React from "react";
import { livretText } from "@/assets/fonts";
import FullWidthBanner from "@/components/common/FullWidthBanner";
import Button from "@/components/common/Button";
import FromTheFounder from "@/assets/img/v2/from-the-founder.png";
import ArrowRight16 from "@/components/icons/ArrowRight16";

export default function BannerSection() {
  return (
    <FullWidthBanner
      backgroundImageSrc={FromTheFounder}
      overlayClassName="bg-black/35"
      className="py-12 md:py-16 lg:py-20"
      contentClassName="min-h-[320px] md:min-h-[380px] lg:min-h-[460px] xl:min-h-[560px] 2xl:min-h-[800px] flex flex-col justify-between"
      priorityImage
    >
      <div className="text-white/80 text-lg tracking-tight mb-4">
        From the Founder
      </div>

      <div className="max-w-2xl">
        <blockquote className={`${livretText.className} text-white tracking-tight text-2xl font-light leading-[1.4]`}>
          “GrowthX exists to help great companies grow by turning content into a
          real, repeatable engine. We’ve helped teams at Superhuman, Webflow,
          Ramp, Deepgram, Reddit, and Abnormal—companies that don’t settle for
          average, and neither do we. We’re an AI-native team of founders,
          editors, and engineers who’ve spent thousands of hours pushing the
          edge of content, marketing, and workflows—and doing the work
          ourselves.”
        </blockquote>

        <div className="mt-12 flex items-center gap-8">
          <div className="text-white/80 tracking-tight text-lg">
            <div className="font-medium">Marcel Santilli</div>
            <div className="text-primary-gray">CEO, GrowthX</div>
          </div>
          <Button
            href="/contact"
            size="md"
            fillFrom="#FF6493"
            fillTo="#D41651"
            borderFrom="#FF6493"
            borderTo="#D41651"
          >
            <span className="inline-flex items-center gap-2">
              <span>View my schedule</span>
              <ArrowRight16 className="w-4 h-4" />
            </span>
          </Button>
        </div>
      </div>
    </FullWidthBanner>
  );
}
