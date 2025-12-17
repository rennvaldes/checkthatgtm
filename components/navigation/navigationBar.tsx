"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { cx } from "@/lib/classnames";
import { Grid } from "@/components/home/grid/gridRoot";
import Link from "next/link";
import { NavigationMenu } from "./navigationMenu";
import { NavigationLogo } from "./navigationLogo";
import Menu from "@/components/icons/Menu";
import Close from "@/components/icons/Close";
import Logo from "@/components/icons/Logo";
import { useSpring, animated } from "@react-spring/web";
import { config } from "@react-spring/web";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleMenuClose = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <>
      {/* Desktop Nav */}
      <nav
        className={cx(
          "hidden md:block w-full h-16 sticky top-0 z-50",
          "bg-background/75 backdrop-blur-[15px]"
        )}
      >
        <Grid className="h-full items-center">
          {/* Logo or Back Button - Cols 1-2 */}
          <div className="col-span-2 flex items-center">
            {showBackButton ? (
              <Link
                href={backButtonHref}
                className="inline-flex items-center gap-2 text-sm transition-colors text-foreground/60 hover:text-foreground whitespace-nowrap"
              >
                <span>←</span>
                <span>{backButtonLabel}</span>
              </Link>
            ) : pathname === "/" ? (
              <NavigationLogo />
            ) : (
              <Link href="/" aria-label="GrowthX Home">
                <Logo />
              </Link>
            )}
          </div>

          {/* Navigation Links - Cols 3-6, 40px gap */}
          <div className="col-span-4 col-start-3 flex items-center gap-[40px] h-full">
            <Link
              href="/about"
              className={cx(
                "relative inline-flex items-center text-sm transition-all h-full",
                "after:absolute after:bottom-[-0.5px] after:h-[0.5px] after:transition-all",
                pathname === "/about"
                  ? "text-foreground after:bg-foreground after:left-0 after:right-0"
                  : "text-foreground/40 after:bg-transparent after:left-0 after:right-0 hover:text-foreground/60"
              )}
            >
              <span className="inline-block">Company</span>
            </Link>
            <Link
              href="/careers"
              className={cx(
                "relative inline-flex items-center text-sm transition-all h-full",
                "after:absolute after:bottom-[-0.5px] after:h-[0.5px] after:transition-all",
                pathname === "/careers"
                  ? "text-foreground after:bg-foreground after:left-0 after:right-0"
                  : "text-foreground/40 after:bg-transparent after:left-0 after:right-0 hover:text-foreground/60"
              )}
            >
              <span className="inline-block">Careers</span>
            </Link>
            <Link
              href="/blog"
              className={cx(
                "relative inline-flex items-center text-sm transition-all h-full",
                "after:absolute after:bottom-[-0.5px] after:h-[0.5px] after:transition-all",
                pathname === "/blog" || pathname?.startsWith("/blog/")
                  ? "text-foreground after:bg-foreground after:left-0 after:right-0"
                  : "text-foreground/40 after:bg-transparent after:left-0 after:right-0 hover:text-foreground/60"
              )}
            >
              <span className="inline-block">News</span>
            </Link>
          </div>

          {/* Book Demo CTA - Cols 11-12 */}
          {showBookButton && (
            <div className="col-span-2 col-start-11 flex items-center justify-end">
              <Link
                href="/book-demo"
                className="inline-flex h-9 items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground transition-opacity hover:opacity-80 whitespace-nowrap"
              >
                Book a demo
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          )}
        </Grid>
      </nav>

      {/* Mobile Header - Logo/Back Button + Hamburger */}
      <div className="md:hidden fixed top-2 right-1 left-5 z-[110] flex items-center justify-between">
        {showBackButton ? (
          <Link
            href={backButtonHref}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm transition-colors bg-secondary rounded-full text-foreground hover:opacity-80 whitespace-nowrap"
          >
            <span>←</span>
            <span>{backButtonLabel}</span>
          </Link>
        ) : pathname !== "/" ? (
          <Link href="/" aria-label="GrowthX Home">
            <Logo />
          </Link>
        ) : null}

        <button
          type="button"
          onClick={handleMenuToggle}
          className={cx(
            "flex size-16 items-center justify-center rounded-full  bg-transparent",
            !showBackButton && pathname === "/" && "ml-auto"
          )}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <Lines isOpen={isMenuOpen} />
        </button>
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

const Lines = ({ isOpen }: { isOpen: boolean }) => {
  const spring = useSpring({
    v: isOpen ? 1 : 0,
    config: { tension: 300, friction: 35 },
  });

  return (
    <svg viewBox="-50 -50 100 100" className="w-full h-full">
      <circle
        cx="0"
        cy="0"
        r="25"
        stroke="black"
        fill="none"
        strokeWidth="3.3"
      />
      <animated.g
        style={{
          transform: spring.v
            .to([0, 1], [90, 315])
            .to((r) => `rotate(${r}deg)`),
        }}
      >
        <animated.line
          x1={spring.v.to([0, 1], [0, -11])}
          y1={0}
          x2={spring.v.to([0, 1], [0, 11])}
          y2={0}
          stroke="black"
          strokeWidth="4.7"
          strokeLinecap="round"
          opacity={spring.v.to([0, 1], [0, 1])}
        />
        <animated.line
          x1={spring.v.to([0, 1], [-5, 0])}
          y1={11}
          x2={spring.v.to([0, 1], [-5, 0])}
          y2={-11}
          stroke="black"
          strokeWidth="4.7"
          strokeLinecap="round"
        />
        <animated.line
          x1={spring.v.to([0, 1], [5, 0])}
          y1={11}
          x2={spring.v.to([0, 1], [5, 0])}
          y2={spring.v.to([0, 1], [-1, 0])}
          stroke="black"
          strokeWidth="4.7"
          strokeLinecap="round"
          opacity={spring.v.to([0, 1], [1, 0])}
        />
      </animated.g>
    </svg>
  );
};
