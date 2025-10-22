"use client";

import ContentLayout from "@/components/layout/ContentLayout";

export default function Phase1DeliverablesSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>Deliverables</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter mb-12">
                <span className="text-primary-black">What You Get</span>
                <br />
                <span className="text-primary-gray">(For Real)</span>
              </h2>

              <div className="prose prose-lg lg:prose-xl max-w-none">
                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8 text-primary-gray font-semibold">
                  Not fluffy deliverables. Actual working assets:
                </p>

                <ul className="text-xl lg:text-2xl leading-relaxed tracking-tight space-y-4">
                  <li><strong>AI-Ready Brand Assets:</strong> Voice guide, style guide, content frameworks</li>
                  <li><strong>Calibration Content:</strong> 3-5 pieces that set the quality bar (ready to publish)</li>
                  <li><strong>6-12 Month Content Roadmap:</strong> Specific topics, angles, and priorities</li>
                  <li><strong>Competitive Analysis:</strong> What&apos;s working, what gaps exist, where you win</li>
                  <li><strong>Custom AI Workflows:</strong> Built specifically for your business and audience</li>
                  <li><strong>ContentOS Setup:</strong> Your entire content operation, systematized</li>
                </ul>

                <div className="mt-12 pt-12 border-t border-[#D9D6D2]">
                  <h3 className="text-2xl lg:text-3xl font-semibold tracking-tighter mb-6">
                    The De-Risk Factor
                  </h3>
                  <ul className="text-xl lg:text-2xl leading-relaxed tracking-tight space-y-4">
                    <li><strong>Fixed fee:</strong> $20-$40k. No surprises.</li>
                    <li><strong>Mutual opt-in:</strong> After the sprint, we both decide if we want to continue. No long-term contracts. No awkward breakups.</li>
                    <li><strong>Immediate value:</strong> Even if you don&apos;t continue to Phase 2, you have everything you need to execute internally.</li>
                    <li><strong>World-class team:</strong> Editor-in-chiefs from major publications. SEO specialists. AI engineers. Building custom workflows just for you.</li>
                  </ul>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
