"use client";

import ContentLayout from "@/components/layout/ContentLayout";

export default function DifferenceComparisonSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>Comparison</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter">
                <span className="text-primary-black">The Difference</span>
                <br />
                <span className="text-primary-gray">This Makes</span>
              </h2>

              <div className="mt-12">
                <div className="prose prose-lg lg:prose-xl max-w-none">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12">
                    <div className="bg-[#F5F5F5] p-8 md:p-10 rounded-lg">
                      <h3 className="text-2xl font-semibold tracking-tighter mb-6">
                        Traditional Approach
                      </h3>
                      <ul className="space-y-4">
                        <li className="text-xl lg:text-2xl leading-relaxed tracking-tight flex gap-3">
                          <span className="text-primary-gray font-bold">✕</span>
                          <span>6+ months to see results</span>
                        </li>
                        <li className="text-xl lg:text-2xl leading-relaxed tracking-tight flex gap-3">
                          <span className="text-primary-gray font-bold">✕</span>
                          <span>Massive team overhead</span>
                        </li>
                        <li className="text-xl lg:text-2xl leading-relaxed tracking-tight flex gap-3">
                          <span className="text-primary-gray font-bold">✕</span>
                          <span>Constant hiring and training</span>
                        </li>
                        <li className="text-xl lg:text-2xl leading-relaxed tracking-tight flex gap-3">
                          <span className="text-primary-gray font-bold">✕</span>
                          <span>Content debt that compounds</span>
                        </li>
                        <li className="text-xl lg:text-2xl leading-relaxed tracking-tight flex gap-3">
                          <span className="text-primary-gray font-bold">✕</span>
                          <span>Quality that varies wildly</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-[#FFCC00] p-8 md:p-10 rounded-lg">
                      <h3 className="text-2xl font-semibold tracking-tighter mb-6 text-primary-black">
                        GrowthX Approach
                      </h3>
                      <ul className="space-y-4">
                        <li className="text-xl lg:text-2xl leading-relaxed tracking-tight flex gap-3">
                          <span className="font-bold">→</span>
                          <span>Outputs and early results in 30 days</span>
                        </li>
                        <li className="text-xl lg:text-2xl leading-relaxed tracking-tight flex gap-3">
                          <span className="font-bold">→</span>
                          <span>Fixed monthly investment</span>
                        </li>
                        <li className="text-xl lg:text-2xl leading-relaxed tracking-tight flex gap-3">
                          <span className="font-bold">→</span>
                          <span>Expert team included</span>
                        </li>
                        <li className="text-xl lg:text-2xl leading-relaxed tracking-tight flex gap-3">
                          <span className="font-bold">→</span>
                          <span>Content that stays fresh</span>
                        </li>
                        <li className="text-xl lg:text-2xl leading-relaxed tracking-tight flex gap-3">
                          <span className="font-bold">→</span>
                          <span>Consistent quality that improves over time</span>
                        </li>
                      </ul>
                    </div>
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
