"use client";

import React from "react";
import ContentLayout from "@/components/layout/ContentLayout";
import Spacer from "@/components/common/Spacer";
import Image from "next/image";
import TestimonialsCarousel from "@/components/common/TestimonialsCarousel";
import AlignedLeft from "@/components/common/AlignedLeft";

function ResultsSection() {
  const results = [
    {
      logo: { src: 'https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_airbyte_40413c6ff7.svg', alt: 'Airbyte' },
      title: "24x",
      description: "Organic growth in one year. Published 4,000+ pages and delivered 6.5M organic visits.",
    },
    {
      logo: { src: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/Ramp_idx_W_Yq9_Eu_0_1e7f07ca5f.svg', alt: 'Ramp' },
      title: "10M+",
      description: "Monthly active users. Scaled content operations to support rapid user growth.",
    },
    {
      logo: { src: 'https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_strapi_1339eb5432.svg', alt: 'Strapi' },
      title: "95%",
      description: "Increase in qualified leads. Content-driven demand generation at scale.",
    },
    {
      logo: { src: 'https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_webflow_b7ad975616.svg', alt: 'Webflow' },
      title: "3.5x",
      description: "Faster content production with AI-powered workflows and expert oversight.",
    },
    {
      logo: { src: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/reddit_logo_b80d54a7ab.svg', alt: 'Reddit' },
      title: "8.9/10",
      description: "Average content quality score based on audience engagement and conversion metrics.",
    },
    {
      logo: { src: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/webstacks_5f9bb33e5c.svg', alt: 'Webstacks' },
      title: "42%",
      description: "Reduction in customer acquisition costs through optimized content distribution.",
    },
    {
      logo: { src: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/Deepgram_logo_ca172c4fe3.svg', alt: 'Deepgram' },
      title: "15K+",
      description: "High-intent leads generated monthly through strategic content initiatives.",
    },
    {
      logo: { src: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/service_titan_fbd8ccb6f1.svg', alt: 'Service Titan' },
      title: "#1",
      description: "Search ranking position for 85% of our targeted high-value keywords.",
    },
    {
      logo: { src: 'https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_airbyte_40413c6ff7.svg', alt: 'Airbyte' },
      title: "24x",
      description: "Organic growth in one year. Published 4,000+ pages and delivered 6.5M organic visits.",
    },
    {
      logo: { src: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/Ramp_idx_W_Yq9_Eu_0_1e7f07ca5f.svg', alt: 'Ramp' },
      title: "10M+",
      description: "Monthly active users. Scaled content operations to support rapid user growth.",
    },
    {
      logo: { src: 'https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_strapi_1339eb5432.svg', alt: 'Strapi' },
      title: "95%",
      description: "Increase in qualified leads. Content-driven demand generation at scale.",
    },
    {
      logo: { src: 'https://glowing-rainbow-627a62133d.media.strapiapp.com/logo_webflow_b7ad975616.svg', alt: 'Webflow' },
      title: "3.5x",
      description: "Faster content production with AI-powered workflows and expert oversight.",
    },
    {
      logo: { src: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/reddit_logo_b80d54a7ab.svg', alt: 'Reddit' },
      title: "8.9/10",
      description: "Average content quality score based on audience engagement and conversion metrics.",
    },
    {
      logo: { src: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/webstacks_5f9bb33e5c.svg', alt: 'Webstacks' },
      title: "42%",
      description: "Reduction in customer acquisition costs through optimized content distribution.",
    },
    {
      logo: { src: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/Deepgram_logo_ca172c4fe3.svg', alt: 'Deepgram' },
      title: "15K+",
      description: "High-intent leads generated monthly through strategic content initiatives.",
    },
    {
      logo: { src: 'https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/service_titan_fbd8ccb6f1.svg', alt: 'Service Titan' },
      title: "#1",
      description: "Search ranking position for 85% of our targeted high-value keywords.",
    }
  ];

  return (
    <section className="overflow-hidden">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={
            <div className="text-lg font-medium mb-4 md:mb-0">Impact</div>
          }
          rightContent={
            <div className="flex flex-col gap-8">
              <h2 className="text-3xl lg:text-5xl tracking-tighter">
                High performance strategy & production <br />
                <span className="text-primary-gray">
                  Our results speak for themselves
                </span>
              </h2>
            </div>
          }
        />
        <Spacer size="large" />
      </div>

      <AlignedLeft
        className="px-4"
        options={{ containerMax: 1440, gutter: 16, cols: 12, leftCols: 2, offset: -290, minApplyWidth: 768 }}
      >
        <TestimonialsCarousel
          disableInnerPadding
          items={results}
          renderSlide={(result) => (
            <div 
              className="p-6 md:p-8 border border-[#DCD9D5] h-[340px] md:h-[540px] flex flex-col gap-8 md:gap-40 lg:min-w-[520px] lg:max-w-[521px]"
            >
              <div className="mb-6">
                <div className="relative h-[24px] md:h-[28px] w-full max-w-[160px]">
                  <Image
                    src={result.logo.src}
                    alt={result.logo.alt}
                    fill
                    sizes="160px"
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center tracking-tighter">
                <h3 className="w-full text-8xl font-semibold tracking-tighter leading-[0.95] text-[#151515]">
                  {result.title}
                </h3>
                <p className="w-full text-[20px] tracking-tight text-[#303030] mt-8 text-left">
                  {result.description}
                </p>
              </div>
            </div>
          )}
        />
      </AlignedLeft>
    </section>
  );
}

export default ResultsSection;
