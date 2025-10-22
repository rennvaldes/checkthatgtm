"use client";

import ContentLayout from "@/components/layout/ContentLayout";

export default function ContentDeathMarchSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>The Reality</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter">
                <span className="text-primary-black">The Traditional</span>
                <br />
                <span className="text-primary-gray">Content Death March</span>
              </h2>

              <div className="mt-12">
                <div className="prose prose-lg lg:prose-xl max-w-none">
                  <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
                    I&apos;ve built content engines at IBM, ServiceTitan, HP, and others. Each time, the same painful process. Let me walk you through exactly what happens when you try to do this right.
                  </p>

                  <div className="my-12">
                    <h3 className="text-2xl lg:text-3xl font-semibold tracking-tighter mb-6">
                      Month 1-3: The Hunt for Talent
                    </h3>
                    <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-4">
                      You decide you need a &quot;head of content.&quot; Job descriptions. Headcount approval. Recruiting someone from a publication that serves your audience.
                    </p>
                    <p className="text-xl lg:text-2xl leading-relaxed tracking-tight font-semibold text-primary-gray mb-6">
                      Reality check: You just spent three months to hire one person who now has to learn your business from scratch.
                    </p>
                  </div>

                  <div className="my-12">
                    <h3 className="text-2xl lg:text-3xl font-semibold tracking-tighter mb-6">
                      Month 4-5: Strategy Theater
                    </h3>
                    <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-4">
                      Your new hire goes through the same discovery you just did. Customer interviews. Listening tours. Building empathy for your audience. Drafting content strategies.
                    </p>
                    <p className="text-xl lg:text-2xl leading-relaxed tracking-tight font-semibold text-primary-gray mb-6">
                      You&apos;re 5 months in and haven&apos;t published anything yet.
                    </p>
                  </div>

                  <div className="my-12">
                    <h3 className="text-2xl lg:text-3xl font-semibold tracking-tighter mb-6">
                      Month 6+: The Team Explosion
                    </h3>
                    <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-6">
                      Now you need writers. And editors. And subject matter experts to interview. And an SEO person because your site is slow. And a designer because your graphics suck.
                    </p>
                    <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-6">
                      Suddenly you&apos;re managing a small army of freelancers. Project management becomes a full-time job. Everyone needs context. Everyone needs direction.
                    </p>
                  </div>

                  <div className="my-12">
                    <h3 className="text-2xl lg:text-3xl font-semibold tracking-tighter mb-6">
                      The Maintenance Nightmare
                    </h3>
                    <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-4">
                      Here&apos;s what nobody tells you: <strong>Every piece of content you create becomes a liability.</strong>
                    </p>
                    <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-6">
                      That article from 6 months ago? It&apos;s already outdated. Those 50 pieces you published last quarter? Half need refreshing. We&apos;ve worked with companies that have thousands of pages that haven&apos;t been touched in years—just sitting there, losing value every day.
                    </p>
                    <p className="text-xl lg:text-2xl leading-relaxed tracking-tight font-semibold">
                      The more content you create, the more you have to maintain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
