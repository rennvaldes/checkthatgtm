"use client";


import Link from "next/link";

import ChevronThin from "@/components/icons/ChevronThin";
import KitButton from "@/components/ui/KitButton";
import useHideOnScroll from "@/lib/litebox-lib/hooks/useHideOnScroll";
import Logo from "@/components/icons/Logo";
import { trackDemoBookingClick } from "@/lib/utils/posthog-tracking";


function LearnDropdown() {
  return (
    <div className="group relative overflow-hidden hover:overflow-visible">
      <KitButton
        variant="secondary"
        size="medium"
        className="peer flex items-center justify-center gap-[12px]"
      >
        How it works
        <ChevronThin className="flex-shrink-0 text-[10.7px] transition-transform duration-200 group-hover:rotate-180" />
      </KitButton>
      <div className="absolute left-0 w-full pt-[8px] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <div className="bg-ui-whitest absolute flex w-full flex-col rounded-[20px] p-[8px] min-w-[240px]">
          <KitButton
            href="https://docs.growthx.ai/GrowthX-Origin-Story-2072ba60bc7480e1a21ed0d8d0120d15?pvs=74"
            arrowSize="medium"
            variant="secondary"
            size="medium"
            withAnimatedArrow="to-top-right"
            className="justify-between font-normal !text-left"
          >
            Origin Story
          </KitButton>
          <KitButton
            href="https://docs.growthx.ai/The-Problem-We-re-Solving-2072ba60bc748063adecfa961c508143?source=copy_link"
            arrowSize="medium"
            variant="secondary"
            size="medium"
            withAnimatedArrow="to-top-right"
            className="justify-between font-normal !text-left"
          >
            The Problem We&apos;re Solving
          </KitButton>
          <KitButton
            href="https://docs.growthx.ai/How-We-Work-2092ba60bc7480d2be9fe77bb107418f?source=copy_link"
            arrowSize="medium"
            variant="secondary"
            size="medium"
            withAnimatedArrow="to-top-right"
            className="justify-between font-normal !text-left"
          >
            How we work
          </KitButton>
          <KitButton
            href="https://www.notion.so/growthxlabs/Creating-a-Winning-Content-Strategy-2092ba60bc7480f6b249eb9781c98d7f?source=copy_link"
            arrowSize="medium"
            variant="secondary"
            size="medium"
            withAnimatedArrow="to-top-right"
            className="justify-between font-normal !text-left"
          >
            Creating a winning content strategy
          </KitButton>
        </div>
      </div>
    </div>
  );
}

function Desktop() {
  const { isVisible } = useHideOnScroll();

  return (
    <nav
      aria-hidden={!isVisible}
      className="bg-ui-white fixed z-[100] flex w-screen items-center justify-between bg-opacity-[80%] py-[16px] pl-[20px] pr-[16px] font-medium backdrop-blur-[20px] transition-transform duration-300 aria-hidden:-translate-y-full lg:px-[52px] lg:py-[16px]"
    >
      <Link href="/">
        <Logo />
      </Link>

      <ul className="flex items-center justify-center">
        <li>
          <LearnDropdown />
        </li>
        <li>
          <KitButton
            scrollTo="results-section"
            variant="secondary"
            size="medium"
          >
            Customers
          </KitButton>
        </li>
        <li>
          <KitButton
            href="/pricing"
            variant="secondary"
            size="medium"
            sameBrowserTab={true}
          >
            Pricing
          </KitButton>
        </li>
        <li>
          <KitButton
            href='/about'
            sameBrowserTab={true}
            variant="secondary"
            size="medium"
          >
            Company
          </KitButton>
        </li>
        <li>
          <KitButton
            sameBrowserTab
            href="/blog"
            variant="secondary"
            size="medium"
          >
            Blog
          </KitButton>
        </li>

      </ul>
      <KitButton 
        href='/book-demo' 
        variant='primary' 
        size='medium'
        className='rounded-full hover:bg-ui-blue'
        onClick={() => trackDemoBookingClick('navbar', 'desktop')}>
        Book a call
      </KitButton>
    </nav>
  );
}

export default Desktop;
