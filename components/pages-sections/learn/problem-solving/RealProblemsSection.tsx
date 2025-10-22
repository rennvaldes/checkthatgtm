"use client";

import ContentLayout from "@/components/layout/ContentLayout";

export default function RealProblemsSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>Root Causes</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter">
                <span className="text-primary-black">The Real Problem</span>
                <br />
                <span className="text-primary-gray">Nobody Talks About</span>
              </h2>

              <div className="mt-12">
                <div className="prose prose-lg lg:prose-xl max-w-none">
                  <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-12">
                    Building a content engine isn&apos;t just hard—it&apos;s getting harder. Here&apos;s why:
                  </p>

                  <div className="my-12">
                    <h3 className="text-2xl lg:text-3xl font-semibold tracking-tighter mb-6">
                      1. The Expertise Bottleneck
                    </h3>
                    <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-4">
                      Good content requires domain expertise. You can&apos;t just hire &quot;content writers.&quot; You need people who understand your industry, your customers, your competitive landscape.
                    </p>
                    <p className="text-xl lg:text-2xl leading-relaxed tracking-tight font-semibold text-primary-gray">
                      Those people are expensive and rare.
                    </p>
                  </div>

                  <div className="my-12">
                    <h3 className="text-2xl lg:text-3xl font-semibold tracking-tighter mb-6">
                      2. The Context Problem
                    </h3>
                    <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-4">
                      Every piece of content needs context. Brand voice. Strategic direction. Understanding of what&apos;s already been published. Knowledge of what&apos;s working and what isn&apos;t.
                    </p>
                    <p className="text-xl lg:text-2xl leading-relaxed tracking-tight font-semibold text-primary-gray">
                      That context lives in people&apos;s heads, not in tools.
                    </p>
                  </div>

                  <div className="my-12">
                    <h3 className="text-2xl lg:text-3xl font-semibold tracking-tighter mb-6">
                      3. The Quality vs. Speed Dilemma
                    </h3>
                    <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-4">
                      You can publish fast or you can publish well. Most companies ping-pong between the two, never finding the right balance.
                    </p>
                    <p className="text-xl lg:text-2xl leading-relaxed tracking-tight font-semibold text-primary-gray">
                      Quality processes don&apos;t scale. Fast processes don&apos;t maintain quality.
                    </p>
                  </div>

                  <div className="my-12">
                    <h3 className="text-2xl lg:text-3xl font-semibold tracking-tighter mb-6">
                      4. The Diminishing Returns Reality
                    </h3>
                    <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-4">
                      Content compounds, but it also decays. Without constant refreshing and optimization, your content library becomes deadweight.
                    </p>
                    <p className="text-xl lg:text-2xl leading-relaxed tracking-tight font-semibold text-primary-gray">
                      Most companies create more content debt than content assets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
