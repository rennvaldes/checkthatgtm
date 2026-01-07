"use client";

import React from "react";

import Menu from "@/components/icons/Menu";
import Logo from "@/components/icons/Logo";
import Close from "@/components/icons/Close";
import KitButton from "@/components/ui/KitButton";
import useHideOnScroll from "@/lib/litebox-lib/hooks/useHideOnScroll";
import { trackDemoBookingClick } from "@/lib/utils/posthog-tracking";

import { usePathname } from "next/navigation";
import { cx } from "@/lib/classnames";
import Button from "@/components/common/Button";

function Mobile() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { isVisible } = useHideOnScroll();
  const pathname = usePathname();

  return (
    <>
      <nav
        aria-hidden={!isVisible}
        className="bg-[#F1EEE9] fixed z-100 flex w-screen items-center justify-between bg-opacity-[80%] py-[16px] pl-[20px] pr-[16px] font-medium backdrop-blur-[20px] transition-transform duration-300 aria-hidden:-translate-y-full lg:px-[52px] lg:py-[16px]"
      >
        <Logo className="text-primary-black" />

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex h-[32px] w-[32px] items-center justify-center"
        >
          <Menu className="text-primary-black" />
        </button>
      </nav>

      <div
        aria-hidden={!isOpen}
        className="bg-[#F1EEE9] aria-hidden: group fixed left-0 top-0 z-100 flex h-screen w-screen flex-col overflow-hidden transition-all duration-500 aria-hidden:translate-x-full aria-hidden:opacity-50"
      >
        <div className="flex items-center justify-end py-[16px] pr-[16px] transition-transform duration-1000 group-aria-hidden:translate-x-[15%]">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="flex h-[32px] w-[32px] items-center justify-center"
          >
            <Close className="text-primary-black" />
          </button>
        </div>

        <div className="flex flex-1 flex-col justify-between items-center px-[20px] pb-[40px] pt-[40px] transition-transform duration-1000 group-aria-hidden:translate-x-[15%]">
          <ul className="flex flex-col items-center gap-[24px]">
            <li 
              onClick={() => setIsOpen(false)}
              onKeyDown={(e) => e.key === 'Enter' && setIsOpen(false)}
            >
              <KitButton
                className={cx(
                  "text-[28px] leading-[31px] focus:text-ui-blue",
                  pathname === "/about" ? "text-foreground/40" : "text-foreground/40"
                )}
                href="/about"
                variant="ghost"
                size="custom"
                sameBrowserTab={true}
              >
                Company
              </KitButton>
            </li>
            <li 
              onClick={() => setIsOpen(false)}
              onKeyDown={(e) => e.key === 'Enter' && setIsOpen(false)}
            >
              <KitButton
                className={cx(
                  "text-[28px] leading-[31px] focus:text-ui-blue",
                  pathname === "/careers" ? "text-foreground/40" : "text-foreground/40"
                )}
                href="/careers"
                variant="ghost"
                size="custom"
                sameBrowserTab={true}
              >
                Careers
              </KitButton>
            </li>
            <li 
              onClick={() => setIsOpen(false)}
              onKeyDown={(e) => e.key === 'Enter' && setIsOpen(false)}
            >
              <KitButton
                href="/blog"
                sameBrowserTab
                variant="ghost"
                size="custom"
                className={cx(
                  "text-[28px] leading-[31px] focus:text-ui-blue",
                  (pathname === "/blog" || pathname?.startsWith("/blog/")) 
                    ? "text-foreground font-medium" 
                    : "text-foreground/40"
                )}
              >
                News
              </KitButton>
            </li>
          </ul>

          <Button
            href='/book-demo'
            variant='secondary'
            fullWidth
            size='md'
            onClick={() => trackDemoBookingClick('navbar', 'mobile')}
            className="w-full rounded-full"
          >
            <span className="flex items-center justify-center gap-2">
              Book a demo
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Mobile;
