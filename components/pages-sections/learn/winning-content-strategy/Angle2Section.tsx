"use client";

import ContentLayout from "@/components/layout/ContentLayout";

export default function Angle2Section() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>Angle 2</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter mb-12">
                <span className="text-primary-black">Map Your Mind Share</span>
                <br />
                <span className="text-primary-gray">Competitors</span>
              </h2>

              <div className="prose prose-lg lg:prose-xl max-w-none">
                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
                  These aren&apos;t just your direct product competitors. These are <strong>everyone competing for your audience&apos;s attention:</strong>
                </p>

                <ul className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-12 space-y-3">
                  <li>Industry associations</li>
                  <li>Thought leaders and influencers</li>
                  <li>Publications they read regularly</li>
                  <li>Tools and resources they use</li>
                  <li>Communities they participate in</li>
                </ul>

                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
                  <strong>Why this matters:</strong> These competitors show you what your audience is already consuming. They&apos;ve done the market research for you.
                </p>

                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-6">
                  Look at the topics they cover, the traffic they get, the content that performs best. <strong>Find the gaps.</strong> What are they missing? Where can you deliver a better answer?
                </p>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
