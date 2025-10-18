"use client";

import ContentLayout from "@/components/layout/ContentLayout";
import Image from "next/image";

export default function BreakthroughSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>Breakthrough</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter">
                <span className="text-primary-black">The Breakthrough:</span>
                <br />
                <span className="text-primary-gray">AI Workflows at Deepgram</span>
              </h2>
            </div>
          }
        />

        <div className="mt-12 max-w-5xl mx-auto">
          <div className="prose prose-lg lg:prose-xl max-w-none">
            <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
              At Deepgram, something changed. Instead of just executing the same manual processes, I spent thousands of hours distilling everything I knew into AI workflows.
            </p>

            <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-4">
              How do you research audiences? <strong>Build a workflow.</strong>
            </p>
            <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-4">
              How do you identify content opportunities? <strong>Build a workflow.</strong>
            </p>
            <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
              How do you plan, research, draft, optimize, and distribute? <strong>Build workflows for all of it.</strong>
            </p>

            <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
              I kept expert editors in the loop for strategy, QA, and brand alignment. But the AI handled the heavy lifting.
            </p>

            <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-6 font-semibold">
              The results were shocking:
            </p>
            <ul className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-12 space-y-3">
              <li><strong>24x traffic growth</strong></li>
              <li><strong>4x revenue increase</strong></li>
              <li>Content machine that actually got smarter over time</li>
            </ul>

            <div className="my-12 bg-[#E6E3DE] border border-primary-gray p-4 md:p-6 lg:p-8 overflow-hidden group">
              <Image
                src="/img/pages/deepgram-growth-metrics-case-study.png"
                alt="Deepgram growth metrics showing 24x traffic growth and 4x revenue increase through AI-powered content strategy"
                width={1920}
                height={1080}
                className="w-full h-auto transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
