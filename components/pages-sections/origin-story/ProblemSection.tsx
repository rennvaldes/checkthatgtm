"use client";

import ContentLayout from "@/components/layout/ContentLayout";

export default function ProblemSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>The Problem</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter mb-12">
                <span className="text-primary-black">The Problem That</span>
                <br />
                <span className="text-primary-gray">Started It All</span>
              </h2>

              <div className="prose prose-lg lg:prose-xl max-w-none">
                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-6">
                  I&apos;m Marcel Santilli, CEO of GrowthX. This story starts at IBM, where I watched them burn through over a billion dollars annually on marketing that created zero lasting value.
                </p>
                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-6">
                  Think about that number. <strong>A billion dollars.</strong> On ads that disappear the moment you stop paying. On content syndication that nobody reads. On renting attention instead of earning it.
                </p>
                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-6">
                  I did the math. For what IBM spent on empty marketing, they could have literally bought every publication in every category they competed in.
                </p>
                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight">
                  That&apos;s when it hit me: <strong>What if companies became publishers instead of just advertisers?</strong>
                </p>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
