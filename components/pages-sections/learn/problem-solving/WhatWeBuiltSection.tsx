"use client";

import ContentLayout from "@/components/layout/ContentLayout";

export default function WhatWeBuiltSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>Our Solution</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter">
                <span className="text-primary-black">What We Built</span>
                <br />
                <span className="text-primary-gray">Instead</span>
              </h2>

              <div className="mt-12">
                <div className="prose prose-lg lg:prose-xl max-w-none">
                  <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-12">
                    We spent years solving this exact problem. Not with more people or better tools, but with a fundamentally different approach:
                  </p>

                  <div className="my-12">
                    <h3 className="text-2xl lg:text-3xl font-semibold tracking-tighter mb-6">
                      AI Workflows That Think Like Experts
                    </h3>
                    <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-4">
                      We&apos;ve distilled the entire content creation process into AI workflows. Audience research. Opportunity identification. Content planning. Writing. Optimization. Distribution.
                    </p>
                    <p className="text-xl lg:text-2xl leading-relaxed tracking-tight font-semibold text-primary-gray">
                      The AI handles the heavy lifting. Humans guide the strategy.
                    </p>
                  </div>

                  <div className="my-12">
                    <h3 className="text-2xl lg:text-3xl font-semibold tracking-tighter mb-6">
                      Expert Humans in the Loop
                    </h3>
                    <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-4">
                      Our team includes people who ran TechCrunch, Apple&apos;s blog, and major publications. They don&apos;t write every word—they guide every decision.
                    </p>
                    <p className="text-xl lg:text-2xl leading-relaxed tracking-tight font-semibold text-primary-gray">
                      World-class expertise without the overhead.
                    </p>
                  </div>

                  <div className="my-12">
                    <h3 className="text-2xl lg:text-3xl font-semibold tracking-tighter mb-6">
                      Continuous Learning System
                    </h3>
                    <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-4">
                      Every piece of content we create makes the system smarter. Every client interaction improves the workflows. Every expert refinement gets baked into the AI.
                    </p>
                    <p className="text-xl lg:text-2xl leading-relaxed tracking-tight font-semibold text-primary-gray">
                      We get better at your business the longer we work together.
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
