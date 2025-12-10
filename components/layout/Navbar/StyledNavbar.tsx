"use client";

import Link from "next/link";
import { Grid } from "@/components/home/grid/gridRoot";
import KitButton from "@/components/ui/KitButton";
import Button from "@/components/common/Button";
import ChevronThin from "@/components/icons/ChevronThin";
import { trackDemoBookingClick } from "@/lib/utils/posthog-tracking";
import Logo from "@/components/icons/Logo";
import { usePathname, useRouter } from "next/navigation";
import { cx } from "@/lib/classnames";
import React from "react";
import Menu from "@/components/icons/Menu";
import Close from "@/components/icons/Close";
import useResponsiveDevice from '@/hooks/useResponsiveDevice';

// Desktop Learn Dropdown
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

// Mobile Learn Dropdown
function MobileLearnDropdown() {
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
            href="/learn/origin-story"
            withAnimatedArrow="to-top-right"
            variant="ghost"
            size="custom"
            className="flex min-w-[200px] items-center justify-between text-[20px] leading-[22px] !text-left"
          >
            Origin Story
          </KitButton>
          <KitButton
            href="/learn/problem-solving"
            withAnimatedArrow="to-top-right"
            variant="ghost"
            size="custom"
            className="flex min-w-[200px] items-center justify-between text-[20px] leading-[22px] !text-left"
          >
            The Problem We&apos;re Solving
          </KitButton>
          <KitButton
            href="/learn/how-we-work"
            withAnimatedArrow="to-top-right"
            variant="ghost"
            size="custom"
            className="flex min-w-[200px] items-center justify-between text-[20px] leading-[22px] !text-left"
          >
            How we work
          </KitButton>
          <KitButton
            href="/learn/winning-content-strategy"
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

// Desktop Navbar
function Desktop() {
  return (
    <nav className="w-full h-fit pt-16 md:h-16 md:pt-0 md:sticky md:top-0 md:z-50 md:bg-background/75 md:backdrop-blur-[15px]">
      <Grid className="h-full items-center">
        {/* Logo */}
        <div className="col-span-6 md:col-span-2 flex items-center">
          <Link href="/" aria-label="GrowthX Home">
            <Logo />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="col-span-full md:col-span-10 flex items-center justify-end gap-4 lg:gap-8">
          <ul className="hidden md:flex items-center gap-4 lg:gap-8">
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
                href="/pricing#customers"
                variant="secondary"
                size="medium"
                sameBrowserTab
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
                  (pathname === "/pricing" || pathname?.startsWith("/pricing")) ? "opacity-100" : "opacity-70"
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
                  pathname === "/about" ? "opacity-100" : "opacity-70"
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
                  (pathname === "/blog" || pathname?.startsWith("/blog/")) ? "opacity-100" : "opacity-70"
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
      </Grid>
    </nav>
  );
}

// Mobile Navbar
function Mobile() {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollTo = React.useCallback(
    (sectionId: string) => {
      const el = typeof document !== 'undefined' ? document.getElementById(sectionId) : null;
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
        return;
      }
      if (pathname === '/pricing') {
        router.push(`/#${sectionId}`);
      } else {
        router.push(`/pricing#${sectionId}`);
      }
      setIsOpen(false);
    },
    [pathname, router]
  );

  const OPTION_STYLES = "focus:text-ui-blue text-[28px] leading-[31px]";

  return (
    <>
      <nav className="w-full h-fit pt-16 md:h-16 md:pt-0 md:sticky md:top-0 md:z-50 md:bg-background/75 md:backdrop-blur-[15px]">
        <Grid className="h-full items-center">
          <div className="col-span-6 flex items-center">
            <Link href="/" aria-label="GrowthX Home">
              <Logo />
            </Link>
          </div>
          <div className="col-span-6 flex items-center justify-end">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="flex h-[32px] w-[32px] items-center justify-center"
            >
              <Menu className="text-primary-black" />
            </button>
          </div>
        </Grid>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        aria-hidden={!isOpen}
        className="bg-[#F1EEE9] fixed left-0 top-0 z-[100] flex h-screen w-screen flex-col overflow-hidden transition-all duration-500 aria-hidden:translate-x-[100%] aria-hidden:opacity-50"
      >
        <div className="flex items-center justify-between py-[16px] pl-[20px] pr-[16px]">
          <Logo className="text-primary-black" />
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="flex h-[32px] w-[32px] items-center justify-center"
          >
            <Close className="text-primary-black" />
          </button>
        </div>

        <div className="flex flex-1 flex-col justify-between px-[20px] pb-[140px] pt-[20px]">
          <ul className="flex flex-col gap-[24px]">
            <li 
              onClick={() => setIsOpen(false)}
              onKeyDown={(e) => e.key === 'Enter' && setIsOpen(false)}
            >
              <KitButton
                className={`${OPTION_STYLES} !text-left`}
                href="/pricing#solutions"
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
                onClick={() => scrollTo("customers")}
                onKeyDown={(e) => e.key === 'Enter' && scrollTo("customers")}
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
                className={cx(
                  `${OPTION_STYLES} !text-left`,
                  (pathname === "/pricing" || pathname?.startsWith("/pricing")) ? "opacity-100" : "opacity-70"
                )}
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
                className={cx(
                  `${OPTION_STYLES} !text-left`,
                  pathname === "/about" ? "opacity-100" : "opacity-70"
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
                href="/blog"
                sameBrowserTab
                variant="ghost"
                size="custom"
                className={cx(
                  `${OPTION_STYLES} !text-left`,
                  (pathname === "/blog" || pathname?.startsWith("/blog/")) ? "opacity-100" : "opacity-70"
                )}
              >
                News
              </KitButton>
            </li>
            <li>
              <MobileLearnDropdown />
            </li>
          </ul>

          <Button
            href='/book-demo'
            variant='primary'
            fullWidth
            size='md'
            onClick={() => trackDemoBookingClick('navbar', 'mobile')}
            className="w-full rounded-full text-ui-black bg-gradient-to-b from-[#FFD75A] to-[#E6A930] shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_6px_16px_rgba(0,0,0,0.25)] hover:brightness-105"
          >
            Reserve your spot
          </Button>
        </div>
      </div>
    </>
  );
}

// Main Component
export default function StyledNavbar() {
  const { isDesktop, isProcessing } = useResponsiveDevice();

  if (isProcessing) return null;
  
  return isDesktop ? <Desktop /> : <Mobile />;
}

