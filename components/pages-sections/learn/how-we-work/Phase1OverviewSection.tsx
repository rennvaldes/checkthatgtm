"use client";

import ContentLayout from "@/components/layout/ContentLayout";

export default function Phase1OverviewSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>Phase 1</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter mb-12">
                <span className="text-primary-black">Strategy Sprint &</span>
                <br />
                <span className="text-primary-gray">Calibration</span>
              </h2>

              <div className="prose prose-lg lg:prose-xl max-w-none">
                <h3 className="text-2xl lg:text-3xl font-semibold tracking-tighter mb-8">
                  What We&apos;re Actually Doing
                </h3>

                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-6">
                  Think about onboarding a new head of marketing. They&apos;d need to:
                </p>

                <ul className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8 space-y-3">
                  <li>Learn your company inside and out</li>
                  <li>Understand your target audiences deeply</li>
                  <li>Figure out what content you should create</li>
                  <li>Define your brand voice and style guidelines</li>
                  <li>Map out competitive landscape</li>
                  <li>Build a content roadmap</li>
                </ul>

                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight font-semibold">
                  We do all of that in 8 weeks instead of 6 months.
                </p>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
