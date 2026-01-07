"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/common/Button";
import LogoSvg from "@/assets/img/v2/icons/logo.svg";
import ArrowRight16 from "@/components/icons/ArrowRight16";
import { usePathname } from "next/navigation";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      setLoading(true);
      setStatus(null);
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Subscribe failed");
      setStatus({ ok: true, msg: "Subscribed!" });
      setEmail("");
    } catch (err) {
      setStatus({ ok: false, msg: "Something went wrong" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="w-full max-w-xl mt-6 md:mt-8">
      <div className="flex rounded-full overflow-hidden bg-white/10 border border-white/10">
        <input
          type="email"
          required
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-transparent text-white placeholder-white/60 px-5 py-3.5 md:py-4 outline-hidden tracking-tight"
        />
        <Button
          type="submit"
          disabled={loading}
          size="sm"
          className="m-2"
          ariaLabel="Subscribe"
        >
          <ArrowRight16 className="w-4 h-4" />
        </Button>
      </div>
      {status && (
        <div className={`mt-2 text-sm ${status.ok ? "text-green-400" : "text-red-400"}`}>
          {status.msg}
        </div>
      )}
    </form>
  );
}

export default function FooterV2() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const isBlog = pathname?.includes("/blog");
  const isPricing = pathname?.includes("/pricing");
  const isCaseStudy = pathname?.includes("/case-study");
  const isPages = pathname?.includes("/learn");
  const columns: { title: string; links: { label: string; href: string; external?: boolean }[] }[] = [
    {
      title: "Company",
      links: [
        { label: "Pricing", href: "/pricing" },
        { label: "Our results", href: "/#results" },
        { label: "How it works", href: "/#how-it-works" },
        { label: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "News", href: "/blog" },
        { label: "Tools", href: "/tools" },
        { label: "Guides", href: "/guides" },
        { label: "AI Visibility", href: "https://checkthat.ai", external: true },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/legal/privacy-policy" },
        { label: "Terms of Service", href: "/legal/terms-of-service" },
        { label: "Cookie Policy", href: "/legal/cookie-policy" },
        { label: "Data Processing Addendum", href: "/legal/data-processing-addendum" },
        { label: "Subprocessors", href: "/legal/subprocessors" },
      ],
    },
    {
      title: "Social",
      links: [
        { label: "LinkedIn →", href: "https://www.linkedin.com/company/growthx-ai", external: true },
        { label: "Twitter →", href: "https://twitter.com/growthxai", external: true },
      ],
    }
  ];

  return (
    <footer
      className={[
        "bg-black text-white flex flex-col lg:min-h-[600px]",
        isPages
          ? "pt-40 md:pt-48"
          : (isAbout || isBlog || isCaseStudy || isPricing || isHome ? "pt-24 md:pt-32" : ""),
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="container mx-auto px-4 py-14 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <div className="mb-6">
              <div className="h-6 w-6 relative">
                <Image src={LogoSvg} alt="GrowthX" sizes="24px" className="object-contain" />
              </div>
            </div>
            <h3 className="text-2xl md:text-[32px] leading-tight tracking-tight font-medium">
              Subscribe to the
              <br />
              GrowthX Newsletter
            </h3>
            <NewsletterForm />
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-8 md:gap-10">
            {columns.map((col) => (
              <div key={col.title}>
                <div className="text-white font-medium mb-4 tracking-tight cursor-pointer">{col.title}</div>
                <ul className="space-y-4 mt-5">
                  {col.links.map((l) => (
                    <li key={l.label} className="tracking-tight">
                      {l.external ? (
                        <a href={l.href} target="_blank" rel="noreferrer" className="text-[#9c9c9c] hover:text-white">
                          {l.label}
                        </a>
                      ) : (
                        <Link href={l.href} className="text-[#9c9c9c] hover:text-white">
                          {l.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="text-white/60 text-sm tracking-tight">©{new Date().getFullYear()} GrowthX. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
