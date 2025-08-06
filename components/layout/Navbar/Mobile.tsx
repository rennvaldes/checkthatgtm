"use client";

import React from "react";

import Menu from "@/components/icons/Menu";
import Logo from "@/components/icons/Logo";
import Close from "@/components/icons/Close";
import ChevronThin from "@/components/icons/ChevronThin";
import KitButton from "@/components/ui/KitButton";
import DotPatternBackground from "@/components/ui/DotPatternBackground";
import useHideOnScroll from "@/lib/litebox-lib/hooks/useHideOnScroll";

import { usePathname, useRouter } from "next/navigation";

const OPTION_STYLES = "focus:text-ui-blue text-[28px] leading-[31px]";

function LearnDropdown() {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleToggle = () => setIsExpanded(!isExpanded);
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle();
    }
  };

  return (
    <div className="relative">
      <button 
        type="button"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className="focus:text-ui-blue group flex items-center justify-center gap-[20px] text-[28px] leading-[31px]"
      >
        Learn
        <ChevronThin 
          className={`h-[16px] w-[16px] flex-shrink-0 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} 
        />
      </button>
      {isExpanded && (
        <div className="flex w-full flex-col items-start gap-[24px] pl-[12px] pt-[24px]">
          <KitButton
            href="https://docs.growthx.ai/GrowthX-Origin-Story-2072ba60bc7480e1a21ed0d8d0120d15?pvs=74"
            withAnimatedArrow="to-top-right"
            variant="ghost"
            size="custom"
            className="flex min-w-[200px] items-center justify-between text-[20px] leading-[22px] !text-left"
          >
            Origin Story
          </KitButton>
          <KitButton
            href="https://docs.growthx.ai/The-Problem-We-re-Solving-2072ba60bc748063adecfa961c508143?source=copy_link"
            withAnimatedArrow="to-top-right"
            variant="ghost"
            size="custom"
            className="flex min-w-[200px] items-center justify-between text-[20px] leading-[22px] !text-left"
          >
            The Problem We're Solving
          </KitButton>
          <KitButton
            href="https://docs.growthx.ai/How-We-Work-2092ba60bc7480d2be9fe77bb107418f?source=copy_link"
            withAnimatedArrow="to-top-right"
            variant="ghost"
            size="custom"
            className="flex min-w-[200px] items-center justify-between text-[20px] leading-[22px] !text-left"
          >
            How we work
          </KitButton>
          <KitButton
            href="https://www.notion.so/growthxlabs/Creating-a-Winning-Content-Strategy-2092ba60bc7480f6b249eb9781c98d7f?source=copy_link"
            withAnimatedArrow="to-top-right"
            variant="ghost"
            size="custom"
            className="flex min-w-[200px] items-center justify-between text-[20px] leading-[22px] !text-left"
          >
            Creating a winning content strategy
          </KitButton>
        </div>
      )}
    </div>
  );
}

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
        className="bg-ui-white fixed z-[100] flex w-screen items-center justify-between bg-opacity-[80%] py-[16px] pl-[20px] pr-[16px] font-medium backdrop-blur-[20px] transition-transform duration-300 aria-hidden:-translate-y-full lg:px-[52px] lg:py-[16px]"
      >
        <Logo />

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex h-[32px] w-[32px] items-center justify-center"
        >
          <Menu />
        </button>
      </nav>

      <div
        aria-hidden={!isOpen}
        className="bg-ui-white aria-hidden: group fixed left-0 top-0 z-[100] flex h-screen w-screen flex-col overflow-hidden transition-all duration-500 aria-hidden:translate-x-[100%] aria-hidden:opacity-50"
      >
        <div className="flex items-center justify-between py-[16px] pl-[20px] pr-[16px] transition-transform duration-1000 group-aria-hidden:translate-x-[15%]">
          <Logo />
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="flex h-[32px] w-[32px] items-center justify-center"
          >
            <Close className="text-ui-blue" />
          </button>
        </div>

        <div className="flex flex-1 flex-col justify-between px-[20px] pb-[140px] pt-[20px] transition-transform duration-1000 group-aria-hidden:translate-x-[15%]">
          <ul className="flex flex-col gap-[24px]">
            <li>
              <button
                type="button"
                onClick={() => scrollTo("how-it-works-section")}
                onKeyDown={(e) => e.key === 'Enter' && scrollTo("how-it-works-section")}
                className={OPTION_STYLES}
              >
                How it works
              </button>
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
            <li>
              <LearnDropdown />
            </li>
            
          </ul>

          <KitButton
            href='/book-demo'
            variant='primary'
            size='large'
            className='rounded-full bg-ui-black text-ui-whitest hover:bg-ui-blue w-full'>
            Book a call
          </KitButton>
        </div>

        <div className="from-ui-white to-ui-white/0 absolute bottom-0 left-0 -z-10 h-[50%] w-full bg-gradient-to-b via-white/60" />
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
