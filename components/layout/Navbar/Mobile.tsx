"use client";

import React from "react";

import Menu from "@/components/icons/Menu";
import Logo from "@/components/icons/Logo";
import Close from "@/components/icons/Close";
import KitButton from "@/components/ui/KitButton";
import DotPatternBackground from "@/components/ui/DotPatternBackground";
import useHideOnScroll from "@/lib/litebox-lib/hooks/useHideOnScroll";

import { usePathname, useRouter } from "next/navigation";
import Button from "@/components/common/Button";

const OPTION_STYLES = "focus:text-ui-blue text-[28px] leading-[31px]";

function Mobile() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { isVisible } = useHideOnScroll();
  const router = useRouter();
  const pathname = usePathname();

  const scrollTo = React.useCallback(
    (sectionId: string) => {
      if (pathname !== "/") router.push("/");
      setTimeout(
        () => {
          document.getElementById(sectionId)?.scrollIntoView({
            behavior: "smooth",
          });
          setIsOpen(false);
        },
        pathname !== "/" ? 500 : 0
      );
    },
    [pathname, router]
  );

  return (
    <>
      <nav
        aria-hidden={!isVisible}
        className="bg-[#F1EEE9] fixed z-[100] flex w-screen items-center justify-between bg-opacity-[80%] py-[16px] pl-[20px] pr-[16px] font-medium backdrop-blur-[20px] transition-transform duration-300 aria-hidden:-translate-y-full lg:px-[52px] lg:py-[16px]"
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
        className="bg-[#F1EEE9] aria-hidden: group fixed left-0 top-0 z-[100] flex h-screen w-screen flex-col overflow-hidden transition-all duration-500 aria-hidden:translate-x-[100%] aria-hidden:opacity-50"
      >
        <div className="flex items-center justify-between py-[16px] pl-[20px] pr-[16px] transition-transform duration-1000 group-aria-hidden:translate-x-[15%]">
          <Logo className="text-primary-black" />
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="flex h-[32px] w-[32px] items-center justify-center"
          >
            <Close className="text-primary-black" />
          </button>
        </div>

        <div className="flex flex-1 flex-col justify-between px-[20px] pb-[140px] pt-[20px] transition-transform duration-1000 group-aria-hidden:translate-x-[15%]">
          <ul className="flex flex-col gap-[24px]">
            <li 
              onClick={() => setIsOpen(false)}
              onKeyDown={(e) => e.key === 'Enter' && setIsOpen(false)}
            >
              <KitButton
                className={`${OPTION_STYLES} !text-left`}
                href="/"
                variant="ghost"
                size="custom"
                sameBrowserTab={true}
              >
                Solutions
              </KitButton>
            </li>
            <li>
              <button
                type="button"
                onClick={() => scrollTo("results-section")}
                onKeyDown={(e) => e.key === 'Enter' && scrollTo("results-section")}
                className={OPTION_STYLES}
              >
                Customers
              </button>
            </li>
            <li 
              onClick={() => setIsOpen(false)}
              onKeyDown={(e) => e.key === 'Enter' && setIsOpen(false)}
            >
              <KitButton
                className={`${OPTION_STYLES} !text-left`}
                href="/pricing"
                variant="ghost"
                size="custom"
                sameBrowserTab={true}
              >
                Pricing
              </KitButton>
            </li>
            <li 
              onClick={() => setIsOpen(false)}
              onKeyDown={(e) => e.key === 'Enter' && setIsOpen(false)}
            >
              <KitButton
                className={`${OPTION_STYLES} !text-left`}
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
                href="/blog"
                sameBrowserTab
                variant="ghost"
                size="custom"
                className={`${OPTION_STYLES} !text-left`}
              >
                Blog
              </KitButton>
            </li>
            
          </ul>

          <Button
            href='/book-demo'
            variant='primary'
            fullWidth
            size='md'
            className='w-full rounded-full text-ui-black bg-gradient-to-b from-[#FFD75A] to-[#E6A930] shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_6px_16px_rgba(0,0,0,0.25)] hover:brightness-105'>
            Reserve your spot
          </Button>
        </div>

        <div className="from-[#F1EEE9] to-[#F1EEE9]/0 absolute bottom-0 left-0 -z-10 h-[50%] w-full bg-gradient-to-b via-[#F1EEE9]/60" />
        <DotPatternBackground
          className="top-[40%]"
          dotsSeparationPx={{ vertical: 35, horizontal: 35 }}
          dotWidthPxIncreasePerRow={0}
        />
      </div>
    </>
  );
}

export default Mobile;
