"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";

export default function ConditionalNavbar() {
  const pathname = usePathname();

  // Don't render navbar on homepage
  if (pathname === "/") {
    return null;
  }

  return <Navbar />;
}
