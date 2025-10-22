"use client";

import ContentLayout from "@/components/layout/ContentLayout";

export default function PrioritizationSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>Priority</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter mb-12">
                <span className="text-primary-black">Prioritization</span>
                <br />
                <span className="text-primary-gray">Framework</span>
              </h2>

              <div className="prose prose-lg lg:prose-xl max-w-none">
                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
                  Not all content opportunities are equal. Prioritize based on:
                </p>

                <ol className="text-xl lg:text-2xl leading-relaxed tracking-tight space-y-4 list-none">
                  <li><strong>Relevance to your company</strong> - How closely does this connect to what you offer?</li>
                  <li><strong>Difficulty to own</strong> - How hard would it be to become the best answer?</li>
                  <li><strong>Internal knowledge</strong> - Do you have the expertise to create the definitive resource?</li>
                  <li><strong>Volume and interest</strong> - How much demand exists for this topic?</li>
                  <li><strong>Competition gaps</strong> - Where are current answers weakest?</li>
                </ol>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
