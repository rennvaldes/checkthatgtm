"use client";

import ContentLayout from "@/components/layout/ContentLayout";
import ArrowRight from "@/components/icons/ArrowRight";

export default function WhyThisWorksSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>Why It Works</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter">
                <span className="text-primary-black">Why This</span>
                <br />
                <span className="text-primary-gray">Works</span>
              </h2>

              <div className="mt-12">
                <div className="prose prose-lg lg:prose-xl max-w-none">
                  <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
                    Most companies treat content like a creative project. We treat it like an engineering problem.
                  </p>

                  <p className="text-xl lg:text-2xl leading-relaxed tracking-tight font-semibold mb-12">
                    Creative projects don't scale. Engineering solutions do.
                  </p>

                  <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
                    We've taken everything that's hard about building a content engine—the hiring, the coordination, the expertise, the maintenance—and systematized it.
                  </p>

                  <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
                    You get the outcomes without the overhead. The quality without the chaos. The scale without the complexity.
                  </p>

                  <p className="text-xl lg:text-2xl leading-relaxed tracking-tight font-semibold mb-12">
                    That's what we do. That's why it works.
                  </p>

                  <div className="mt-16 pt-12 border-t border-[#D9D6D2]">
                    <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-6">
                      Ready to skip the 6-month ramp and start seeing results in 30 days?
                    </p>
                    <a
                      href="/book-demo"
                      className="text-[#818EFF] text-lg lg:text-2xl font-medium tracking-tight hover:underline inline-flex items-center gap-2"
                    >
                      <span>Let's talk about what's possible for your company</span>
                      <ArrowRight className="w-5 h-5" />
                    </a>
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
