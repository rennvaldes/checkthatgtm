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

  // Use homepage navbar for careers, blog, and about pages
  if (pathname === "/careers" || pathname?.startsWith("/blog") || pathname === "/about") {
    return <NavigationBar />;
  }

  return <Navbar />;
}
