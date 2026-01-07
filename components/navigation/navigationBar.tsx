"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { cx } from "@/lib/classnames";
import { GridRoot } from "@/components/home/grid/gridRoot";
import Link from "next/link";
import { NavigationMenu } from "./navigationMenu";
import Logo from "@/components/icons/Logo";
import { useSpring, a } from "@react-spring/web";
import { useScrollDirection } from "@/lib/hooks";

type NavigationBarProps = {
  showBackButton?: boolean;
  backButtonHref?: string;
  backButtonLabel?: string;
  showBookButton?: boolean;
  enableScrollAway?: boolean;
};

export function NavigationBar({
  showBackButton = false,
  backButtonHref = "/blog",
  backButtonLabel = "News overview",
  showBookButton = true,
  enableScrollAway = false,
}: NavigationBarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { isVisible } = useScrollDirection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-away spring (mobile only)
  const navSpring = useSpring({
    transform: enableScrollAway && !isVisible ? "translateY(-100%)" : "translateY(0%)",
    config: { tension: 300, friction: 35 },
  });

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
        <GridRoot size="normal" className="h-full items-center">
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
                <Link href="/" aria-label="GrowthX Home">
                  <Logo className="h-[18px] w-auto" />
                </Link>
              )}
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-10 h-full ml-10">
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

            {/* Book Demo CTA */}
            {showBookButton && (
              <div className="flex items-center ml-auto">
                <Link
                  href="/book-demo"
                  className="inline-flex h-9 items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground transition-opacity hover:opacity-80 whitespace-nowrap"
                >
                  Book a demo
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            )}
          </div>
        </GridRoot>
      </nav>

      {/* Mobile Header - Back Button or Hamburger */}
      <a.div
        style={navSpring}
        className="md:hidden fixed top-0 left-0 right-0 z-110"
      >
        <GridRoot size="normal" className="h-16 items-center">
          <div className="flex items-center justify-between">
            {showBackButton ? (
              <Link
                href={backButtonHref}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm transition-colors bg-secondary rounded-full text-foreground hover:opacity-80 whitespace-nowrap"
              >
                <span>←</span>
                <span>{backButtonLabel}</span>
              </Link>
            ) : null}

            <button
              type="button"
              onClick={handleMenuToggle}
              className="flex size-8 items-center justify-center rounded-full bg-transparent ml-auto overflow-visible"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <Lines isOpen={isMenuOpen} />
            </button>
          </div>
        </GridRoot>
      </a.div>

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
    <svg viewBox="-25 -25 50 50" className="w-full h-full overflow-visible">
      <circle
        cx="0"
        cy="0"
        r="25"
        stroke="black"
        fill="none"
        strokeWidth="3.3"
      />
      <a.g
        style={{
          transform: spring.v
            .to([0, 1], [90, 315])
            .to((r) => `rotate(${r}deg)`),
        }}
      >
        <a.line
          x1={spring.v.to([0, 1], [0, -11])}
          y1={0}
          x2={spring.v.to([0, 1], [0, 11])}
          y2={0}
          stroke="black"
          strokeWidth="4.7"
          strokeLinecap="round"
          opacity={spring.v.to([0, 1], [0, 1])}
        />
        <a.line
          x1={spring.v.to([0, 1], [-5, 0])}
          y1={11}
          x2={spring.v.to([0, 1], [-5, 0])}
          y2={-11}
          stroke="black"
          strokeWidth="4.7"
          strokeLinecap="round"
        />
        <a.line
          x1={spring.v.to([0, 1], [5, 0])}
          y1={11}
          x2={spring.v.to([0, 1], [5, 0])}
          y2={spring.v.to([0, 1], [-1, 0])}
          stroke="black"
          strokeWidth="4.7"
          strokeLinecap="round"
          opacity={spring.v.to([0, 1], [1, 0])}
        />
      </a.g>
    </svg>
  );
};
