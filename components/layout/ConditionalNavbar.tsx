"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import StyledNavbar from "@/components/layout/Navbar/StyledNavbar";
import { NavigationBar } from "@/components/home/footer";

export default function ConditionalNavbar() {
  const pathname = usePathname();

  // Don't render navbar on homepage
  if (pathname === "/") {
    return null;
  }

  // Use homepage navbar for careers and blog pages
  if (pathname === "/careers" || pathname?.startsWith("/blog")) {
    return <NavigationBar />;
  }

  // Use styled navbar for about/company page
  if (pathname === "/about") {
    return <StyledNavbar />;
  }

  return <Navbar />;
}
