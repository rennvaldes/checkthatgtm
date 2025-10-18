"use client";

import ContentLayout from "@/components/layout/ContentLayout";

export default function ScalingSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>Scaling Up</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter">
                <span className="text-primary-black">Scaling the Model:</span>
                <br />
                <span className="text-primary-gray">TechBeacon at HP</span>
              </h2>
            </div>
          }
        />

        <div className="mt-12 max-w-5xl mx-auto">
          <div className="prose prose-lg lg:prose-xl max-w-none">
            <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
              At HP, I took this approach further. We built a contributor network of 1,000+ subject matter experts. Four managing editors. Teams of ghostwriters. A content machine cranking out 20 articles weekly.
            </p>

            <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-6 font-semibold">
              The results:
            </p>
            <ul className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8 space-y-3">
              <li>1 million visitors monthly (all organic)</li>
              <li>200,000 newsletter subscribers</li>
              <li>Biggest lead source for the business for over 10 years</li>
            </ul>

            <p className="text-xl lg:text-2xl leading-relaxed tracking-tight">
              The playbook was working. But it wasn&apos;t getting easier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
