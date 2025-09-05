"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

export default function AnimatedDescription({
  text,
  paragraphs,
  className = "",
  withBackground = true,
}: {
  text?: string;
  paragraphs?: string[];
  className?: string;
  withBackground?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [displayProgress, setDisplayProgress] = useState(0);

  const contentParagraphs = useMemo(() => {
    if (Array.isArray(paragraphs) && paragraphs.length > 0) return paragraphs;
    if (typeof text === 'string' && text.trim().length > 0) return [text];
    return [] as string[];
  }, [text, paragraphs]);

  const chars = useMemo(() => {
    const parts: { ch: string; key: string }[] = [];
    contentParagraphs.forEach((p, i) => {
      for (let j = 0; j < p.length; j++) parts.push({ ch: p[j], key: `${i}-${j}` });
      if (i < contentParagraphs.length - 1) parts.push({ ch: "\n", key: `nl-${i}` });
    });
    return parts;
  }, [contentParagraphs]);

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

  if (chars.length === 0) return null;

  return (
    <section className={["relative w-full", className].join(" ")}> 
      <div
        ref={containerRef}
        className={[
          "rounded-sm",
          withBackground ? "p-6 md:p-8 lg:p-12" : "p-0",
        ].join(" ")}
        style={withBackground ? { backgroundColor: "#E6E3DE" } : undefined}
      >
        <div className="whitespace-pre-wrap tracking-tighter leading-[1.2] text-2xl lg:text-[32px] max-w-[950px] mx-auto">
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
            const chClass = isRead ? "text-[#303030]" : "text-primary-gray";
            return (
              <span key={c.key} className={chClass}>
                {c.ch}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
