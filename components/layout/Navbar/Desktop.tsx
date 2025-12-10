"use client";


import Link from "next/link";
import { usePathname } from "next/navigation";
import { cx } from "@/lib/classnames";

import KitButton from "@/components/ui/KitButton";
import useHideOnScroll from "@/lib/litebox-lib/hooks/useHideOnScroll";
import Logo from "@/components/icons/Logo";
import Button from "@/components/common/Button";
import ChevronThin from "@/components/icons/ChevronThin";
import { trackDemoBookingClick } from "@/lib/utils/posthog-tracking";


// Desktop navbar

function LearnDropdown() {
  return (
    <div className="group relative overflow-hidden hover:overflow-visible">
      <KitButton
        variant="secondary"
        size="medium"
        className="peer flex items-center justify-center gap-[12px]"
      >
        Learn
        <ChevronThin className="flex-shrink-0 text-[10.7px] transition-transform duration-200 group-hover:rotate-180" />
      </KitButton>
      <div className="absolute left-0 w-full pt-[8px] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <div className="bg-ui-whitest absolute flex w-full flex-col rounded-[20px] p-[8px] min-w-[240px]">
          <KitButton
            href="/learn/origin-story"
            arrowSize="medium"
            variant="secondary"
            size="medium"
            withAnimatedArrow="to-top-right"
            className="justify-between font-normal !text-left"
            sameBrowserTab={true}
          >
            Origin Story
          </KitButton>
          <KitButton
            href="/learn/problem-solving"
            arrowSize="medium"
            variant="secondary"
            size="medium"
            withAnimatedArrow="to-top-right"
            className="justify-between font-normal !text-left"
            sameBrowserTab={true}
          >
            The Problem We&apos;re Solving
          </KitButton>
          <KitButton
            href="/learn/how-we-work"
            arrowSize="medium"
            variant="secondary"
            size="medium"
            withAnimatedArrow="to-top-right"
            className="justify-between font-normal !text-left"
            sameBrowserTab={true}
          >
            How we work
          </KitButton>
          <KitButton
            href="/learn/winning-content-strategy"
            arrowSize="medium"
            variant="secondary"
            size="medium"
            withAnimatedArrow="to-top-right"
            className="justify-between font-normal !text-left"
            sameBrowserTab={true}
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
  const pathname = usePathname();

  return (
    <nav
      aria-hidden={!isVisible}
      className="fixed z-[100] flex w-screen items-center justify-between bg-[#F1EEE9] py-[16px] pl-[20px] pr-[16px] font-medium backdrop-blur-[20px] transition-transform duration-300 aria-hidden:-translate-y-full lg:px-[52px] lg:py-[16px]"
    >
      <Link href="/">
        <Logo />
      </Link>

      <div className="flex items-center justify-center gap-8">
      <ul className="flex items-center justify-center">
        <li>
          <KitButton
            href="/pricing#solutions"
            variant="secondary"
            size="medium"
            sameBrowserTab
          >
            Solutions
          </KitButton>
        </li>
        <li>
          <KitButton
            scrollTo="customers"
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
            className={cx(
              pathname === "/pricing" || pathname?.startsWith("/pricing")
                ? "opacity-100"
                : "opacity-70"
            )}
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
            className={cx(
              pathname === "/about"
                ? "opacity-100"
                : "opacity-70"
            )}
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
            className={cx(
              pathname === "/blog" || pathname?.startsWith("/blog/")
                ? "opacity-100"
                : "opacity-70"
            )}
          >
            News
          </KitButton>
        </li>
        <li>
          <LearnDropdown />
        </li>

      </ul>
      <Button
        href='/book-demo'
        variant='primary'
        size="sm"
        onClick={() => trackDemoBookingClick('navbar', 'desktop')}
      >
        Reserve your spot
      </Button>
      </div>
    </nav>
  );
}

export default Desktop;
