"use client";

import DotPatternBackground from "@/components/ui/DotPatternBackground";
import useResponsiveDevice from "@/hooks/useResponsiveDevice";
import ContentLayout from "@/components/layout/ContentLayout";
import Spacer from "@/components/common/Spacer";
import Button from "@/components/common/Button";
import ArrowRight16 from "@/components/icons/ArrowRight16";
import { Icon } from "@iconify/react";

export default function HeroV2() {
  const { isDesktop } = useResponsiveDevice();

  // Dynamic booking text logic
  const getBookingText = () => {
    const now = new Date();
    const currentDay = now.getDate();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    
    // If it's the first week (days 1-7), show "late {current month}"
    if (currentDay <= 7) {
      return `late ${monthNames[currentMonth]}`;
    }
    
    // If it's later in the month, show "{next month}"
    const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    return monthNames[nextMonth];
  };

  return (
    <section className="relative w-full overflow-hidden">
      <>
        <section className="relative w-full">
          <div className="container mx-auto px-4">
            <ContentLayout
              leftClassName="mt-4"
              leftContent={<div>Pricing Model</div>}
              rightContent={
                <div>
                  <h1 className="text-3xl lg:text-5xl xl:text-[96px] tracking-tighter">
                    <span className="text-primary-black">One subscription</span>
                    <br />
                    <span className="text-primary-gray">
                      Deliver AI-led growth
                    </span>
                  </h1>
                </div>
              }
            />
          </div>
        </section>

        <section>
          <Spacer size="large" />
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-[#FFCC00] p-6 lg:p-9 min-h-[300px] lg:min-h-[570px] space-y-6 lg:space-y-12 flex flex-col justify-between">
                <div>
                  <div className="text-sm md:text-base bg-black/10 w-fit text-center p-2.5 mb-6">
                    Starting at $15,000 per month
                  </div>
                  <h2 className="text-3xl lg:text-5xl leading-[1] font-semibold tracking-tighter mb-5 text-primary-black">
                    Let’s build an engine for AI‑led growth
                  </h2>
                  <p className="text-lg lg:text-2xl leading-relaxed max-w-3xl text-[#303030]">
                    We build content systems that compound—designed for how
                    people find and consume today: SEO, AEO, GEO, AI assistants,
                    and beyond. A GrowthX subscription gives you access to our
                    full editorial engine: research, writing, distribution, and
                    analytics, led by a team that’s done it at TechCrunch,
                    Deepgram, Webflow, and ClickUp. Everything is tuned to one
                    goal—grow your audience and turn it into demand.
                  </p>
                </div>
                <div>
                  <div className="text-sm md:text-base flex items-center gap-2 mb-4 text-primary-black">
                    <Icon icon="solar:calendar-bold" className="w-5 h-5" aria-hidden />
                    Booking in {getBookingText()}
                  </div>
                  <Button href="/book-demo" size="md" variant="secondary">
                    <span className="mr-2">Reserve your spot</span>
                    <ArrowRight16 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="bg-transparent p-6 lg:p-9 min-h-[300px] lg:min-h-[570px] text-[#303030] border border-primary-gray">
                <h3 className="text-2xl lg:text-4xl font-semibold tracking-tighter mb-6">
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
                    <li
                      key={item}
                      className={`flex items-center justify-between pt-4 pb-1 text-base lg:text-lg ${
                        idx !== 0 ? "border-t border-primary-gray" : ""
                      }`}
                    >
                      <span>{item}</span>
                      <Icon icon="material-symbols:check" className="w-6 h-6 text-[#303030]" aria-hidden />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </>
    </section>
  );
}
