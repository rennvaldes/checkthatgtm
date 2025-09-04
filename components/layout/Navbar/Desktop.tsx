"use client";


import Link from "next/link";

import KitButton from "@/components/ui/KitButton";
import useHideOnScroll from "@/lib/litebox-lib/hooks/useHideOnScroll";
import Logo from "@/components/icons/Logo";
import Button from "@/components/common/Button";


// Desktop navbar

function Desktop() {
  const { isVisible } = useHideOnScroll();

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
            href="/"
            variant="secondary"
            size="medium"
            sameBrowserTab
          >
            Solutions
          </KitButton>
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
      <Button 
        href='/book-demo' 
        variant='primary'
        size="sm"
      >
        Reserve your spot
      </Button>
      </div>
    </nav>
  );
}

export default Desktop;
