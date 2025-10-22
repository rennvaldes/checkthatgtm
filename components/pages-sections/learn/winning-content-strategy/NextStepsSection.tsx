"use client";

import ContentLayout from "@/components/layout/ContentLayout";
import ArrowRight from "@/components/icons/ArrowRight";

export default function NextStepsSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>Action</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter mb-12">
                <span className="text-primary-black">Your Next</span>
                <br />
                <span className="text-primary-gray">Steps</span>
              </h2>

              <div className="prose prose-lg lg:prose-xl max-w-none">
                <h3 className="text-2xl lg:text-3xl font-semibold tracking-tighter mb-6">
                  If you want to build this yourself:
                </h3>

                <ol className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-12 space-y-3 list-none">
                  <li>Start with the three-angle framework</li>
                  <li>Spend weeks (not hours) on audience research</li>
                  <li>Map every mind share competitor thoroughly</li>
                  <li>Organize into clusters before writing anything</li>
                  <li>Commit to consistent execution and learning</li>
                </ol>

                <h3 className="text-2xl lg:text-3xl font-semibold tracking-tighter mb-6">
                  If you want us to build it for you:
                </h3>

                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
                  We&apos;ve systematized this entire process. What takes most companies 6+ months, we do in 4-8 weeks. Then we execute it at scale with AI workflows and expert oversight.
                </p>

                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight font-semibold mb-12">
                  The choice is yours. The framework works either way.
                </p>

                <div className="mt-16 pt-12 border-t border-[#D9D6D2]">
                  <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-6">
                    Want to see how this framework applies to your specific business?
                  </p>
                  <a
                    href="/book-demo"
                    className="text-[#818EFF] text-lg lg:text-2xl font-medium tracking-tight hover:underline inline-flex items-center gap-2"
                  >
                    <span>Book a strategy session and we&apos;ll walk through your three angles together</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
