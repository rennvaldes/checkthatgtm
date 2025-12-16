"use client";

import { useCallback } from "react";
import { cx } from "@/lib/classnames";
import Link from "next/link";

type NavigationMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  pathname: string | null;
};

export function NavigationMenu({ isOpen, onClose, pathname }: NavigationMenuProps) {
  const handleLinkClick = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <div
      aria-hidden={!isOpen}
      className="bg-background/80 backdrop-blur-[64px] aria-hidden: group fixed left-0 top-0 z-[100] flex h-screen w-screen flex-col overflow-hidden transition-all duration-500 aria-hidden:translate-y-[100%] aria-hidden:opacity-50"
    >

      {/* Menu Items - Centered with CTA at bottom */}
      <div className="flex flex-1 flex-col justify-between items-center px-5 pb-12 pt-20 transition-transform duration-1000 group-aria-hidden:translate-y-[15%]">
        <ul className="flex flex-col items-center gap-8 flex-1 justify-center">
          <li onClick={handleLinkClick}>
            <Link
              href="/about"
              className={cx(
                "text-[28px] leading-[31px] transition-colors",
                pathname === "/about"
                  ? "text-foreground font-medium"
                  : "text-foreground/40 hover:text-foreground"
              )}
            >
              Company
            </Link>
          </li>
          <li onClick={handleLinkClick}>
            <Link
              href="/careers"
              className={cx(
                "text-[28px] leading-[31px] transition-colors",
                pathname === "/careers"
                  ? "text-foreground font-medium"
                  : "text-foreground/40 hover:text-foreground"
              )}
            >
              Careers
            </Link>
          </li>
          <li onClick={handleLinkClick}>
            <Link
              href="/blog"
              className={cx(
                "text-[28px] leading-[31px] transition-colors",
                pathname === "/blog" || pathname?.startsWith("/blog/")
                  ? "text-foreground font-medium"
                  : "text-foreground/40 hover:text-foreground"
              )}
            >
              News
            </Link>
          </li>
        </ul>

        {/* Book Demo CTA - 48px from bottom */}
        <Link
          href="/book-demo"
          onClick={handleLinkClick}
          className="w-full max-w-[300px] inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-base text-primary-foreground transition-opacity hover:opacity-80 whitespace-nowrap"
        >
          Book a demo
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
