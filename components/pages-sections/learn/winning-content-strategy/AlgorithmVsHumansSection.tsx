"use client";

import ContentLayout from "@/components/layout/ContentLayout";

export default function AlgorithmVsHumansSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>Philosophy</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter mb-12">
                <span className="text-primary-black">Why This Beats</span>
                <br />
                <span className="text-primary-gray">Algorithm Chasing</span>
              </h2>

              <div className="prose prose-lg lg:prose-xl max-w-none">
                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
                  Most companies optimize for Google&apos;s algorithm or whatever AI tool is trending this week.
                </p>

                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight font-semibold mb-8">
                  That&apos;s backwards.
                </p>

                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
                  Algorithms are trying to figure out what humans want. <strong>Go straight to the humans.</strong>
                </p>

                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight">
                  If you solve for your audience—if you build genuine trust and deliver real value—the algorithms will follow. They&apos;re designed to surface what people actually find helpful.
                </p>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
