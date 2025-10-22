"use client";

import ContentLayout from "@/components/layout/ContentLayout";

export default function Angle1Section() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>Angle 1</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter mb-12">
                <span className="text-primary-black">Know Your Audience</span>
                <br />
                <span className="text-primary-gray">Like They&apos;re Sitting Across From You</span>
              </h2>

              <div className="prose prose-lg lg:prose-xl max-w-none">
                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
                  Don&apos;t just say "we serve accountants." That tells you nothing.
                </p>

                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight font-semibold mb-6">
                  Go deeper:
                </p>

                <ul className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-12 space-y-3">
                  <li>Who is this person beyond their job title?</li>
                  <li>What&apos;s their daily context and environment?</li>
                  <li>What are their top 10 questions and concerns?</li>
                  <li>What work products do they deliver?</li>
                  <li>What KPIs are they responsible for?</li>
                  <li>What gets them fired? What gets them promoted?</li>
                  <li>Who are the experts they trust and why?</li>
                  <li>What resources do they rely on?</li>
                </ul>

                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
                  <strong>Build a knowledge graph around that person.</strong> Your goal is to understand them better than they understand themselves.
                </p>

                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight">
                  When they read your content, they should be nodding the whole time thinking, "Yes, that&apos;s exactly me."
                </p>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
