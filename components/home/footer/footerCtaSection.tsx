"use client";

import { Grid } from "@/components/home/grid/gridRoot";
import { LinkButton } from "@/components/home/custom/link-button";
import { NewsletterInput } from "./newsletterInput";

export function FooterCtaSection() {
  return (
    <section className="w-full bg-secondary mt-[120px]">
      <div className="py-20 lg:py-24">
        <Grid>
          {/* Mobile: Stack all content */}
          {/* Desktop: X Logo (cols 1-2), Newsletter (cols 3-6), Socials (cols 7-12) */}

          {/* X Logo */}
          <div className="col-span-full lg:col-span-2 flex items-start">
            <svg
              width="24"
              height="20"
              viewBox="0 0 24 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-auto"
            >
              <path d="M23.7215 3.00146H19.5092C17.3297 3.00146 15.3113 4.16176 14.1949 6.05726L12.8671 8.31236L7.56141 3.00291H0L8.39581 11.4031C8.93386 11.9476 9.89629 12.6595 10.371 12.9245C10.3969 12.939 10.3869 12.9783 10.3567 12.9783H3.21388V19.17H4.21229C6.3918 19.17 8.4102 18.0097 9.52657 16.1142L10.853 13.8606L16.1601 19.17H23.7215L14.9603 10.4044C14.4596 9.89776 13.9331 9.47994 13.408 9.247C13.3792 9.2339 13.3878 9.19168 13.4195 9.19168H23.7229V3L23.7215 3.00146Z" fill="#080A0D"/>
            </svg>
          </div>

          {/* Newsletter */}
          <div className="col-span-full lg:col-span-4 lg:col-start-3 mt-12 lg:mt-0">
            <h3 className="text-[20px] font-medium leading-tight tracking-[-0.03em] text-foreground mb-6">
              Subscribe to the GrowthX Newsletter
            </h3>
            <NewsletterInput />
          </div>

          {/* Social Links */}
          <div className="col-span-full lg:col-span-6 lg:col-start-7 mt-12 lg:mt-0 flex flex-col lg:items-end lg:justify-end">
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-auto lg:mr-0">Follow us</span>
              <LinkButton
                href="https://www.linkedin.com/company/growthx-ai"
                variant="tertiary"
                className="flex-shrink-0"
              >
                LinkedIn
              </LinkButton>
              <LinkButton
                href="https://twitter.com/growthxai"
                variant="tertiary"
                className="flex-shrink-0"
              >
                Twitter
              </LinkButton>
            </div>
          </div>
        </Grid>
      </div>
    </section>
  );
}
