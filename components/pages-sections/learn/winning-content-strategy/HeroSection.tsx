"use client";

import ContentLayout from "@/components/layout/ContentLayout";

export default function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftClassName="mt-4"
          leftContent={<div>Strategy</div>}
          rightContent={
            <div>
              <h1 className="text-4xl lg:text-5xl xl:text-[96px] tracking-tighter">
                <span className="text-primary-black">Creating a Winning</span>
                <br />
                <span className="text-primary-gray">Content Strategy</span>
              </h1>
            </div>
          }
          description="The framework we use to turn content into a compounding growth engine. How to create a winning content strategy that actually drives growth."
          descriptionClassName="mt-12 text-lg lg:text-2xl max-w-[520px]"
        />
      </div>
    </section>
  );
}
