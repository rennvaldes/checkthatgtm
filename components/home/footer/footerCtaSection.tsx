"use client";

import Link from "next/link";
import { Grid } from "@/components/home/grid/gridRoot";
import { NewsletterInput } from "./newsletterInput";

export function FooterCtaSection() {
  return (
    <section className="w-full bg-secondary mt-[120px]">
      <div className="py-20 lg:py-24">
        <Grid>
          {/* Mobile: Stack all content */}
          {/* Desktop: X Logo (col 1), Newsletter (cols 3-6), Socials (cols 7-12) */}

          {/* X Logo */}
          <div className="col-span-full lg:col-span-1 flex items-start">
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
            <h3 className="text-[20px] lg:text-2xl font-[520] leading-[1.5] lg:leading-[1.25] tracking-[-0.06em] text-foreground mb-6">
              Subscribe to our Newsletter
            </h3>
            <div className="max-w-[21rem]">
              <NewsletterInput />
            </div>
          </div>

          {/* Links Section */}
          <div className="col-span-full lg:col-span-6 lg:col-start-7 mt-12 lg:mt-0 flex flex-col lg:flex-row gap-8 lg:gap-12 lg:justify-end">
            {/* Company Links */}
            <div className="flex flex-col gap-2 flex-1">
              <span className="text-sm text-muted-foreground mb-2 font-light">Company</span>
              <Link
                href="/about"
                className="text-sm text-foreground hover:text-muted-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/careers"
                className="text-sm text-foreground hover:text-muted-foreground transition-colors"
              >
                Careers
              </Link>
              <Link
                href="/blog"
                className="text-sm text-foreground hover:text-muted-foreground transition-colors"
              >
                News
              </Link>
            </div>

            {/* Legal Links */}
            <div className="flex flex-col gap-2 flex-1">
              <span className="text-sm text-muted-foreground mb-2 font-light">Legal</span>
              <Link
                href="/legal/privacy-policy"
                className="text-sm text-foreground hover:text-muted-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/legal/terms-of-service"
                className="text-sm text-foreground hover:text-muted-foreground transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/legal/cookie-policy"
                className="text-sm text-foreground hover:text-muted-foreground transition-colors"
              >
                Cookie Policy
              </Link>
              <Link
                href="/legal/data-processing-addendum"
                className="text-sm text-foreground hover:text-muted-foreground transition-colors"
              >
                Data Processing Addendum
              </Link>
              <Link
                href="/legal/subprocessors"
                className="text-sm text-foreground hover:text-muted-foreground transition-colors"
              >
                Subprocessors
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-2 flex-1">
              <span className="text-sm text-muted-foreground mb-2 font-light">Follow us</span>
              <Link
                href="https://www.linkedin.com/company/growthx-ai"
                className="text-sm text-foreground hover:text-muted-foreground transition-colors inline-flex items-center gap-1"
              >
                LinkedIn
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
                  <path d="M4.5 2L7.5 6L4.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                href="https://twitter.com/growthxai"
                className="text-sm text-foreground hover:text-muted-foreground transition-colors inline-flex items-center gap-1"
              >
                Twitter
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
                  <path d="M4.5 2L7.5 6L4.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
          
        </Grid>
      </div>
    </section>
  );
}
