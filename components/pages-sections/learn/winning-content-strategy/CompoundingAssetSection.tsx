"use client";

import ContentLayout from "@/components/layout/ContentLayout";

export default function CompoundingAssetSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>Results</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter mb-12">
                <span className="text-primary-black">The Compounding</span>
                <br />
                <span className="text-primary-gray">Asset Reality</span>
              </h2>

              <div className="prose prose-lg lg:prose-xl max-w-none">
                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
                  This approach creates content that:
                </p>

                <ul className="text-xl lg:text-2xl leading-relaxed tracking-tight space-y-4">
                  <li><strong>Gets better over time</strong> (not worse)</li>
                  <li><strong>Builds cumulative authority</strong> (not one-off traffic spikes)</li>
                  <li><strong>Generates trust</strong> (not just clicks)</li>
                  <li><strong>Drives business outcomes</strong> (not vanity metrics)</li>
                </ul>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
