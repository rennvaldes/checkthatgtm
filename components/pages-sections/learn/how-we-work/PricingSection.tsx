"use client";

import ContentLayout from "@/components/layout/ContentLayout";

export default function PricingSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>Investment</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter mb-12">
                <span className="text-primary-black">What This</span>
                <br />
                <span className="text-primary-gray">Costs</span>
              </h2>

              <div className="prose prose-lg lg:prose-xl max-w-none">
                <div className="my-8">
                  <h3 className="text-2xl lg:text-3xl font-semibold tracking-tighter mb-4">
                    Strategy Sprint
                  </h3>
                  <p className="text-xl lg:text-2xl leading-relaxed tracking-tight">
                    $20-$40k (fixed fee, regardless of 4 or 8 weeks)
                  </p>
                </div>

                <div className="my-8">
                  <h3 className="text-2xl lg:text-3xl font-semibold tracking-tighter mb-4">
                    Growth Execution
                  </h3>
                  <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-4">
                    Custom monthly pricing depending on scope
                  </p>
                  <ul className="text-xl lg:text-2xl leading-relaxed tracking-tight space-y-3">
                    <li><strong>Standard:</strong> 20-30 pieces monthly + optimization</li>
                    <li><strong>Growth:</strong> 40+ pieces + lead magnets</li>
                    <li><strong>Enterprise:</strong> Full content engine + custom workflows</li>
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
