"use client";

import { usePathname } from "next/navigation";
import FooterV2 from "@/components/layout/Footer/v2";

export default function ConditionalFooter() {
  const pathname = usePathname();

  // Don't render footer on homepage
  if (pathname === "/") {
    return null;
  }

  return <FooterV2 />;
}
