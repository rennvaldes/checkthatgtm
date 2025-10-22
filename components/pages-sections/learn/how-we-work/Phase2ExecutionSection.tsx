"use client";

import ContentLayout from "@/components/layout/ContentLayout";

export default function Phase2ExecutionSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>Phase 2</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter mb-12">
                <span className="text-primary-black">Growth</span>
                <br />
                <span className="text-primary-gray">Execution</span>
              </h2>

              <div className="prose prose-lg lg:prose-xl max-w-none">
                <h3 className="text-2xl lg:text-3xl font-semibold tracking-tighter mb-8">
                  How This Actually Works
                </h3>

                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
                  We don&apos;t disappear into a black box and emerge with content. We become an extension of your team.
                </p>

                <ul className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-12 space-y-4">
                  <li><strong>Weekly alignment:</strong> What&apos;s working, what&apos;s not, what to adjust</li>
                  <li><strong>Flexible execution:</strong> We&apos;re not rigidly following a plan from 3 months ago</li>
                  <li><strong>Content pipeline:</strong> New pieces every week, plus maintenance of existing content</li>
                  <li><strong>Performance optimization:</strong> Weekly audits, constant improvements, doubling down on what works</li>
                </ul>

                <h3 className="text-2xl lg:text-3xl font-semibold tracking-tighter mb-8">
                  The ContentOS Advantage
                </h3>

                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-6">
                  By Phase 2, we&apos;ve built your entire content operation:
                </p>

                <ul className="text-xl lg:text-2xl leading-relaxed tracking-tight space-y-4">
                  <li><strong>Assignment inventory:</strong> Months of content planned and prioritized</li>
                  <li><strong>Quality standards:</strong> Calibrated to your exact definition of &quot;great&quot;</li>
                  <li><strong>Distribution strategy:</strong> Multi-channel approach tailored to your audience</li>
                  <li><strong>Performance tracking:</strong> What&apos;s driving results, what needs improvement</li>
                </ul>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
