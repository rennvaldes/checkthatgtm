"use client";

import ContentLayout from "@/components/layout/ContentLayout";

export default function OverlapSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>Intersection</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter mb-12">
                <span className="text-primary-black">Where the Magic</span>
                <br />
                <span className="text-primary-gray">Happens: The Overlap</span>
              </h2>

              <div className="prose prose-lg lg:prose-xl max-w-none">
                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
                  The best content lives at the intersection of all three angles:
                </p>

                <ul className="text-xl lg:text-2xl leading-relaxed tracking-tight space-y-4">
                  <li><strong>Your audience cares about it</strong> (Angle 1)</li>
                  <li><strong>There&apos;s proven demand but gaps in current answers</strong> (Angle 2)</li>
                  <li><strong>It connects to value you deliver</strong> (Angle 3)</li>
                </ul>

                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mt-8">
                  This gives you a comprehensive knowledge graph of everything that would be valuable to your audience within the context of your company.
                </p>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
