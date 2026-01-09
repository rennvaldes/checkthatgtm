"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { cx } from "@/lib/classnames";
import { GridRoot } from "@/components/home/grid/gridRoot";
import Link from "next/link";
import { NavigationMenu } from "./navigationMenu";
import CheckThatLogo from "@/components/icons/CheckThatLogo";
import { useSpring, a } from "@react-spring/web";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [videoPassed, setVideoPassed] = useState(false);
  const [ctaNearBanner, setCtaNearBanner] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
      setVideoPassed(scrollY > 800);
      
      // Check if Get Started CTA is near the banner (within ~40px distance)
      // The sticky button appears around scrollY ~600, and banner should move when CTA gets close
      const isNearCta = scrollY > 560 && scrollY <= 680;
      setCtaNearBanner(isNearCta);
      
      // Hide banner only after CTA animation completes
      setIsBannerHidden(scrollY > 680);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Countdown timer
  useEffect(() => {
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
  }, []);

  // Mini countdown animation
  const miniCountdownSpring = useSpring({
    from: { opacity: 0, transform: "translateY(-20px) scale(0.8)" },
    to: {
      opacity: isBannerHidden ? 1 : 0,
      transform: isBannerHidden ? "translateY(0px) scale(1)" : "translateY(-20px) scale(0.8)",
    },
    config: { tension: 300, friction: 20 },
  });

  // Watch Intro button animation
  const watchIntroSpring = useSpring({
    from: { opacity: 0, transform: "translateX(20px) scale(0.95)" },
    to: {
      opacity: videoPassed ? 1 : 0,
      transform: videoPassed ? "translateX(0px) scale(1)" : "translateX(20px) scale(0.95)",
    },
    config: { tension: 250, friction: 25 },
  });

  // Large countdown banner animation (opposite of mini countdown)
  const largeCountdownSpring = useSpring({
    from: { opacity: 0, transform: "translateY(-20px) translateX(0px)" },
    to: {
      opacity: !isBannerHidden && !ctaNearBanner ? 1 : 0,
      transform: ctaNearBanner 
        ? "translateY(-60px) translateX(-40px)" 
        : !isBannerHidden 
          ? "translateY(0px) translateX(0px)" 
          : "translateY(-20px) translateX(0px)",
    },
    config: { tension: 300, friction: 20 },
  });

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleMenuClose = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

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
          <div className="flex items-center h-full relative">
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

            {/* Large Countdown Banner - Top Right */}
            {!showBackButton && (
              <a.div
                style={{
                  ...largeCountdownSpring,
                  pointerEvents: !isBannerHidden && !ctaNearBanner ? 'auto' : 'none',
                }}
                className="absolute right-0 top-4 bg-[#09a847] text-white px-6 py-5 rounded-lg flex flex-col items-center gap-4 shadow-lg"
              >
                <div className="text-center">
                  <span className="text-base tracking-[-0.03em] font-bold">Launch Week</span>
                  {" "}
                  <span className="text-base tracking-[-0.03em] font-normal">is coming</span>
                </div>
                
                <div className="flex items-center gap-3 min-w-[240px] justify-center py-2">
                  <div className="flex flex-col items-center min-w-[48px]">
                    <span className="text-2xl tracking-[-0.03em] font-bold leading-none tabular-nums">{timeLeft.days}</span>
                    <span className="text-xs font-normal leading-none mt-1">days</span>
                  </div>
                  <div className="flex flex-col items-center min-w-[48px]">
                    <span className="text-2xl tracking-[-0.03em] font-bold leading-none tabular-nums">{timeLeft.hours}</span>
                    <span className="text-xs font-normal leading-none mt-1">hours</span>
                  </div>
                  <div className="flex flex-col items-center min-w-[48px]">
                    <span className="text-2xl tracking-[-0.03em] font-bold leading-none tabular-nums">{timeLeft.minutes}</span>
                    <span className="text-xs font-normal leading-none mt-1">mins</span>
                  </div>
                  <div className="flex flex-col items-center min-w-[48px]">
                    <span className="text-2xl tracking-[-0.03em] font-bold leading-none tabular-nums">{timeLeft.seconds}</span>
                    <span className="text-xs font-normal leading-none mt-1">secs</span>
                  </div>
                </div>
                
                <button
                  onClick={scrollToLaunchWeek}
                  className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-100 transition-colors whitespace-nowrap w-full"
                >
                  Join Launch Week
                </button>
              </a.div>
            )}

            {/* Mini Countdown and Watch Intro - Centered together */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-5 transition-all duration-300">
              {isBannerHidden && (
                <a.button
                  onClick={scrollToLaunchWeek}
                  style={miniCountdownSpring}
                  className="bg-[#09a847] text-white px-4 rounded-full text-sm inline-flex items-center gap-3 hover:bg-[#0ABF53] transition-colors cursor-pointer shadow-lg w-[280px] justify-center h-9"
                >
                  <span className="tracking-[-0.03em] font-normal">Launch Week</span>
                  <div className="flex items-center gap-2">
                    <span className="text-base tracking-[-0.03em] font-bold">{timeLeft.days}<span className="font-normal">d</span></span>
                    <span className="text-base tracking-[-0.03em] font-bold">{timeLeft.hours}<span className="font-normal">h</span></span>
                    <span className="text-base tracking-[-0.03em] font-bold">{timeLeft.minutes}<span className="font-normal">m</span></span>
                    <span className="text-base tracking-[-0.03em] font-bold">{timeLeft.seconds}<span className="font-normal">s</span></span>
                  </div>
                </a.button>
              )}

              {/* Watch Intro CTA */}
              {showBookButton && (
                <a.button
                  onClick={scrollToVideo}
                  style={{
                    ...watchIntroSpring,
                    pointerEvents: videoPassed ? 'auto' : 'none',
                  }}
                  className="inline-flex h-9 items-center justify-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-bold text-foreground hover:opacity-80 whitespace-nowrap"
                >
                  <svg 
                    className="w-3 h-3 text-foreground" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch Intro
                </a.button>
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
              
              <button
                type="button"
                onClick={handleMenuToggle}
                className="flex size-8 items-center justify-center rounded-full bg-transparent overflow-visible"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                <Lines isOpen={isMenuOpen} />
              </button>
            </div>
          </div>
        </GridRoot>
      </div>

      {/* Mobile Menu Overlay */}
      <NavigationMenu
        isOpen={isMenuOpen}
        onClose={handleMenuClose}
        pathname={pathname}
      />
    </>
  );
}

function Lines({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-[6px]">
      <div
        className={cx(
          "h-[1.5px] w-5 bg-foreground transition-all duration-300 origin-center",
          isOpen && "rotate-45 translate-y-[3.75px]"
        )}
      />
      <div
        className={cx(
          "h-[1.5px] w-5 bg-foreground transition-all duration-300 origin-center",
          isOpen && "-rotate-45 -translate-y-[3.75px]"
        )}
      />
    </div>
  );
}
