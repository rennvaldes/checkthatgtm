"use client";

import Link from "next/link";
import { GridRoot } from "@/components/home/grid/gridRoot";
import { NewsletterInput } from "./newsletterInput";

export function FooterCtaSection() {
  return (
    <section className="w-full bg-[#F9F9F9] mt-[120px] relative z-20">
      <div className="py-20 desktop:py-24">
        <GridRoot size="normal">
          <div className="desktop:grid desktop:grid-cols-[5fr_16fr_5fr] desktop:gap-0">
            {/* CheckThat Icon */}
            <div className="flex items-start mb-12 desktop:mb-0 -mt-[6px]">
              <svg width="44" height="60" viewBox="0 0 32 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.1533 41.7529C14.0295 41.7149 15.7255 41.1097 17.3098 40.1228C17.8415 39.7909 18.3602 39.1781 19.0351 39.3148C20.0171 39.5144 20.2526 40.6239 19.531 41.2963C18.5077 42.2507 16.5806 43.1498 15.2361 43.5326C6.83295 45.9284 -1.25553 38.7584 0.162723 30.1264C1.49308 22.0281 10.4659 17.5347 17.6722 21.4142C18.2039 21.7005 19.2684 22.3252 19.6547 22.7493C20.5434 23.7232 19.4496 25.1407 18.282 24.5117C17.4411 24.0594 16.7824 23.4423 15.8308 23.0259C10.4963 20.6875 4.19394 23.7503 2.58796 29.3586C0.793176 35.6251 5.62304 41.8841 12.1522 41.754L12.1533 41.7529Z" fill="#0ABF53" />
                <path d="M13.8092 33.2359C12.7414 34.635 10.595 34.4484 9.95699 32.7598C9.06177 30.3911 12.3367 28.6558 13.7734 30.7447L21.1185 25.5822C22.2796 24.9976 22.7343 25.8544 23.1694 26.7708C24.7092 30.0158 24.6918 34.2044 23.0457 37.4201C22.6214 38.2498 22.1385 38.894 21.1446 38.381L13.8102 33.2348L13.8092 33.2359Z" fill="#0ABF53" />
                <path d="M14.7261 36.3225C15.7266 36.4222 16.089 37.7302 15.2415 38.3885C14.0544 39.3093 11.3004 39.3115 9.9136 38.8918C2.9135 36.7736 3.18261 26.8185 10.2717 24.9986C11.5901 24.6602 14.1868 24.7448 15.2914 25.5984C16.0391 26.1764 15.8318 27.3228 14.9453 27.5994C14.4092 27.7675 13.5466 27.2523 12.953 27.133C10.4421 26.6287 7.91481 28.2176 7.22576 30.6947C6.23071 34.2726 9.47521 37.6749 13.0973 36.8127C13.5368 36.7086 14.3431 36.2856 14.7261 36.3235V36.3225Z" fill="#0ABF53" />
              </svg>
            </div>

            {/* Content: Newsletter + Social Links */}
            <div className="desktop:flex desktop:justify-between desktop:gap-12">
              {/* Newsletter */}
              <div>
                <h3 className="text-[20px] desktop:text-2xl font-bold leading-normal desktop:leading-tight tracking-[-0.06em] text-foreground mb-6">
                  Subscribe to the CheckThat Newsletter
                </h3>
                <div className="max-w-84">
                  <NewsletterInput />
                </div>
              </div>

              {/* Social Links Only */}
              <div className="mt-12 desktop:mt-0 flex flex-col gap-2">
                <span className="text-sm text-muted-foreground mb-2 font-light">Follow us</span>
                <Link
                  href="https://www.linkedin.com/company/growthx-ai"
                  className="bg-[#080a0d] text-white px-4 py-1 rounded-full text-[14px] font-bold inline-flex items-center gap-2 h-9 w-fit"
                >
                  LinkedIn
                  <span>→</span>
                </Link>
                <Link
                  href="https://twitter.com/growthxai"
                  className="bg-[#080a0d] text-white px-4 py-1 rounded-full text-[14px] font-bold inline-flex items-center gap-2 h-9 w-fit mt-3"
                >
                  Twitter
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </GridRoot>
      </div>
    </section>
  );
}
