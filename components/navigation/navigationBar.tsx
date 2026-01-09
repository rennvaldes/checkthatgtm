"use client";

import { useState, useEffect } from "react";
import { cx } from "@/lib/classnames";
import { GridRoot } from "@/components/home/grid/gridRoot";
import Link from "next/link";
import CheckThatLogo from "@/components/icons/CheckThatLogo";

type NavigationBarProps = {
  showBackButton?: boolean;
  backButtonHref?: string;
  backButtonLabel?: string;
  showBookButton?: boolean;
};

export function NavigationBar({
  showBackButton = false,
  backButtonHref = "/blog",
  backButtonLabel = "News overview",
  showBookButton = true,
}: NavigationBarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBannerHidden, setIsBannerHidden] = useState(false);
  const [videoPassed, setVideoPassed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
      setIsBannerHidden(scrollY > 100);
      setVideoPassed(scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Countdown timer
  useEffect(() => {
    // Only shown on desktop, and only on pages without the back button.
    if (showBackButton) return;
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(min-width: 768px)").matches) return;

    const targetDate = new Date(2026, 0, 26, 0, 0, 0).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [showBackButton]);

  const scrollToLaunchWeek = () => {
    const launchWeekSection = document.querySelector('[data-section="launch-week"]');
    if (launchWeekSection) {
      launchWeekSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToVideo = () => {
    const videoSection = document.querySelector('[data-section="hero-video"]');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <>
      {/* Desktop Nav */}
      <nav
        className={cx(
          "hidden md:block w-full fixed left-0 right-0 z-40 transition-all duration-300",
          isScrolled 
            ? "top-0 h-16 bg-background/75 backdrop-blur-[15px] border-b border-border" 
            : "top-0 h-[120px] bg-transparent"
        )}
      >
        <GridRoot size="normal" className={cx("h-full items-center", isScrolled ? "" : "pt-8")}>
          <div className="flex items-center h-full">
            {/* Logo or Back Button */}
            <div className="flex items-center">
              {showBackButton ? (
                <Link
                  href={backButtonHref}
                  className="inline-flex items-center gap-2 text-sm transition-colors text-foreground/60 hover:text-foreground whitespace-nowrap"
                >
                  <span>←</span>
                  <span>{backButtonLabel}</span>
                </Link>
              ) : (
                <Link href="/" aria-label="CheckThat Home">
                  <CheckThatLogo className={cx("w-auto transition-all duration-300", isScrolled ? "h-[44px]" : "h-[88px]")} />
                </Link>
              )}
            </div>

            {/* Mini Countdown and Watch Intro - Centered together */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-5 transition-all duration-300">
              {isBannerHidden && (
                <button
                  onClick={scrollToLaunchWeek}
                  className="bg-[#09a847] text-white px-4 rounded-full text-sm inline-flex items-center gap-3 hover:bg-[#0ABF53] transition-colors cursor-pointer shadow-lg w-[280px] justify-center h-9"
                >
                  <span className="tracking-[-0.03em] font-normal">Launch Week</span>
                  <div className="flex items-center gap-2">
                    <span className="text-base tracking-[-0.03em] font-bold">{timeLeft.days}<span className="font-normal">d</span></span>
                    <span className="text-base tracking-[-0.03em] font-bold">{timeLeft.hours}<span className="font-normal">h</span></span>
                    <span className="text-base tracking-[-0.03em] font-bold">{timeLeft.minutes}<span className="font-normal">m</span></span>
                    <span className="text-base tracking-[-0.03em] font-bold">{timeLeft.seconds}<span className="font-normal">s</span></span>
                  </div>
                </button>
              )}

              {/* Watch Intro CTA */}
              {showBookButton && (
                <button
                  onClick={scrollToVideo}
                  disabled={!videoPassed}
                  className={cx(
                    "inline-flex h-9 items-center justify-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-bold text-foreground whitespace-nowrap transition-opacity",
                    videoPassed ? "hover:opacity-80" : "opacity-0 pointer-events-none"
                  )}
                >
                  <svg 
                    className="w-3 h-3 text-foreground" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch Intro
                </button>
              )}
            </div>
          </div>
        </GridRoot>
      </nav>

      {/* Mobile Header - Back Button or Hamburger */}
      <div
        className={cx(
          "md:hidden fixed left-0 right-0 z-40 transition-all duration-300",
          isScrolled 
            ? "top-0 h-16 bg-background/75 backdrop-blur-[15px] border-b border-border" 
            : "top-0 h-[120px] bg-transparent"
        )}
      >
        <GridRoot size="normal" className={cx("h-full items-center", isScrolled ? "" : "pt-8")}>
          <div className="flex items-center justify-between">
            {showBackButton ? (
              <Link
                href={backButtonHref}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm transition-colors bg-secondary rounded-full text-foreground hover:opacity-80 whitespace-nowrap"
              >
                <span>←</span>
                <span>{backButtonLabel}</span>
              </Link>
            ) : (
              <Link href="/" aria-label="CheckThat Home">
                <CheckThatLogo className={cx("w-auto transition-all duration-300", isScrolled ? "h-[44px]" : "h-[88px]")} />
              </Link>
            )}

            <div className="flex items-center gap-3 ml-auto">
              {/* Watch Intro button - mobile */}
              {videoPassed && (
                <button
                  onClick={scrollToVideo}
                  className="inline-flex h-9 items-center justify-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-bold text-foreground transition-all hover:opacity-80 whitespace-nowrap"
                >
                  <svg 
                    className="w-3 h-3 text-foreground" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch Intro
                </button>
              )}

              {!showBackButton && (
                <div className="flex items-center gap-2 overflow-x-auto max-w-[70vw] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                  <Link
                    href="/pricing"
                    className="inline-flex h-9 items-center justify-center rounded-full bg-secondary px-3 text-sm font-semibold text-foreground/80 hover:text-foreground hover:opacity-90 whitespace-nowrap"
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/blog"
                    className="inline-flex h-9 items-center justify-center rounded-full bg-secondary px-3 text-sm font-semibold text-foreground/80 hover:text-foreground hover:opacity-90 whitespace-nowrap"
                  >
                    News
                  </Link>
                  <Link
                    href="/book-demo"
                    className="inline-flex h-9 items-center justify-center rounded-full bg-primary px-3 text-sm font-semibold text-primary-foreground hover:opacity-90 whitespace-nowrap"
                  >
                    Book a demo
                  </Link>
                </div>
              )}
            </div>
          </div>
        </GridRoot>
      </div>
    </>
  );
}
