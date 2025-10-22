"use client";

import ContentLayout from "@/components/layout/ContentLayout";

export default function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftClassName="mt-4"
          leftContent={<div>The Problem</div>}
          rightContent={
            <div>
              <h1 className="text-4xl lg:text-5xl xl:text-[96px] tracking-tighter">
                <span className="text-primary-black">The Problem</span>
                <br />
                <span className="text-primary-gray">We&apos;re Solving</span>
              </h1>
            </div>
          }
          description="Why building a content engine is harder than you think—and the real reason most companies fail at content."
          descriptionClassName="mt-12 text-lg lg:text-2xl max-w-[520px]"
        />
      </div>
    </section>
  );
}
