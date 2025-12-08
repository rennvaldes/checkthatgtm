"use client";

import React from "react";
import { livretText } from "@/assets/fonts";
import ContentLayout from "@/components/layout/ContentLayout";
import Spacer from "@/components/common/Spacer";
import Image, { StaticImageData } from "next/image";
import TestimonialsCarousel from "@/components/common/TestimonialsCarousel";
import { useAlignedContentLeft } from "@/hooks/useAlignedContentLeft";
import StrapiLogo from "@/assets/img/logos/v2/logo-strapi.png";
import ExecLogo from "@/assets/img/logos/v2/logo-exec.png";
import TogetherAILogo from "@/assets/img/logos/v2/logo-togetherai.png";
import HypergrowthLogo from "@/assets/img/logos/v2/logo-hypergrowth.png";
import RampLogo from "@/assets/img/logos/v2/logo-ramp.png";
import SwoogoLogo from "@/assets/img/logos/v2/logo-swoogo.png";
import DatumateLogo from "@/assets/img/logos/v2/logo-datumate.png";
import TeleportLogo from "@/assets/img/logos/v2/logo-teleport.png";
import ConstraforLogo from "@/assets/img/logos/v2/logo-constrafor.png";
import ArenaLogo from "@/assets/img/logos/v2/logo-arena.png";
import HomebaseLogo from "@/assets/img/logos/v2/logo-homebase.png";
import AirbyteLogo from "@/assets/img/logos/v2/logo-airbyte.png";

type Testimonial = {
  logo: { src: StaticImageData; alt: string; height?: number };
  quote: string;
  authorName: string;
  authorTitle: string;
};

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      logo: {
        src: StrapiLogo,
        alt: "Strapi",
        height: 20,
      },
      quote:
        "With GrowthX's systematic, AI-driven SEO approach, we're seeing consistent, repeatable results. Clicks are up week after week, and the bar for content quality keeps getting higher. Their strategy has turned AI powered SEO into a dependable growth engine.",
      authorName: "Victor Coisne",
      authorTitle: "VP of Marketing, Strapi",
    },
    {
      logo: {
        src: ExecLogo,
        alt: "Exec",
        height: 17,
      },
      quote:
        "AI chat is the most important marketing channel of the last 20 years. GrowthX helped us become the leader in our niche.",
      authorName: "Sean Linehan",
      authorTitle: "CEO, Exec",
    },
    {
      logo: {
        src: AirbyteLogo,
        alt: "Airbyte",
        height: 27,
      },
      quote:
        "If you're not partnering with GrowthX AI to supercharge your growth with expert-led, AI-powered growth, you're going to be left behind. They're not only an incredible resource for any leader building high performing growth teams, but they're also a truly awesome group of humans. Some of the kindest people you'll ever work with.",
      authorName: "Mario Moscatiello",
      authorTitle: "Chief of Growth @ Airbyte",
    },
    {
      logo: {
        src: TogetherAILogo,
        alt: "Together AI",
        height: 20,
      },
      quote:
        "GrowthX is truly defining AI-led growth, setting a new benchmark for what's possible. Their expert-in-the-loop model combines a powerful blend of strategy, execution, and AI, delivering a hands-on, scalable approach that drives real impact.",
      authorName: "Rajan Sheth",
      authorTitle: "CMO, Together AI",
    },
    {
      logo: {
        src: HypergrowthLogo,
        alt: "Hypergrowth",
        height: 32,
      },
      quote:
        "Marcel is the mastermind behind the scaled LLM SEO strategy that's driving results for us. He's hands-on, incredibly technical, and his work speaks for itself. We're seeing real, measurable impact thanks to his approach.",
      authorName: "Guillaume Cabane",
      authorTitle: "General Partner, Hypergrowth",
    },
    {
      logo: {
        src: RampLogo,
        alt: "Ramp",
        height: 24,
      },
      quote:
        "We've tried other partners, but GrowthX blew us away. Insanely responsive and fast, they deliver top-notch quality every time. Finally found a team that actually gets it.",
      authorName: "Luke Tubinis",
      authorTitle: "Director of Growth, Ramp",
    },
    {
      logo: {
        src: SwoogoLogo,
        alt: "Swoogo",
        height: 19,
      },
      quote:
        "Your guidance and execution on this SEO journey has been invaluable and we love working with you!",
      authorName: "Stacey Baer",
      authorTitle: "VP of Marketing, Swoogo",
    },
    {
      logo: {
        src: DatumateLogo,
        alt: "Datumate",
        height: 28,
      },
      quote:
        "I'll be honest—I thought content automation sounded a bit 'too good to be true,' but GrowthX proved me wrong. It's already paying huge dividends.",
      authorName: "Chaz Ross-Munro",
      authorTitle: "Head of Marketing, Datumate",
    },
    {
      logo: {
        src: TeleportLogo,
        alt: "Teleport",
        height: 25,
      },
      quote:
        "GrowthX is the real deal for practical AI workflows. I've pulled so much value from their frameworks and applied it directly to my work. Highly recommend if you're ready to 100X your growth workflows!",
      authorName: "Francesco Garofalo",
      authorTitle: "Growth Engineer, Teleport",
    },
    {
      logo: {
        src: ConstraforLogo,
        alt: "Constrafor",
        height: 28,
      },
      quote:
        "If you're looking to dive into the next-gen of marketing, I'd definitely recommend.",
      authorName: "Kenneth Tsai",
      authorTitle: "Growth Marketing, Constrafor",
    },
    {
      logo: {
        src: ArenaLogo,
        alt: "Arena",
        height: 16,
      },
      quote:
        "Highly recommended, folks. Marcel knows his thing!",
      authorName: "Paulo Martins",
      authorTitle: "CEO & Founder, Arena",
    },
    {
      logo: {
        src: HypergrowthLogo,
        alt: "Hypergrowth Advisor",
        height: 32,
      },
      quote:
        "With GrowthX, AI-led growth is no longer a guessing game. Their systematic, AI-driven approach drives reliable results again and again. It's impressive to see the impact they deliver.",
      authorName: "Carilu Dietrich",
      authorTitle: "CMO & Hypergrowth Advisor",
    },
    {
      logo: {
        src: HomebaseLogo,
        alt: "Homebase",
        height: 18,
      },
      quote:
        "It was a huge light bulb moment for me, rethinking what was possible and how we could approach things at Homebase.",
      authorName: "John Waldmann",
      authorTitle: "CEO, Homebase",
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
                <div className="flex justify-start items-start">
                  <Image
                    src={t.logo.src}
                    alt={t.logo.alt}
                    width={140}
                    height={140}
                    style={{ height: `${t.logo.height || 40}px`, width: "auto" }}
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
