"use client";

import ContentLayout from "@/components/layout/ContentLayout";

export default function WorkshopsSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>From Workshops</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter">
                <span className="text-primary-black">From Workshops</span>
                <br />
                <span className="text-primary-gray">to Company</span>
              </h2>
            </div>
          }
        />

        <div className="mt-12 max-w-5xl mx-auto">
          <div className="prose prose-lg lg:prose-xl max-w-none">
            <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
              I started teaching workshops on building these AI workflows. 170 people paid for full-day sessions. But here&apos;s what I learned:
            </p>

            <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8 font-semibold">
              People didn&apos;t want to build workflows. They wanted the outcomes.
            </p>

            <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
              They needed help adapting the workflows to their business. They needed experts in the loop to guide strategy and ensure quality. They wanted the system, not the instructions.
            </p>

            <p className="text-xl lg:text-2xl leading-relaxed tracking-tight">
              That&apos;s how GrowthX was born.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
