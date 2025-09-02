"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Footer V2: Newsletter + 3 columns + bottom bar
// Background: black, text: white/gray, CTA button gradient FF6493->D41651? The design shows yellow; keeping site primary gradient from Button primary? Here we use a golden gradient to match screenshot.

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
          className="flex-1 bg-transparent text-white placeholder-white/60 px-5 py-3.5 md:py-4 outline-none tracking-tight"
        />
        <button
          type="submit"
          disabled={loading}
          aria-label="Subscribe"
          className="m-1 rounded-full px-5 md:px-6 py-2 md:py-2.5 text-black font-medium bg-gradient-to-b from-[#FFD54D] to-[#FFC107] shadow-[inset_0_-2px_0_rgba(0,0,0,0.25)] hover:brightness-105 disabled:opacity-60"
        >
          →
        </button>
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
        { label: "Blog", href: "/blog" },
        { label: "Tools", href: "/tools" },
        { label: "Guides", href: "/guides" },
      ],
    },
    {
      title: "Social",
      links: [
        { label: "LinkedIn →", href: "https://www.linkedin.com/company/growthxai", external: true },
        { label: "Twitter →", href: "https://twitter.com/growthxai", external: true },
      ],
    },
  ];

  return (
    <footer className="bg-black text-white flex flex-col lg:min-h-[600px]">
      <div className="container mx-auto px-4 py-14 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Logo + Headline + Newsletter */}
          <div className="lg:col-span-6">
            <div className="mb-6">
              {/* Logo */}
              <div className="h-6 w-6 relative">
                <Image src="/_icon.svg" alt="GrowthX" fill sizes="24px" className="object-contain invert" />
              </div>
            </div>
            <h3 className="text-2xl md:text-[32px] leading-tight tracking-tight font-medium">
              Subscribe to the
              <br />
              GrowthX Newsletter
            </h3>
            <NewsletterForm />
          </div>

          {/* Right: Columns */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {columns.map((col) => (
              <div key={col.title}>
                <div className="text-white/70 font-medium mb-4 tracking-tight">{col.title}</div>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label} className="tracking-tight">
                      {l.external ? (
                        <a href={l.href} target="_blank" rel="noreferrer" className="text-white/80 hover:text-white">
                          {l.label}
                        </a>
                      ) : (
                        <Link href={l.href} className="text-white/80 hover:text-white">
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

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="text-white/60 text-sm tracking-tight">©{new Date().getFullYear()} GrowthX. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
