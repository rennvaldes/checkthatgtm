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
        "With GrowthX's systematic, AI-driven SEO approach, we're seeing consistent, repeatable results. Clicks are up week after week, and the bar for content quality keeps getting higher. Their strategy has turned AI powered SEO into a dependable growth engine.",
      authorName: "Victor Coisne",
      authorTitle: "VP of Marketing, Strapi",
    },
    {
      logo: {
        src: "https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_strapi_1339eb5432.svg",
        alt: "Exec",
      },
      quote:
        "AI chat is the most important marketing channel of the last 20 years. GrowthX helped us become the leader in our niche.",
      authorName: "Sean Linehan",
      authorTitle: "CEO, Exec",
    },
    {
      logo: {
        src: "https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_strapi_1339eb5432.svg",
        alt: "Together AI",
      },
      quote:
        "GrowthX is truly defining AI-led growth, setting a new benchmark for what's possible. Their expert-in-the-loop model combines a powerful blend of strategy, execution, and AI, delivering a hands-on, scalable approach that drives real impact.",
      authorName: "Rajan Sheth",
      authorTitle: "CMO, Together AI",
    },
    {
      logo: {
        src: "https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_strapi_1339eb5432.svg",
        alt: "Hypergrowth",
      },
      quote:
        "Marcel is the mastermind behind the scaled LLM SEO strategy that's driving results for us. He's hands-on, incredibly technical, and his work speaks for itself. We're seeing real, measurable impact thanks to his approach.",
      authorName: "Guillaume Cabane",
      authorTitle: "General Partner, Hypergrowth",
    },
    {
      logo: {
        src: "https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_strapi_1339eb5432.svg",
        alt: "Ramp",
      },
      quote:
        "We've tried other partners, but GrowthX blew us away. Insanely responsive and fast, they deliver top-notch quality every time. Finally found a team that actually gets it.",
      authorName: "Luke Tubinis",
      authorTitle: "Director of Growth, Ramp",
    },
    {
      logo: {
        src: "https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_strapi_1339eb5432.svg",
        alt: "Swoogo",
      },
      quote:
        "Your guidance and execution on this SEO journey has been invaluable and we love working with you!",
      authorName: "Stacey Baer",
      authorTitle: "VP of Marketing, Swoogo",
    },
    {
      logo: {
        src: "https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_strapi_1339eb5432.svg",
        alt: "Datumate",
      },
      quote:
        "I'll be honest—I thought content automation sounded a bit 'too good to be true,' but GrowthX proved me wrong. It's already paying huge dividends.",
      authorName: "Chaz Ross-Munro",
      authorTitle: "Head of Marketing, Datumate",
    },
    {
      logo: {
        src: "https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_strapi_1339eb5432.svg",
        alt: "Teleport",
      },
      quote:
        "GrowthX is the real deal for practical AI workflows. I've pulled so much value from their frameworks and applied it directly to my work. Highly recommend if you're ready to 100X your growth workflows!",
      authorName: "Francesco Garofalo",
      authorTitle: "Growth Engineer, Teleport",
    },
    {
      logo: {
        src: "https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_strapi_1339eb5432.svg",
        alt: "Constrafor",
      },
      quote:
        "If you're looking to dive into the next-gen of marketing, I'd definitely recommend.",
      authorName: "Kenneth Tsai",
      authorTitle: "Growth Marketing, Constrafor",
    },
    {
      logo: {
        src: "https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_strapi_1339eb5432.svg",
        alt: "Arena",
      },
      quote:
        "Highly recommended, folks. Marcel knows his thing!",
      authorName: "Paulo Martins",
      authorTitle: "CEO & Founder, Arena",
    },
    {
      logo: {
        src: "https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_strapi_1339eb5432.svg",
        alt: "Hypergrowth Advisor",
      },
      quote:
        "With GrowthX, AI-led growth is no longer a guessing game. Their systematic, AI-driven approach drives reliable results again and again. It's impressive to see the impact they deliver.",
      authorName: "Carilu Dietrich",
      authorTitle: "CMO & Hypergrowth Advisor",
    },
    {
      logo: {
        src: "https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_strapi_1339eb5432.svg",
        alt: "Homebase",
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
                <div className="flex items-center">
                  <Image
                    src={t.logo.src}
                    alt={t.logo.alt}
                    width={110}
                    height={110}
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
