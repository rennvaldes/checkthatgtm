"use client";

import ContentLayout from "@/components/layout/ContentLayout";

export default function DifferenceSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>Our Approach</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter">
                <span className="text-primary-black">What We Built vs.</span>
                <br />
                <span className="text-primary-gray">What Everyone Else Builds</span>
              </h2>
            </div>
          }
        />

        <div className="mt-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="p-8 rounded-lg bg-gray-50">
              <h3 className="text-2xl lg:text-3xl font-semibold mb-4 tracking-tight">Traditional agencies:</h3>
              <p className="text-xl lg:text-2xl leading-relaxed tracking-tight">
                Sell you hours. Scale by hiring more people. Get slower and more expensive as they grow.
              </p>
            </div>

            <div className="p-8 rounded-lg bg-gray-50">
              <h3 className="text-2xl lg:text-3xl font-semibold mb-4 tracking-tight">Content tools:</h3>
              <p className="text-xl lg:text-2xl leading-relaxed tracking-tight">
                Give you features. You're still the bottleneck. Quality depends entirely on your team's expertise.
              </p>
            </div>

            <div className="p-8 rounded-lg bg-primary-black text-white">
              <h3 className="text-2xl lg:text-3xl font-semibold mb-4 tracking-tight">GrowthX:</h3>
              <p className="text-xl lg:text-2xl leading-relaxed tracking-tight">
                We deliver outcomes. AI workflows handle 80-90% of the work. Expert humans guide strategy and perfect the final output. We get faster and smarter with each client.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
