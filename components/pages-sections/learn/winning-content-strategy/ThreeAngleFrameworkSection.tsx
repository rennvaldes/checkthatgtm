"use client";

import ContentLayout from "@/components/layout/ContentLayout";

export default function ThreeAngleFrameworkSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>Framework</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter mb-12">
                <span className="text-primary-black">The Three-Angle</span>
                <br />
                <span className="text-primary-gray">Framework</span>
              </h2>

              <div className="prose prose-lg lg:prose-xl max-w-none">
                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
                  Think of this as a Venn diagram. The magic happens where these three angles overlap:
                </p>

                <ol className="text-xl lg:text-2xl leading-relaxed tracking-tight space-y-4 list-none">
                  <li><strong>Angle 1: Know Your Audience</strong> Like they&apos;re sitting across from you</li>
                  <li><strong>Angle 2: Map Your Mind Share Competitors</strong> Everyone competing for attention</li>
                  <li><strong>Angle 3: Understand Your Jobs-to-be-Done</strong> The value you actually deliver</li>
                </ol>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
