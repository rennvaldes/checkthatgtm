"use client";

import { useCallback } from "react";
import { cx } from "@/lib/classnames";
import Link from "next/link";

type NavigationMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  pathname: string | null;
};

export function NavigationMenu({
  isOpen,
  onClose,
  pathname,
}: NavigationMenuProps) {
  const handleLinkClick = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <div
      aria-hidden={!isOpen}
      className="bg-background/80 backdrop-blur-[64px] aria-hidden: group fixed left-0 top-0 z-[100] flex h-screen w-screen flex-col overflow-hidden transition-all duration-500 aria-hidden:translate-y-[100%] aria-hidden:opacity-50"
    >
      <div className="flex flex-1 flex-col items-start px-16 pb-10 pt-16 transition-transform duration-1000 group-aria-hidden:translate-y-[15%]">
        {/* Top Section - Main Navigation */}
        <div className="text-sm leading-none tracking-[-0.03em] text-muted-foreground font-light mb-2">
          Company
        </div>
        <ul className="flex flex-col items-start w-full">
          <li onClick={handleLinkClick} className="h-[54px] flex items-center">
            <Link
              href="/about"
              className="text-2xl leading-[1.25] tracking-[-0.03em] font-[520] text-foreground transition-colors hover:opacity-80"
            >
              About
            </Link>
          </li>
          <li onClick={handleLinkClick} className="h-[54px] flex items-center">
            <Link
              href="/careers"
              className="text-2xl leading-[1.25] tracking-[-0.03em] font-[520] text-foreground transition-colors hover:opacity-80"
            >
              Careers
            </Link>
          </li>
          <li onClick={handleLinkClick} className="h-[54px] flex items-center">
            <Link
              href="/blog"
              className="text-2xl leading-[1.25] tracking-[-0.03em] font-[520] text-foreground transition-colors hover:opacity-80"
            >
              News
            </Link>
          </li>
        </ul>

        {/* Social Links */}
        <div className="text-sm leading-none tracking-[-0.03em] text-muted-foreground font-light mb-2 mt-7">
          Follow us
        </div>
        <ul className="flex flex-col items-start w-full">
          <li onClick={handleLinkClick} className="h-[40px] flex items-center">
            <a
              href="https://www.linkedin.com/company/growthxai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg leading-[1.25] tracking-[-0.06em] font-[520] text-foreground transition-colors hover:opacity-80"
            >
              LinkedIn
            </a>
          </li>
          <li onClick={handleLinkClick} className="h-[40px] flex items-center">
            <a
              href="https://x.com/growthxai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg leading-[1.25] tracking-[-0.06em] font-[520] text-foreground transition-colors hover:opacity-80"
            >
              X
            </a>
          </li>
        </ul>

        {/* Book Demo CTA - 40px from bottom */}
        <div className="w-full mt-auto flex justify-start" onClick={handleLinkClick}>
          <Link
            href="/book-demo"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-base text-primary-foreground transition-opacity hover:opacity-80 whitespace-nowrap w-fit"
          >
            Book a demo
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
