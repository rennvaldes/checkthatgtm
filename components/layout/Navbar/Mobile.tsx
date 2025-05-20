"use client";

import React from "react";

import Menu from "@/components/icons/Menu";
import Logo from "@/components/icons/Logo";
import Close from "@/components/icons/Close";
import ChevronThin from "@/components/icons/ChevronThin";
import KitButton from "@/components/ui/KitButton";
import DotPatternBackground from "@/components/ui/DotPatternBackground";
import useHideOnScroll from "@/lib/litebox-lib/hooks/useHideOnScroll";
import useGetQueryWithRefetchOnChange from "@/hooks/useGetQueryWithRefetchOnChange";
import { getData } from "@/lib/api/strapi/general";
import { usePathname, useRouter } from "next/navigation";

const OPTION_STYLES = "focus:text-ui-blue text-[28px] leading-[31px]";

function Dropdown({ docs_url }: { docs_url: string }) {
  return (
    <div className="relative">
      <button className="focus:text-ui-blue group peer flex items-center justify-center gap-[20px] text-[28px] leading-[31px]">
        Resources
        <ChevronThin className="h-[16px] w-[16px] flex-shrink-0 transition-transform duration-200 group-focus:rotate-180" />
      </button>
      <div className="absolute left-0 flex w-full flex-col items-start gap-[24px] pl-[12px] pt-[24px] opacity-0 transition-opacity duration-200 focus:opacity-100 peer-focus:opacity-100">
        <KitButton
          href="/blog"
          sameBrowserTab
          variant="ghost"
          size="custom"
          className="w-[100px] !text-left text-[20px] leading-[22px]"
        >
          Blog
        </KitButton>
        <KitButton
          href={docs_url}
          withAnimatedArrow="to-top-right"
          variant="ghost"
          size="custom"
          className="flex min-w-[100px] items-center justify-between text-[20px] leading-[22px]"
        >
          Docs
        </KitButton>
      </div>
    </div>
  );
}

function Mobile() {
  const { data: rawData } = useGetQueryWithRefetchOnChange({
    key: "general",
    getFn: getData,
  });

  const [isOpen, setIsOpen] = React.useState(false);
  const { isVisible } = useHideOnScroll();
  const router = useRouter();
  const pathname = usePathname();

  const scrollTo = React.useCallback(
    (sectionId: string) => {
      if (pathname !== "/") router.push("/");
      setTimeout(
        () => {
          document.getElementById(sectionId)?.scrollIntoView({
            behavior: "smooth",
          });
          setIsOpen(false);
        },
        pathname !== "/" ? 500 : 0
      );
    },
    [pathname, router]
  );

  return (
    <>
      <nav
        aria-hidden={!isVisible}
        className="bg-ui-white fixed z-[100] flex w-screen items-center justify-between bg-opacity-[80%] py-[16px] pl-[20px] pr-[16px] font-medium backdrop-blur-[20px] transition-transform duration-300 aria-hidden:-translate-y-full lg:px-[52px] lg:py-[16px]"
      >
        <Logo />

        <button
          onClick={() => setIsOpen(true)}
          className="flex h-[32px] w-[32px] items-center justify-center"
        >
          <Menu />
        </button>
      </nav>

      <div
        aria-hidden={!isOpen}
        className="bg-ui-white aria-hidden: group fixed left-0 top-0 z-[100] flex h-screen w-screen flex-col overflow-hidden transition-all duration-500 aria-hidden:translate-x-[100%] aria-hidden:opacity-50"
      >
        <div className="flex items-center justify-between py-[16px] pl-[20px] pr-[16px] transition-transform duration-1000 group-aria-hidden:translate-x-[15%]">
          <Logo />
          <button
            onClick={() => setIsOpen(false)}
            className="flex h-[32px] w-[32px] items-center justify-center"
          >
            <Close className="text-ui-blue" />
          </button>
        </div>

        <div className="flex flex-1 flex-col justify-between px-[20px] pb-[140px] pt-[20px] transition-transform duration-1000 group-aria-hidden:translate-x-[15%]">
          <ul className="flex flex-col gap-[24px]">
            <li>
              <button
                onClick={() => scrollTo("how-it-works-section")}
                className={OPTION_STYLES}
              >
                How it works
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo("results-section")}
                className={OPTION_STYLES}
              >
                Customers
              </button>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <KitButton
                className={`${OPTION_STYLES} !text-left`}
                href="/pricing"
                variant="ghost"
                size="custom"
                sameBrowserTab={true}
              >
                Pricing
              </KitButton>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <KitButton
                className={`${OPTION_STYLES} !text-left`}
                href="/about"
                variant="ghost"
                size="custom"
                sameBrowserTab={true}
              >
                Company
              </KitButton>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <KitButton
                href="/blog"
                sameBrowserTab
                variant="ghost"
                size="custom"
                className={`${OPTION_STYLES} !text-left`}
              >
                Blog
              </KitButton>
            </li>
            {/* <li>
              <Dropdown docs_url={docs_url} />
            </li> */}
          </ul>

          <KitButton
            href='/book-demo'
            variant='primary'
            size='large'
            className='rounded-full bg-ui-black text-ui-whitest hover:bg-ui-blue w-full'>
            Book a call
          </KitButton>
        </div>

        <div className="from-ui-white to-ui-white/0 absolute bottom-0 left-0 -z-10 h-[50%] w-full bg-gradient-to-b via-white/60" />
        <DotPatternBackground
          className="top-[40%]"
          dotsSeparationPx={{ vertical: 35, horizontal: 35 }}
          dotWidthPxIncreasePerRow={0}
        />
      </div>
    </>
  );
}

export default Mobile;
