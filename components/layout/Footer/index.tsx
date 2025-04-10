"use client";

import Logo from "@/components/icons/Logo";
import KitButton from "@/components/ui/KitButton";
import LinksColumn from "./LinksColumn";
import React from "react";
import { motion } from "framer-motion";

const RIGHTS_TEXT = `©${new Date().getFullYear()} GrowthX. All rights reserved.`;

const DOCS_URL = "https://growthxlabs.com/docs";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="footer"
      className="font-elza bg-ui-veige pb-[64px] pt-[52px] lg:pb-[64px] lg:pt-[64px] relative z-[1]"
      onClick={() => {}}
    >
      <div className="mx-auto w-[320px] overflow-hidden lg:w-full lg:max-w-[1280px]">
        <div className="flex flex-col justify-between lg:flex-row">
          <div>
            <h3 className="font-clash-display w-[300px] text-[44px] font-medium leading-[48px] lg:w-[730px] lg:text-[70px] lg:leading-[77px]">
              <span className="max-w-[300px] lg:max-w-[730px] block">
                Get Started with{" "}
                <span className="whitespace-nowrap">AI‑Led</span>{" "}
                <span className="font-kepler-std text-ui-blue text-[52px] italic lg:text-[80px]">
                  Growth
                </span>
              </span>
            </h3>
            <div className="flex">
              <KitButton
                scrollTo="book-section"
                variant="primary"
                withAnimatedArrow="to-right"
                size="large"
                className="mt-[24px] lg:mt-[32px]"
              >
                Book a call
              </KitButton>
            </div>
          </div>
          <div className="flex gap-[40px] pt-[64px] lg:pt-[28px]">
            <LinksColumn
              title="GrowthX"
              links={[
                { to: "/", scrollTo: "results-section", text: "Our results" },
                {
                  to: "/",
                  scrollTo: "how-it-works-section",
                  text: "How it works",
                },
                { to: "/", scrollTo: "reviews-section", text: "Reviews" },
                { to: "/pricing", text: "Pricing", sameBrowserTab: true },
                { to: "/tools", text: "Tools", sameBrowserTab: true },
                { to: "/resources", text: "Resources", sameBrowserTab: true },
                { to: "/blog", text: "Blog", sameBrowserTab: true },
                { to: "/careers", text: "Careers", sameBrowserTab: true },
                // { to: DOCS_URL, text: 'Docs', isExternal: true },
              ]}
            />
            <LinksColumn
              title="Social"
              links={[
                {
                  text: "LinkedIn",
                  to: "https://www.linkedin.com/company/growthx-ai",
                  isExternal: true,
                },
                // { text: 'Twitter', to: 'https://twitter.com', isExternal: true },
              ]}
            />
          </div>
        </div>

        <div className="mt-[80px] flex flex-col justify-between lg:mt-[160px] lg:flex-row lg:items-center">
          <Logo className="h-[24px] w-[136px]" />
          <div className="mt-[32px] flex gap-[20px] leading-[20px] lg:mt-0 lg:gap-[40px]">
            {/* <KitButton size='custom' variant='ghost' className='hover:underline' href='/privacy-policy'>
              Privacy Policy
            </KitButton>
            <KitButton size='custom' variant='ghost' className='hover:underline' href='/terms-of-service'>
              Terms of Service
            </KitButton> */}
            <p className="hidden lg:block">{RIGHTS_TEXT}</p>
          </div>
          <p className="mt-[20px] lg:hidden">{RIGHTS_TEXT}</p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
