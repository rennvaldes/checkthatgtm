"use client";

import React from "react";
import ContentLayout from "@/components/layout/ContentLayout";
import Spacer from "@/components/common/Spacer";
import Button from "@/components/common/Button";

type Card = {
  number: string;
  title: string;
  subtitle: string;
  youGet: string[];
  workstreams: string[];
};

const cards: Card[] = [
  {
    number: "01",
    title: "Content",
    subtitle: "Build a content foundation to win GEO and SEO.",
    youGet: [
      "Dedicated AI growth strategist",
      "Fine tuned expert + AI content machine",
      "Monitoring hub for AI mentions, citations, and search rankings",
    ],
    workstreams: [
      "Increase AI referrals and mentions",
      "Editorial Content: Multiply organic traffic",
      "Programmatic SEO: Scale topic coverage",
      "Content Refresh: Boost existing rankings",
    ],
  },
  {
    number: "02",
    title: "Distribution",
    subtitle: "Show up where your customers are searching from search to AI engines.",
    youGet: [
      "Custom content distribution plan",
      "Content repurposing machine from newsletters to socials",
      "Social signals monitoring",
    ],
    workstreams: [
      "Link Building: Elevate domain authority",
      "Social Media: Grow engaged audience",
    ],
  },
  {
    number: "03",
    title: "Conversion",
    subtitle: "Convert your audience with high quality offers.",
    youGet: [
      "A proven system to drive down-funnel metrics",
      "Lead magnets targeted to your ICP",
    ],
    workstreams: [
      "Paid Media: Optimize acquisition costs",
      "Conversion Rate Optimization: Maximize conversion rates",
      "Gated Content: Generate qualified leads",
      "Outbound Sales: Book qualified meetings",
    ],
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 lg:space-y-3">
      {items.map((item, i) => (
        <li key={i} className="text-black text-lg lg:text-[24px] tracking-tight">
          <span className="mr-1">→</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function PricingSection() {
  return (
    <section className="overflow-hidden">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div className="text-lg font-medium mb-4 md:mb-0">Pricing</div>}
          rightContent={
            <div className="flex flex-col gap-3">
              <h2 className="text-4xl lg:text-5xl tracking-tighter">
                Custom plans that fit your scale <br />
                <span className="text-primary-gray">
                  Extend your team and get outcomes, not tools
                </span>
              </h2>
            </div>
          }
        />
        <Spacer size="medium" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card, idx) => (
            <div
              key={card.number}
              className="bg-[#E6E3DE] border border-[#DCD9D5] p-6 md:p-8 h-full text-2xl tracking-tighter"
            >
              <div className="text-black text-2xl lg:text-[32px] tracking-tight mb-6">{card.number}</div>
              <h3 className="text-2xl lg:text-[36px] font-semibold text-black mb-2 tracking-tighter">
                {card.title}
              </h3>
              <p className="text-primary-gray text-lg lg:text-[24px] tracking-tighter mb-8">{card.subtitle}</p>
              <div className="mb-6">
                <div className="text-primary-gray text-lg lg:text-[24px] mb-3">You get:</div>
                <BulletList items={card.youGet} />
              </div>

              <div className="mt-12 lg:mt-18">
                <div className="text-primary-gray text-lg lg:text-[24px] mb-3">Workstreams:</div>
                <BulletList items={card.workstreams} />
              </div>
            </div>
          ))}
        </div>

        <Spacer size="medium" />

        <div className="flex justify-center">
          <div className="w-full md:w-1/2 lg:w-[560px]">
            <Button href="/contact" fullWidth size="lg">
              Reserve your spot
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}