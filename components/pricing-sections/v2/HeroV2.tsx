"use client";

import DotPatternBackground from "@/components/ui/DotPatternBackground";
import useResponsiveDevice from "@/hooks/useResponsiveDevice";
import ContentLayout from "@/components/layout/ContentLayout";
import Spacer from "@/components/common/Spacer";
import Image from "next/image";
import Button from "@/components/common/Button";

export default function HeroV2() {
  const { isDesktop } = useResponsiveDevice();

  return (
    <section className="relative mt-24 w-full overflow-hidden lg:mt-[7.5rem]">
    <>
      {/* First Section */}
      <section className="relative w-full">
        <Spacer size="xxl" />
        <div className="container mx-auto px-4">
          <ContentLayout
            leftClassName="mt-4"
            leftContent={<div>Pricing Model</div>}
            rightContent={
              <div>
                <h1 className="text-[96px] leading-[1.1] tracking-tight">
                  <span className="text-primary-black font-semibold">
                    One subscription
                  </span>
                  <br />
                  <span className="text-primary-gray font-light">
                    Deliver AI-led growth
                  </span>
                </h1>
              </div>
            }
          />
        </div>
      </section>


      <section>
        <Spacer size="xl" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
            {/* Left: Yellow promo card */}
            <div className="bg-[#FFCC00] p-6 min-h-[300px] lg:min-h-[570px] flex flex-col justify-between">
              <div>
                <div className="text-sm md:text-base border border-black w-full text-center px-4 py-1 mb-6">
                  Starting at $12,000 per month
                </div>
                <h2 className="text-[32px] md:text-[44px] lg:text-[48px] leading-[1] font-semibold tracking-tight mb-5 text-primary-black">
                  Let’s build an engine for AI‑led growth
                </h2>
                <p className="text-[16px] md:text-xl leading-relaxed max-w-3xl text-[#303030]">
                  We build content systems that compound—designed for how people find and consume today: SEO, AEO, GEO, AI assistants, and beyond. A GrowthX subscription gives you access to our full editorial engine: research, writing, distribution, and analytics, led by a team that’s done it at TechCrunch, Deepgram, Webflow, and ClickUp. Everything is tuned to one goal—grow your audience and turn it into demand.
                </p>
              </div>
              <div>
                <div className="text-sm md:text-base flex items-center gap-2 mb-4 text-primary-black">
                  <span role="img" aria-label="calendar">📅</span>
                  Booking in August
                </div>
                <Button href="/book-demo" size="md" variant="secondary">
                  <span className="mr-2">Reserve your spot</span> →
                </Button>
              </div>
            </div>

            {/* Right: Included list card (transparent with border, like ServiceAsSoftware regular card) */}
            <div className="bg-transparent p-6 min-h-[300px] lg:min-h-[570px] text-[#303030] border border-[#DCD9D5]">
              <h3 className="text-[24px] md:text-[32px] lg:text-[36px] font-semibold tracking-tight mb-6">
                Included in all plans
              </h3>
              <ul>
                {[
                  "Access to all workstreams",
                  "Access to top 1% growth experts",
                  "Dedicated growth strategist",
                  "Turnaround times starting at 24 hours",
                  "We work in Slack as an extension of your team",
                  "Access to GrowthX platform",
                  "Access to AI Led Growth community",
                ].map((item, idx) => (
                  <li key={item} className={`flex items-center justify-between py-4 text-base md:text-lg ${idx !== 0 ? 'border-t border-[#DCD9D5]' : ''}`}>
                    <span>{item}</span>
                    <span aria-hidden className="text-[#303030]">✓</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Spacer size="xl" />
      </section>
    </>
    </section>
  );
}
