"use client";

import ContentLayout from "@/components/layout/ContentLayout";

export default function FAQSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>Questions</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter mb-12">
                <span className="text-primary-black">Common</span>
                <br />
                <span className="text-primary-gray">Questions</span>
              </h2>

              <div className="prose prose-lg lg:prose-xl max-w-none space-y-12">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-semibold tracking-tighter mb-4">
                    "Can we skip the Strategy Sprint?"
                  </h3>
                  <p className="text-xl lg:text-2xl leading-relaxed tracking-tight">
                    We tried that. It doesn't work. You end up spending the first 3 months of execution doing strategy work anyway—except now you're paying monthly fees for discovery work.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl lg:text-3xl font-semibold tracking-tighter mb-4">
                    "What if we don't continue after the Sprint?"
                  </h3>
                  <p className="text-xl lg:text-2xl leading-relaxed tracking-tight">
                    You keep everything. The workflows, the content, the roadmap. We've had companies execute our recommendations internally for years.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl lg:text-3xl font-semibold tracking-tighter mb-4">
                    "How do we know you understand our business?"
                  </h3>
                  <p className="text-xl lg:text-2xl leading-relaxed tracking-tight">
                    That's literally what the Strategy Sprint is for. By week 2, we'll know your audience better than most of your employees.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl lg:text-3xl font-semibold tracking-tighter mb-4">
                    "What if our priorities change during execution?"
                  </h3>
                  <p className="text-xl lg:text-2xl leading-relaxed tracking-tight">
                    That's why we meet weekly. We're not following a rigid plan from 6 months ago. We adapt with your business.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl lg:text-3xl font-semibold tracking-tighter mb-4">
                    "How is this different from hiring an agency?"
                  </h3>
                  <p className="text-xl lg:text-2xl leading-relaxed tracking-tight">
                    Agencies sell you hours. We sell you outcomes. Agencies scale by hiring more people. We scale through AI workflows. Agencies take 3 weeks to publish one piece. We publish 20+ pieces monthly at higher quality.
                  </p>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
