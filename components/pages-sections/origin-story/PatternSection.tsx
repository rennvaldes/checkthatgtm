"use client";

import ContentLayout from "@/components/layout/ContentLayout";

export default function PatternSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>The Pattern</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter mb-12">
                <span className="text-primary-black">The Pattern</span>
                <br />
                <span className="text-primary-gray">Across Companies</span>
              </h2>

              <div className="prose prose-lg lg:prose-xl max-w-none">
                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
                  I kept building these content engines everywhere I went:
                </p>

                <ul className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8 space-y-4">
                  <li><strong>HashiCorp:</strong> Helped grow from $6M to $100M ARR in 2 years</li>
                  <li><strong>ServiceTitan:</strong> Built content strategy for a company now worth billions</li>
                  <li><strong>Scale AI:</strong> Created Transform X conference featuring Sam Altman and Andrew Ng—10,000 attendees, $100M pipeline, budget under $100K</li>
                </ul>

                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-6">
                  Each time, same process:
                </p>

                <ol className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8 space-y-3 list-none">
                  <li>Hire editors</li>
                  <li>Build content strategy</li>
                  <li>Recruit subject matter experts</li>
                  <li>Systematically create high-quality content</li>
                  <li>Distribute and convert attention into revenue</li>
                </ol>

                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight">
                  <strong>The problem:</strong> It never got easier. Every new company meant rebuilding the entire machine from scratch.
                </p>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
