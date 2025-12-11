"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cx } from "@/lib/classnames";
import { Grid } from "@/components/home/grid/gridRoot";
import Link from "next/link";

export function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cx(
        "w-full h-fit pt-16 md:h-16 md:pt-0 md:sticky md:top-0 md:z-50",
        "md:bg-background/75 md:backdrop-blur-[15px]",
        "border-b-[0.5px] transition-all duration-300 ease-in-out",
        isScrolled ? "border-border/50" : "border-transparent"
      )}
    >
      <Grid className="h-full items-center">
        {/* Logo */}
        <div className="col-span-6 md:col-span-2 flex items-center">
          <Link href="/" aria-label="GrowthX Home">
            <svg
              width="113"
              height="18"
              viewBox="0 0 113 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[18px] w-auto"
            >
              <path d="M110.886 15.2056C111.552 15.2056 112.093 15.7504 112.093 16.4222C112.093 17.094 111.553 17.6388 110.886 17.6388C110.219 17.6388 109.681 17.094 109.681 16.4222C109.681 15.7504 110.221 15.2056 110.886 15.2056ZM110.886 15.4486C110.353 15.4486 109.922 15.8838 109.922 16.4222C109.922 16.9606 110.353 17.3958 110.886 17.3958C111.42 17.3958 111.851 16.9606 111.851 16.4222C111.851 15.8838 111.42 15.4486 110.886 15.4486ZM110.946 15.8139C111.179 15.8139 111.368 16.0045 111.368 16.2396C111.368 16.3936 111.286 16.5286 111.165 16.6033L111.471 17.0305H111.174L110.911 16.6652H110.644V17.0305H110.403V15.8139H110.946ZM110.946 16.0569H110.644V16.4222H110.946C111.04 16.4222 111.117 16.3491 111.125 16.257V16.2396C111.125 16.1379 111.045 16.0569 110.946 16.0569Z" fill="#151515"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M18.7015 4.38654V17.6417H21.9833V7.70113H25.4995V4.38812H18.6999L18.7015 4.38654Z" fill="#151515"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M32.771 7.45986C31.0294 7.45986 29.4892 8.9766 29.4892 11.0095C29.4892 13.0424 31.0294 14.5592 32.771 14.5592C34.5126 14.5592 36.0528 13.0424 36.0528 11.0095C36.0528 8.9766 34.5126 7.45986 32.771 7.45986ZM26.2074 11.0111C26.2074 7.2931 29.0754 4.14685 32.7726 4.14685C36.4697 4.14685 39.3377 7.2931 39.3377 11.0111C39.3377 14.7291 36.4697 17.8753 32.7726 17.8753C29.0754 17.8753 26.2074 14.7291 26.2074 11.0111Z" fill="#151515"/>
              <path d="M52.6378 17.6417H56.2752L60.8659 4.38809H57.3874L54.5493 13.5537L52.3499 5.80795C51.6529 3.61622 48.5804 3.61622 47.885 5.80795L45.7045 13.4949L42.967 4.38809H39.4964L43.933 17.6417H47.5814L50.1175 8.32368L52.6378 17.6417Z" fill="#151515"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M62.3144 1.54715H65.5962V4.38687H69.1124V7.69988H65.5962V14.3275H69.1124V17.6405H67.2371C64.5185 17.6405 62.3129 15.4154 62.3129 12.6694V1.54715H62.3144Z" fill="#151515"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M70.9869 0.00799561H74.2687V4.38669H77.5505C80.269 4.38669 82.4747 6.61178 82.4747 9.35779V17.6419H79.1929V7.70129H74.2687V17.6419H70.9869V0.00799561Z" fill="#151515"/>
              <path d="M3.30225 8.99395C3.30225 5.80482 5.71876 3.36374 8.53016 3.36374C10.223 3.36374 11.5996 4.09114 12.5246 5.30136H16.3083C15.0245 2.25041 12.2619 0.0300903 8.52859 0.0300903C3.74276 0.0300903 0 4.12132 0 8.99395C0 13.8666 3.73332 17.9578 8.52229 17.9578C11.082 17.9578 13.2436 17.043 14.7634 15.45C16.2721 13.8682 17.0446 11.7288 17.0446 9.45612V7.79009H8.52859V11.1237H13.5174C13.2908 11.9163 12.9006 12.5992 12.3862 13.1392C11.5477 14.0175 10.2749 14.6257 8.52387 14.6257C5.71562 14.6257 3.30382 12.1863 3.30382 8.99554L3.30225 8.99395Z" fill="#151515"/>
              <path d="M108.411 0.00158821H103.805C101.422 0.00158821 99.2143 1.26739 97.9934 3.33524L96.5413 5.79538L90.7392 0.00317642H82.4702L91.6517 9.16715C92.24 9.76114 93.2926 10.5378 93.8117 10.8268C93.84 10.8427 93.829 10.8856 93.796 10.8856H85.9848V17.6403H87.0766C89.4601 17.6403 91.6674 16.3745 92.8882 14.3066L94.3388 11.8481L100.142 17.6403H108.411L98.8304 8.07764C98.2829 7.52494 97.7071 7.06913 97.1329 6.81501C97.1014 6.80072 97.1108 6.75466 97.1454 6.75466H108.413V0L108.411 0.00158821Z" fill="#151515"/>
            </svg>
          </Link>
        </div>

        {/* Navigation Links - positioned left to avoid sticky button on right */}
        <div className="col-span-6 md:col-span-4 md:col-start-3 flex items-center gap-2 lg:gap-3 h-full">
          <Link
            href="/about"
            className={cx(
              "relative inline-flex items-center text-sm transition-all px-3 h-full",
              "after:absolute after:bottom-[-0.5px] after:h-[0.5px] after:transition-all",
              pathname === "/about"
                ? "text-foreground after:bg-foreground after:left-3 after:right-3"
                : "text-foreground/40 after:bg-transparent after:left-3 after:right-3 hover:text-foreground/60"
            )}
          >
            <span className="inline-block">Company</span>
          </Link>
          <Link
            href="/careers"
            className={cx(
              "relative inline-flex items-center text-sm transition-all px-3 h-full",
              "after:absolute after:bottom-[-0.5px] after:h-[0.5px] after:transition-all",
              pathname === "/careers"
                ? "text-foreground after:bg-foreground after:left-3 after:right-3"
                : "text-foreground/40 after:bg-transparent after:left-3 after:right-3 hover:text-foreground/60"
            )}
          >
            <span className="inline-block">Careers</span>
          </Link>
          <Link
            href="/blog"
            className={cx(
              "relative inline-flex items-center text-sm transition-all px-3 h-full",
              "after:absolute after:bottom-[-0.5px] after:h-[0.5px] after:transition-all",
              pathname === "/blog" || pathname?.startsWith("/blog/")
                ? "text-foreground after:bg-foreground after:left-3 after:right-3"
                : "text-foreground/40 after:bg-transparent after:left-3 after:right-3 hover:text-foreground/60"
            )}
          >
            <span className="inline-block">News</span>
          </Link>
        </div>
      </Grid>
    </nav>
  );
}
