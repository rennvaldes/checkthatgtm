"use client";

import { usePathname } from "next/navigation";
import FooterV2 from "@/components/layout/Footer/v2";
import { FooterCtaSection, SitemapSection } from "@/components/home/footer";

export default function ConditionalFooter() {
  const pathname = usePathname();

  // Don't render footer on homepage
  if (pathname === "/") {
    return null;
  }

  // Use new footer for legal pages, careers, about page, and blog
  const useNewFooter = 
    pathname?.startsWith("/legal/") || 
    pathname === "/careers" || 
    pathname === "/about" ||
    pathname === "/blog" ||
    pathname?.startsWith("/blog/");

  if (useNewFooter) {
    return (
      <>
        <FooterCtaSection />
        <SitemapSection />
      </>
    );
  }

  return <FooterV2 />;
}
