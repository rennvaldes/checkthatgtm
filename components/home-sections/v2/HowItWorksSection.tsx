"use client";

import Spacer from "@/components/common/Spacer";
import ContentLayout from "@/components/layout/ContentLayout";
import React from "react";

function ProcessSection() {
  const processSteps = [
    {
      number: "01",
      title: "Content strategy & research",
      description:
        "We begin by immersing ourselves in your company, industry, business objectives, and audience. This deep research lays the foundation for everything we do, ensuring every decision and strategy is data-driven and with the right context. The right foundation sets the stage for the right content strategy, distribution, and conversion down the line.",
    },
    {
      number: "02",
      title: "AI workflow adaptation & Content OS setup",
      description:
        "Next, we deploy AI-powered workflows tailored to your needs. We establish a content engine designed to produce high-quality, resonant content at scale. Our experts guide the adaptation of workflows to your brand’s voice and objectives, making sure we balance speed with precision and leverage automation to drive efficiency.",
    },
    {
      number: "03",
      title: "Content calibration",
      description:
        "Once the engine is running, we calibrate every piece of content, ensuring it aligns with your strategy. Then, we publish and optimize it for maximum reach. We focus on rapid iteration—analyzing results in real-time and making quick adjustments to capture opportunities and build early wins.",
    },
    {
      number: "04",
      title: "Publish",
      description:
        "With content in place, we expand our efforts to include developing lead magnets, building social distribution channels, and growing newsletters to amplify reach and engagement. We convert audience attention into leads and opportunities by crafting targeted calls to action and optimizing content for conversion. Our approach ensures that we’re not just creating content, but also turning it into tangible growth by systematically capturing and nurturing audience interest.",
    },
    {
      number: "05",
      title: "Scale, Refine, Test, Iterate, Optimize",
      description:
        "Growth is a continuous process. We constantly adapt by doubling down on what’s working, refreshing content non-stop, and deploying new tactics quickly. By using data-driven insights, we ensure that every cycle of content creation and distribution builds on the last, driving sustained growth at scale.",
    },
  ];

  return (
    <section>
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={
            <div className="text-lg font-medium mb-4 md:mb-0">
              Process
            </div>
          }
          rightContent={
            <div className="flex flex-col gap-8">
              <h2 className="max-w-2xl text-3xl md:text-5xl">
                How we work <br />
                <span className="text-primary-gray">
                  From strategy to output
                </span>
              </h2>

              <div className="flex flex-col gap-4">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-12 p-6 md:p-8 border border-[#DCD9D5]"
                  >
                    <div className="min-w-[60px] text-primary-gray font-light tracking-tight text-3xl flex flex-col md:col-span-4">
                      {step.number}

                      <h4 className="text-primary-black text-3xl font-semibold mb-3 leading-[1]">
                        {step.title}
                      </h4>
                    </div>
                    <div className="md:col-span-8">
                      <p className="text-2xl leading-[1.36] font-light text-[#303030]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }
        />
        <Spacer size="xl" />
      </div>
    </section>
  );
}

export default ProcessSection;
