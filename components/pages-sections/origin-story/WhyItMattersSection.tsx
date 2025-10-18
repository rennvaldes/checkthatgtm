"use client";

import ContentLayout from "@/components/layout/ContentLayout";

export default function WhyItMattersSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>Why This Matters</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter">
                <span className="text-primary-black">Why This Matters</span>
                <br />
                <span className="text-primary-gray">for You</span>
              </h2>
            </div>
          }
        />

        <div className="mt-12 max-w-5xl mx-auto">
          <div className="prose prose-lg lg:prose-xl max-w-none">
            <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
              Most companies are still stuck where I was 15 years ago. Choosing between expensive agencies that move slowly or trying to build content engines with internal teams that don&apos;t have the expertise.
            </p>

            <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
              We&apos;ve solved a problem I&apos;ve been working on my entire career: <strong>How do you create a content engine that actually compounds value over time?</strong>
            </p>

            <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
              The answer isn&apos;t just AI. It&apos;s not just human expertise either. It&apos;s the combination—AI workflows that think like experts, guided by humans who&apos;ve built these engines before.
            </p>

            <p className="text-xl lg:text-2xl leading-relaxed tracking-tight font-semibold">
              That&apos;s what we do. That&apos;s why it works.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
