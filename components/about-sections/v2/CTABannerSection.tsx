"use client";

import React from "react";
import CTABanner from "@/components/common/CTABanner";
import logo from "@/assets/img/v2/growthx_logo.png";

export default function CTABannerSection() {
  return (
    <section>
      <div className="container mx-auto px-4 -mb-40">
        <CTABanner
          logoSrc={logo}
          title="Get started with AI-Led Growth"
          primaryButton={{ label: "Book a Call", href: "/book-demo", className: "shrink-0" }}
          // secondaryButton={{ label: "See open positions", href: "/book-demo", className: "shrink-0" }}
          description="Whether you're a budding startup or an established enterprise, discover how our AI can streamline your content creation and fuel your growth."
        />
      </div>
    </section>
  );
}
