"use client";

import ContentLayout from "@/components/layout/ContentLayout";
import Image from "next/image";
import GrowthxLogo from "@/assets/img/v2/growthx_logo.png";

export default function DifferenceSection() {
  const comparisonData = [
    {
      title: "GrowthX",
      description: "AI-powered outcomes delivered through expert-guided workflows.",
      type: "highlight",
      logo: GrowthxLogo,
      characteristics: [
        "→ Fully managed outcomes",
        "→ AI + Expert guidance",
        "→ Custom-built workflows",
        "→ Adapts to your needs",
        "→ Strategy handled for you",
        "→ Immediate value delivery",
        "→ Infinitely scalable",
      ],
    },
    {
      title: "Software & Tools",
      description: "Tools and platforms that require your team to implement and manage.",
      type: "regular",
      characteristics: [
        "✕ Self-service tools and dashboards",
        "✕ Requires internal expertise",
        "✕ Your team handles implementation",
        "✕ Fixed features and workflows",
        "✕ You manage the strategy",
        "✕ Learning curve for your team",
        "✕ Scalable but requires effort",
        "✕ Quickly outdated by AI advances",
      ],
    },
    {
      title: "Traditional Agency",
      description: "Manual services delivered by teams of specialists with varying results.",
      type: "regular",
      characteristics: [
        "✕ Human-delivered services",
        "✕ Inconsistent quality",
        "✕ Manual workflows",
        "✕ Limited by human capacity",
        "✕ High overhead costs",
        "✕ Communication overhead",
        "✕ Difficult to scale",
      ],
    },
  ];

  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>Our Approach</div>}
          rightContent={
            <div className="flex flex-col gap-8 xl:gap-14">
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter">
                <span className="text-primary-black">What We Built vs.</span>
                <br />
                <span className="text-primary-gray">What Everyone Else Builds</span>
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {comparisonData.map((category, index) => (
                  <div
                    key={index}
                    className={`
                      p-6 md:p-8 md:min-h-[600px] border border-[#DCD9D5]
                      ${category.type === "highlight" ? "bg-[#FFCC00]" : "bg-transparent"}
                      ${category.type === "highlight" ? "border-none" : ""}
                    `}
                  >
                    {category.logo ? (
                      <div className="mb-6">
                        <Image
                          src={category.logo}
                          alt={category.title}
                          className="h-6 md:h-8 w-auto"
                          sizes="(max-width: 768px) 160px, 200px"
                        />
                      </div>
                    ) : (
                      <h4 className="text-2xl lg:text-4xl tracking-tighter font-semibold mb-6 text-primary-black">
                        {category.title}
                      </h4>
                    )}
                    <p className="text-lg lg:text-2xl max-lg:leading-6 tracking-tighter font-light text-[#303030] mb-8">
                      {category.description}
                    </p>
                    <ul className="space-y-4">
                      {category.characteristics.map((char, idx) => (
                        <li key={idx} className="flex items-start font-light gap-3 tracking-tighter">
                          <span className="text-lg lg:text-xl leading-[1.44] text-[#303030]">
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
      </div>
    </section>
  );
}
