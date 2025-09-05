"use client";

import React from "react";
import Image from "next/image";

type Stat = { label: string; value: string };

export default function QuoteHero({
  quote,
  author,
  role,
  authorAvatar,
  companyLogo,
  stats = [],
  className = "",
  isLoading = false,
}: {
  quote: string;
  author?: string;
  role?: string;
  authorAvatar?: string;
  companyLogo?: string;
  stats?: Stat[];
  className?: string;
  isLoading?: boolean;
}) {
  return (
    <section className={["w-full", className].join(" ")}> 
      <div className="rounded-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-3">
          {/* Left: Quote card */}
          <div>
            <div className="bg-[#EAE8E4] p-4 md:p-6 lg:p-8">
              {isLoading ? (
                <div className="space-y-3">
                  <div className="h-6 bg-black/10" />
                  <div className="h-6 bg-black/10 w-5/6" />
                  <div className="h-6 bg-black/10 w-2/3" />
                </div>
              ) : (
                <blockquote className="text-lg md:text-xl lg:text-[22px] leading-tight tracking-tight text-primary-black">
                  {quote}
                </blockquote>
              )}
              {(author || role || authorAvatar || companyLogo) && (
                <div className="mt-5 flex items-start gap-4">
                  {authorAvatar ? (
                    <div className="relative w-16 h-16 md:w-20 md:h-20 overflow-hidden bg-white">
                      <Image src={authorAvatar} alt={author || "Author"} fill className="object-cover" sizes="80px" />
                    </div>
                  ) : null}
                  <div className="flex-1">
                    {isLoading ? (
                      <>
                        <div className="h-5 bg-black/10 w-40" />
                        <div className="h-4 bg-black/10 w-56 mt-2" />
                        <div className="h-6 bg-black/10 w-28 mt-3" />
                      </>
                    ) : (
                      <>
                        {author ? (
                          <div className="text-primary-black font-semibold">{author}</div>
                        ) : null}
                        {role ? (
                          <div className="text-primary-gray text-sm">{role}</div>
                        ) : null}
                        {companyLogo ? (
                          <div className="relative w-24 h-6 md:w-28 md:h-7 opacity-90 mt-3">
                            <Image src={companyLogo} alt="Company" fill className="object-contain" sizes="112px" />
                          </div>
                        ) : null}
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Stats rail */}
          <div className="">
            <div className="flex flex-col h-full [--gap:8px] md:[--gap:12px]">
              {(() => {
                const list = (stats && stats.length > 0 ? stats : [1, 2, 3]).slice(0, 3);
                const count = list.length;
                const heightCalc = `calc((100% - (var(--gap) * ${count - 1})) / ${count})`;
                return list.map((s: any, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 md:p-6 bg-[#EAE8E4]"
                    style={{ height: heightCalc, marginTop: idx === 0 ? 0 : 'var(--gap)' }}
                  >
                    {isLoading ? (
                      <>
                        <div className="h-4 bg-black/10 w-40" />
                        <div className="h-6 bg-black/10 w-16" />
                      </>
                    ) : (
                      <>
                        <div className="text-primary-black text-sm md:text-base">{typeof s === 'object' ? s.label : '—'}</div>
                        <div className="text-primary-black text-3xl md:text-4xl font-semibold">{typeof s === 'object' ? s.value : '—'}</div>
                      </>
                    )}
                  </div>
                ));
              })()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
