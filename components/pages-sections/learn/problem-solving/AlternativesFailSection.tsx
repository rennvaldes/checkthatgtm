"use client";

import ContentLayout from "@/components/layout/ContentLayout";

export default function AlternativesFailSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>Alternatives</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter">
                <span className="text-primary-black">Why Every</span>
                <br />
                <span className="text-primary-gray">Alternative Fails</span>
              </h2>

              <div className="mt-12">
                <div className="prose prose-lg lg:prose-xl max-w-none">
                  <div className="my-12">
                    <h3 className="text-2xl lg:text-3xl font-semibold tracking-tighter mb-6">
                      "We'll Just Use Freelancers"
                    </h3>
                    <p className="text-xl lg:text-2xl leading-relaxed tracking-tight">
                      Good luck coordinating with 10 different people who don't understand your business. Finding them. Vetting them. Watching your institutional knowledge walk away every time someone moves on.
                    </p>
                  </div>

                  <div className="my-12">
                    <h3 className="text-2xl lg:text-3xl font-semibold tracking-tighter mb-6">
                      "There's a Tool for That"
                    </h3>
                    <p className="text-xl lg:text-2xl leading-relaxed tracking-tight">
                      Tools give you insights. They don't write your content. They don't manage your strategy. They don't interview your customers. <strong>You're still the bottleneck.</strong>
                    </p>
                  </div>

                  <div className="my-12">
                    <h3 className="text-2xl lg:text-3xl font-semibold tracking-tighter mb-6">
                      "Let's Hire an Agency"
                    </h3>
                    <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-4">
                      Agencies exist on a spectrum from "cheap and terrible" to "expensive and slow."
                    </p>
                    <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-4">
                      Want quality? I've seen HP pay $200,000 for a single PDF report. $3 per word for content that wasn't even good. Enterprises routinely pay $2-3 per word for mediocre results.
                    </p>
                    <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-4">
                      Want speed? Most agencies take 3+ weeks just to publish a single piece.
                    </p>
                    <p className="text-xl lg:text-2xl leading-relaxed tracking-tight font-semibold">
                      The math doesn't work. It never has.
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
