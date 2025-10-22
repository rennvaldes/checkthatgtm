"use client";

import ContentLayout from "@/components/layout/ContentLayout";

export default function GrowthXApplicationSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>Implementation</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter mb-12">
                <span className="text-primary-black">How We Apply This</span>
                <br />
                <span className="text-primary-gray">Framework</span>
              </h2>

              <div className="prose prose-lg lg:prose-xl max-w-none">
                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
                  At GrowthX, this isn&apos;t theory. This is our systematic approach with every client:
                </p>

                <ol className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-12 space-y-4 list-none">
                  <li><strong>Deep audience research</strong> - We interview customers, analyze behavior, map their entire context</li>
                  <li><strong>Competitive intelligence</strong> - We identify all mind share competitors and content gaps</li>
                  <li><strong>Jobs-to-be-done mapping</strong> - We understand exactly how your product creates value</li>
                  <li><strong>Strategic clustering</strong> - We organize opportunities into coherent topic pillars</li>
                  <li><strong>Prioritized execution</strong> - We focus on high-impact opportunities first</li>
                  <li><strong>Continuous optimization</strong> - We learn from every piece and compound those learnings</li>
                </ol>

                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight font-semibold">
                  The result: Content engines that drive 3-5x ROI within 6 months.
                </p>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
