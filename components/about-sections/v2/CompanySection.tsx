"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import GrowthxLogo from "@/assets/img/v2/growthx_logo.png";

type CompanySectionProps = {
  paragraphs?: string[];
  className?: string;
};

export default function CompanySection({
  paragraphs = [
    "At GrowthX, we believe the future isn’t just building better tools—it’s treating services like software. We structure knowledge work as living code: versioned, observed, and continuously improved through AI-driven workflows with expert refinement at the core.",
    "Our services aren’t static deliverables—they are dynamic, scalable workflows that learn, adapt, and compound value over time. We aren’t here to sell hours or software licenses. We build engines for growth that operate like the best software platforms: fast, flexible, and relentlessly outcome-focused.",
  ],
  className = "",
}: CompanySectionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [displayProgress, setDisplayProgress] = useState(0);


  const chars = useMemo(() => {
    const parts: { ch: string; key: string }[] = [];
    paragraphs.forEach((p, i) => {
      for (let j = 0; j < p.length; j++) {
        parts.push({ ch: p[j], key: `${i}-${j}` });
      }
      if (i < paragraphs.length - 1) parts.push({ ch: "\n", key: `nl-${i}` });
    });
    return parts;
  }, [paragraphs]);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const el = containerRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight;

        const start = vh * 0.10;
        const end = vh * 0.65;
        const visible = Math.min(Math.max(end - (rect.top - start), 0), end - start);
        const p = Math.max(0, Math.min(visible / (end - start), 1));
        setProgress(p);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll as any);
      window.removeEventListener("resize", onScroll as any);
    };
  }, []);

  useEffect(() => {
    let rafId: number;
    const animate = () => {
      setDisplayProgress((prev) => {
        const target = Math.max(0, Math.min(progress, 1));
        const delta = target - prev;
        const step = delta * 0.1;
        if (Math.abs(delta) < 0.001) return target;
        return prev + step;
      });
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [progress]);

  const readCount = Math.floor(displayProgress * chars.length);

  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <div
          ref={containerRef}
          className="rounded-sm p-6 md:p-8 lg:p-12 max-h-[900px] overflow-hidden"
          style={{ backgroundColor: "#E6E3DE" }}
        >

          <div
            className="whitespace-pre-wrap tracking-tighter leading-snug text-2xl lg:text-[42px] max-w-[950px] mx-auto"
          >
            <div className="relative w-[137px] h-[30px] mb-8">
              <Image src={GrowthxLogo} alt="GrowthX" fill className="object-contain" sizes="137px" />
            </div>
            {chars.map((c, idx) => {
              if (c.ch === "\n") {
                return (
                  <span key={c.key}>
                    <br />
                    <br />
                  </span>
                );
              }
              const isRead = idx < readCount;
              const className = isRead ? "text-[#303030]" : "text-primary-gray";
              return (
                <span key={c.key} className={className}>
                  {c.ch}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}