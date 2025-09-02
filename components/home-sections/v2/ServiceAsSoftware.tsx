"use client";

import Spacer from "@/components/common/Spacer";
import ContentLayout from "@/components/layout/ContentLayout";
import React from "react";

function ServiceAsSoftware() {
  const comparisonData = [
    {
      title: "GrowthX",
      description: "AI-powered outcomes delivered through expert-guided workflows.",
      type: "highlight",
      characteristics: [
        "Fully managed outcomes",
        "AI + Expert guidance",
        "Custom-built workflows",
        "Adapts to your needs",
        "Strategy handled for you",
        "Immediate value delivery",
        "Infinitely scalable",
      ],
    },
    {
      title: "Software & Tools",
      description: "Tools and platforms that require your team to implement and manage.",
      type: "regular",
      characteristics: [
        "Self-service tools and dashboards",
        "Requires internal expertise",
        "Your team handles implementation",
        "Fixed features and workflows",
        "You manage the strategy",
        "Learning curve for your team",
        "Scalable but requires effort",
        "Quickly outdated by AI advances",
      ],
    },
    {
      title: "Traditional Agency",
      description: "Manual services delivered by teams of specialists with varying results.",
      type: "regular",
      characteristics: [
        "Human-delivered services",
        "Inconsistent quality",
        "Manual workflows",
        "Limited by human capacity",
        "High overhead costs",
        "Communication overhead",
        "Difficult to scale",
      ],
    },
  ];

  return (
    <section>
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={
            <div className="text-lg font-medium mb-4 md:mb-0">
              Advantage
            </div>
          }
          rightContent={
            <div className="flex flex-col gap-8">
              <h2 className="max-w-2xl text-3xl md:text-5xl font-semibold leading-[0.96]">
                AI Service-as-Software Beyond SaaS or agencies
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {comparisonData.map((category, index) => (
                  <div
                    key={index}
                    className={`
                      p-8 min-h-[600px] border border-[#DCD9D5]
                      ${category.type === "highlight" ? "bg-[#FFCC00]" : "bg-transparent"}
                      ${category.type === "highlight" ? "border-none" : ""}
                    `}
                  >
                    <h4 className="text-4xl font-semibold mb-6 text-primary-black">
                      {category.title}
                    </h4>
                    <p className="text-2xl text-[#303030] mb-8">
                      {category.description}
                    </p>
                    <ul className="space-y-4">
                      {category.characteristics.map((char, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="shrink-0 mt-1">
                            {category.type === "highlight" ? "→" : "✕"}
                          </span>
                          <span className="text-xl leading-[1.44] text-[#303030]">
                            {char}
                          </span>
                        </li>
                      ))}
                    </ul>
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

export default ServiceAsSoftware;