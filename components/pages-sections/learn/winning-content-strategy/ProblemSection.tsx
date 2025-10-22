"use client";

import ContentLayout from "@/components/layout/ContentLayout";

export default function ProblemSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>The Issue</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter mb-12">
                <span className="text-primary-black">The Problem with Most</span>
                <br />
                <span className="text-primary-gray">Content Strategies</span>
              </h2>

              <div className="prose prose-lg lg:prose-xl max-w-none">
                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
                  Most companies approach content backwards. They start with keywords they want to rank for, or topics they think are "good for SEO."
                </p>

                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight font-semibold mb-8">
                  That&apos;s empty marketing.
                </p>

                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight">
                  Real content strategy starts with first principles: understanding humans, not algorithms.
                </p>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
