"use client";

import ContentLayout from "@/components/layout/ContentLayout";
import Image from "next/image";

export default function ProofPointSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>First Proof</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter">
                <span className="text-primary-black">The First Proof Point:</span>
                <br />
                <span className="text-primary-gray">SecurityIntelligence.com</span>
              </h2>
            </div>
          }
        />

        <div className="mt-12 max-w-5xl mx-auto">
          <div className="prose prose-lg lg:prose-xl max-w-none">
            <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
              I convinced IBM to let me test this theory. We built SecurityIntelligence.com and started publishing valuable content for security professionals.
            </p>

            <div className="my-12 rounded-lg overflow-hidden bg-gray-100">
              <Image
                src="/img/pages/organic-growth-timeline-ibm-to-deepgram.png"
                alt="Organic growth marketing timeline showing $50M pipeline generation at IBM SecurityIntelligence.com and continued success at Deepgram"
                width={1920}
                height={1080}
                className="w-full h-auto object-contain"
              />
            </div>

            <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-6 font-semibold">
              The results in year one:
            </p>
            <ul className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8 space-y-3">
              <li>$50 million in pipeline generated</li>
              <li>Less than $1 million invested</li>
              <li>Became the highest ROI channel for the entire business unit</li>
            </ul>

            <p className="text-xl lg:text-2xl leading-relaxed tracking-tight">
              But here&apos;s what mattered more than the numbers: we shifted from interrupting people to helping them. Instead of asking &quot;How do I get you to click?&quot; we asked &quot;How do I become the best answer to your questions?&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
