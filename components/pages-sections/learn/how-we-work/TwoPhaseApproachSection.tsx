"use client";

import ContentLayout from "@/components/layout/ContentLayout";

export default function TwoPhaseApproachSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>Overview</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter mb-12">
                <span className="text-primary-black">The Two-Phase</span>
                <br />
                <span className="text-primary-gray">Approach</span>
              </h2>

              <div className="prose prose-lg lg:prose-xl max-w-none">
                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
                  Most agencies want you to sign a year-long contract before they understand your business. We think that&apos;s backwards.
                </p>

                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight font-semibold mb-8">
                  Our approach:
                </p>

                <ol className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8 space-y-4 list-none">
                  <li><strong>Strategy Sprint & Calibration</strong> (8 weeks, fixed fee)</li>
                  <li><strong>Growth Execution</strong> (ongoing, mutual opt-in)</li>
                </ol>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
