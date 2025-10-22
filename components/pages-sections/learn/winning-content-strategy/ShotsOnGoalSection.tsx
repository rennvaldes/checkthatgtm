"use client";

import ContentLayout from "@/components/layout/ContentLayout";

export default function ShotsOnGoalSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>Velocity</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter mb-12">
                <span className="text-primary-black">The Execution Reality:</span>
                <br />
                <span className="text-primary-gray">Shots on Goal</span>
              </h2>

              <div className="prose prose-lg lg:prose-xl max-w-none">
                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8 font-semibold">
                  Every week is about one question: How many shots on goal do you get?
                </p>

                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
                  If you&apos;re publishing 1-2 pieces monthly, that&apos;s your maximum learning rate. If you&apos;re publishing 20+ pieces monthly, you&apos;re learning 10x faster.
                </p>

                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight font-semibold mb-6">
                  The compound effect:
                </p>

                <ul className="text-xl lg:text-2xl leading-relaxed tracking-tight space-y-3">
                  <li>Every piece published = learning opportunity</li>
                  <li>Every optimization = improvement to the system</li>
                  <li>Every successful piece = data about what works</li>
                  <li>Every cluster you dominate = audience trust you earn</li>
                </ul>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
