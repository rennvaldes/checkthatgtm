"use client";

import ContentLayout from "@/components/layout/ContentLayout";
import Image from "next/image";

export default function ResultsSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>The Results</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter">
                <span className="text-primary-black">The Results</span>
                <br />
                <span className="text-primary-gray">Speak</span>
              </h2>
            </div>
          }
        />

        <div className="mt-12 max-w-5xl mx-auto">
          <div className="prose prose-lg lg:prose-xl max-w-none">
            <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
              We went from zero to &gt;$11M run rate in under a year. All organic growth. No ads. No traditional marketing.
            </p>

            <div className="my-12 rounded-lg overflow-hidden bg-gray-100">
              <Image
                src="/img/pages/growthx-client-portfolio-traction-momentum.png"
                alt="GrowthX client portfolio showing proven traction and momentum across multiple B2B SaaS companies"
                width={1920}
                height={1080}
                className="w-full h-auto object-contain"
              />
            </div>

            <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
              <strong>How?</strong> The same way we help our clients: by consistently delivering value and earning trust.
            </p>

            <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-6 font-semibold">
              Current clients include:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
              <div>Lovable</div>
              <div>Webflow</div>
              <div>Ramp</div>
              <div>Augment Code</div>
              <div>Udemy</div>
              <div>SentinelOne</div>
              <div>Reddit</div>
              <div>Abnormal Security</div>
              <div>Superhuman</div>
              <div>StackBlitz</div>
              <div className="col-span-2 md:col-span-3 font-semibold">And 60+ others</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
