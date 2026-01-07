"use client";

import { useCallback } from "react";
import Link from "next/link";
import { GridRoot } from "@/components/home/grid/gridRoot";

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
      className="bg-background/80 backdrop-blur-3xl group fixed left-0 top-0 z-100 flex h-screen w-screen flex-col overflow-hidden transition-all duration-500 aria-hidden:translate-y-full aria-hidden:opacity-50"
    >
      <GridRoot size="normal" className="flex-1 pt-36 tablet:pt-48 desktop:pt-60 pb-32 transition-transform duration-1000 group-aria-hidden:translate-y-[15%]" innerClassName="h-full self-stretch col-[3/-3] tablet:col-[3/span_18]">
        <div className="flex flex-col h-full justify-between">
          {/* Main Navigation - bodyMedium desktop (-2px) */}
          <ul className="flex flex-col items-start">
            <li onClick={handleLinkClick} className="mb-4 last:mb-0">
              <Link
                href="/"
                className="text-2xl font-[540] tracking-[-0.01em] leading-[1.45] text-foreground transition-colors hover:opacity-80"
              >
                Home
              </Link>
            </li>
            <li onClick={handleLinkClick} className="mb-4 last:mb-0">
              <Link
                href="/about"
                className="text-2xl font-[540] tracking-[-0.01em] leading-[1.45] text-foreground transition-colors hover:opacity-80"
              >
                About
              </Link>
            </li>
            <li onClick={handleLinkClick} className="mb-4 last:mb-0">
              <Link
                href="/careers"
                className="text-2xl font-[540] tracking-[-0.01em] leading-[1.45] text-foreground transition-colors hover:opacity-80"
              >
                Careers
              </Link>
            </li>
            <li onClick={handleLinkClick} className="mb-4 last:mb-0">
              <Link
                href="/blog"
                className="text-2xl font-[540] tracking-[-0.01em] leading-[1.45] text-foreground transition-colors hover:opacity-80"
              >
                News
              </Link>
            </li>
          </ul>

          {/* Social Links + CTA - bodySmall desktop */}
          <ul className="flex flex-col items-start">
            <li onClick={handleLinkClick} className="mb-4 last:mb-0">
              <a
                href="https://www.linkedin.com/company/growthxai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-normal tracking-[-0.01em] leading-[1.6] text-foreground transition-colors hover:opacity-80"
              >
                LinkedIn
              </a>
            </li>
            <li onClick={handleLinkClick} className="mb-4 last:mb-0">
              <a
                href="https://x.com/growthxai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-normal tracking-[-0.01em] leading-[1.6] text-foreground transition-colors hover:opacity-80"
              >
                X
              </a>
            </li>
            <li onClick={handleLinkClick} className="mt-6 mb-4 last:mb-0">
              <Link
                href="/book-demo"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-base text-primary-foreground transition-opacity hover:opacity-80 whitespace-nowrap"
              >
                Book a demo
                <span aria-hidden="true">→</span>
              </Link>
            </li>
          </ul>
        </div>
      </GridRoot>
    </div>
  );
}
