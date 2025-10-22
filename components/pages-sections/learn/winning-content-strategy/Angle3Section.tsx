"use client";

import ContentLayout from "@/components/layout/ContentLayout";

export default function Angle3Section() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>Angle 3</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter mb-12">
                <span className="text-primary-black">Understand Your</span>
                <br />
                <span className="text-primary-gray">Jobs-to-be-Done</span>
              </h2>

              <div className="prose prose-lg lg:prose-xl max-w-none">
                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
                  Not your features. Not your product specs. <strong>The value you actually deliver.</strong>
                </p>

                <ul className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-12 space-y-3">
                  <li>What jobs does your product enable?</li>
                  <li>What pain points do you solve?</li>
                  <li>Why do you exist from your customer&apos;s perspective?</li>
                  <li>What outcomes do people achieve with your help?</li>
                </ul>

                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight">
                  <strong>The goal:</strong> Lead TO your product, not WITH your product. The content should naturally guide people toward what you offer without feeling like a sales pitch.
                </p>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
