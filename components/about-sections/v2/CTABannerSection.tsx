"use client";

import React from "react";
import CTABanner from "@/components/common/CTABanner";

export default function CTABannerSection() {
  return (
    <section className="w-full">
      <div className="w-full -mb-40">
        <CTABanner
          title={
            <>
              Get started with<br />
              AI-Led Growth
            </>
          }
          primaryButton={{ label: "Book a demo", href: "/book-demo", className: "shrink-0" }}
          // secondaryButton={{ label: "See open positions", href: "/book-demo", className: "shrink-0" }}
          description="Whether you're a budding startup or an established enterprise, discover how our AI can streamline your content creation and fuel your growth."
        />
      </div>
    </section>
  );
}
