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
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="text-black text-[24px] tracking-tight">
          <span className="mr-2">→</span>
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
              <h2 className="text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight text-[#151515]">
                Custom plans that fit your scale <br />
                Extend your team and get outcomes, not tools
              </h2>
            </div>
          }
        />
        <Spacer size="large" />

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, idx) => (
            <div
              key={card.number}
              className="bg-[#E6E3DE] border border-[#DCD9D5] p-6 md:p-8 h-full"
            >
              {/* Top number */}
              <div className="text-black text-[32px] tracking-tight mb-6">{card.number}</div>

              {/* Title + subtitle */}
              <h3 className="text-[36px] font-semibold tracking-tight text-black mb-2">
                {card.title}
              </h3>
              <p className="text-[#959595] text-[24px] tracking-tight mb-8">{card.subtitle}</p>

              {/* You get */}
              <div className="mb-6">
                <div className="text-[#959595] text-[24px] tracking-tight mb-3">You get:</div>
                <BulletList items={card.youGet} />
              </div>

              {/* Workstreams */}
              <div>
                <div className="text-[#959595] text-[24px] tracking-tight mb-3">Workstreams:</div>
                <BulletList items={card.workstreams} />
              </div>
            </div>
          ))}
        </div>

        <Spacer size="large" />

        {/* CTA */}
        <div className="flex justify-center">
          <div className="w-full md:w-[560px]">
            <Button href="/contact" size="lg" fullWidth ariaLabel="Reserve your spot">
              Reserve your spot
            </Button>
          </div>
        </div>

        <Spacer size="xl" />
      </div>
    </section>
  );
}