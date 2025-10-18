"use client";

import ContentLayout from "@/components/layout/ContentLayout";

export default function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftClassName="mt-4"
          leftContent={<div>Origin Story</div>}
          rightContent={
            <div>
              <h1 className="text-4xl lg:text-5xl xl:text-[96px] tracking-tighter">
                <span className="text-primary-black">Why we built this</span>
                <br />
                <span className="text-primary-gray">(and why it works)</span>
              </h1>
            </div>
          }
          description="From burning a billion dollars on ads at IBM to building AI-powered content engines that actually compound value over time."
          descriptionClassName="mt-12 text-lg lg:text-2xl max-w-[520px]"
        />
      </div>
    </section>
  );
}
