"use client";

import React from "react";
import ContentLayout from "@/components/layout/ContentLayout";

export default function CaseStudiesHero() {
  return (
    <section className="w-full max-md:px-4 max-md:pt-10">
      <div className="container mx-auto w-full">
        <ContentLayout
          leftContent={<span>Case Studies</span>}
          rightContent={
            <div>
              <h1 className="text-primary-black tracking-tighter text-4xl lg:text-[96px] leading-[0.95] font-semibold ">
                From strategy to scale
                <br />
                <span className="text-primary-gray font-light">See the results</span>
              </h1>
              <p className="mt-6 text-primary-gray text-lg lg:text-2xl tracking-tight max-w-3xl">
                Explore how top companies achieved outsized growth through GrowthX.
              </p>
            </div>
          }
        />
      </div>
    </section>
  );
}
