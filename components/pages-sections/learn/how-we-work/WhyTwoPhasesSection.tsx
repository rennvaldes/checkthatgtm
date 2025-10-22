"use client";

import ContentLayout from "@/components/layout/ContentLayout";

export default function WhyTwoPhasesSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>Rationale</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter mb-12">
                <span className="text-primary-black">Why Two Phases</span>
                <br />
                <span className="text-primary-gray">(Instead of Just &quot;Let&apos;s Start&quot;)</span>
              </h2>

              <div className="prose prose-lg lg:prose-xl max-w-none">
                <h3 className="text-2xl lg:text-3xl font-semibold tracking-tighter mb-8">
                  For You:
                </h3>

                <ul className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-12 space-y-4">
                  <li><strong>Lower risk:</strong> Try us for 6-8 weeks instead of committing to a year</li>
                  <li><strong>Faster results:</strong> We front-load all the strategic work</li>
                  <li><strong>Better alignment:</strong> We know exactly what good looks like for your company</li>
                  <li><strong>Clearer ROI:</strong> You see value before making a bigger commitment</li>
                </ul>

                <h3 className="text-2xl lg:text-3xl font-semibold tracking-tighter mb-8">
                  For Us:
                </h3>

                <ul className="text-xl lg:text-2xl leading-relaxed tracking-tight space-y-4">
                  <li><strong>Better work:</strong> We understand your business before we start executing</li>
                  <li><strong>Higher success rate:</strong> Proper foundation means better long-term results</li>
                  <li><strong>Mutual fit:</strong> We only work with companies where we can deliver exceptional results</li>
                  <li><strong>Sustainable partnership:</strong> No misaligned expectations or scope creep</li>
                </ul>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
