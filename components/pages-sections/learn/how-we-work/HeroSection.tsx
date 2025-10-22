"use client";

import ContentLayout from "@/components/layout/ContentLayout";

export default function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftClassName="mt-4"
          leftContent={<div>Our Process</div>}
          rightContent={
            <div>
              <h1 className="text-4xl lg:text-5xl xl:text-[96px] tracking-tighter">
                <span className="text-primary-black">How We</span>
                <br />
                <span className="text-primary-gray">Work</span>
              </h1>
            </div>
          }
          description="The GrowthX process is designed to de-risk everything. Here's exactly how we work together—and why we built it this way."
          descriptionClassName="mt-12 text-lg lg:text-2xl max-w-[520px]"
        />
      </div>
    </section>
  );
}
