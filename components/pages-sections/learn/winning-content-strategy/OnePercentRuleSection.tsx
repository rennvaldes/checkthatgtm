"use client";

import ContentLayout from "@/components/layout/ContentLayout";

export default function OnePercentRuleSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>Growth</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter mb-12">
                <span className="text-primary-black">The 1% Better</span>
                <br />
                <span className="text-primary-gray">Rule</span>
              </h2>

              <div className="prose prose-lg lg:prose-xl max-w-none">
                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
                  Content success isn&apos;t about perfection. It&apos;s about <strong>consistent improvement.</strong>
                </p>

                <ul className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-12 space-y-3">
                  <li>Get 1% better every week</li>
                  <li>Better yet, get 1% better every day</li>
                  <li>Learn something from every piece you publish</li>
                  <li>Compound those learnings into the next piece</li>
                </ul>

                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight font-semibold">
                  This works. I&apos;ve never done this consistently and failed to see organic growth.
                </p>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
