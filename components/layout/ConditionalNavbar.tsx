"use client";

import { usePathname } from "next/navigation";
import { NavigationBar } from "@/components/navigation/navigationBar";

export default function ConditionalNavbar() {
  const pathname = usePathname();

  // Don't render navbar on homepage
  if (pathname === "/") {
    return null;
  }

  // Blog article pages - show back button
  if (pathname?.startsWith("/blog/") && pathname !== "/blog") {
    return (
      <NavigationBar
        showBackButton
        backButtonHref="/blog"
        backButtonLabel="News overview"
        enableScrollAway
      />
    );
  }

  // About page - scroll-away + CTA after ~400px (past hero)
  if (pathname === "/about") {
    return <NavigationBar enableScrollAway showMobileCtaAfter={400} />;
  }

  // All other pages use new unified navigation
  return <NavigationBar enableScrollAway />;
}
