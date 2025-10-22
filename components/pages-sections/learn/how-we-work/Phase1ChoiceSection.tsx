"use client";

import ContentLayout from "@/components/layout/ContentLayout";

export default function Phase1ChoiceSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>Timeline</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter mb-12">
                <span className="text-primary-black">Your Choice:</span>
                <br />
                <span className="text-primary-gray">Fast or Thorough</span>
              </h2>

              <div className="prose prose-lg lg:prose-xl max-w-none">
                <div className="my-12">
                  <h3 className="text-2xl lg:text-3xl font-semibold tracking-tighter mb-6">
                    6-Week Sprint
                  </h3>
                  <p className="text-xl lg:text-2xl leading-relaxed tracking-tight">
                    Extremely accelerated and intense. For companies that want to move fast and have good availability for collaboration.
                  </p>
                </div>

                <div className="my-12">
                  <h3 className="text-2xl lg:text-3xl font-semibold tracking-tighter mb-6">
                    8-Week Sprint
                  </h3>
                  <p className="text-xl lg:text-2xl leading-relaxed tracking-tight">
                    More thorough discovery and refinement. For companies with complex audiences or limited bandwidth for the sprint.
                  </p>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
