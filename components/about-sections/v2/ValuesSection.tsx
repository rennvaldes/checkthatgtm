"use client";

import React, { useEffect, useRef, useState } from "react";
import ContentLayout from "@/components/layout/ContentLayout";
import Spacer from "@/components/common/Spacer";

function Separator({ lineRef }: { lineRef: React.RefObject<HTMLDivElement> }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const update = () => {
      const hr = ref.current;
      const line = lineRef.current;
      if (!hr) return;

      const hrBox = hr.getBoundingClientRect();
      const lineBox = line?.getBoundingClientRect();
      if (!lineBox || lineBox.width === 0 || lineBox.height === 0) {
        setOffset(0);
        return;
      }
      const railCenterX = lineBox.left + lineBox.width / 2;
      const GAP = 6;
      const start = Math.max(0, Math.min(railCenterX - hrBox.left + GAP, hrBox.width));
      setOffset(start);
    };
    const onResize = () => requestAnimationFrame(update);
    update();
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onResize, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onResize);
    };
  }, [lineRef]);

  return (
    <div
      ref={ref}
      className="my-6 md:my-8 h-px w-full"
      style={{
        background: `linear-gradient(to right, rgba(0,0,0,0) 0, rgba(0,0,0,0) ${offset}px, rgba(149,149,149,0.6) ${offset}px, rgba(149,149,149,0.6) 100%)`,
      }}
    />
  );
}

export default function ValuesSection() {
  const lineRef = useRef<HTMLDivElement | null>(null);
  const ballRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  const values: {
    number: string;
    title: string;
    description: string;
  }[] = [
    {
      number: "01",
      title: "Communicate with clarity",
      description:
        "Say it simply. We explain complex ideas clearly and directly. Clear writing and speaking builds trust and alignment. We tackle issues head-on and avoid jargon.",
    },
    {
      number: "02",
      title: "Relentless excellence",
      description:
        "Good isn’t enough. We hold high standards in everything we do. We take pride in quality and constant improvement. Feedback is essential to raising the bar.",
    },
    {
      number: "03",
      title: "Never stop learning",
      description:
        "Always stay curious. We push ourselves to grow and adapt. We ask questions, challenge assumptions, and seek out new skills. Curiosity keeps us sharp and future‑ready.",
    },
    {
      number: "04",
      title: "Move fast, stay steady",
      description:
        "Speed with judgment. We act quickly without breaking things. We take smart risks and adjust fast when needed. We balance urgency with stability and scale.",
    },
    {
      number: "05",
      title: "Lead with empathy",
      description:
        "Kindness wins. We treat others with respect and humility. We lift each other up and act with care. Awareness of our impact makes us stronger as a team.",
    },
    {
      number: "06",
      title: "Own the outcome",
      description:
        "Be accountable. We don’t wait for permission—we take action. Each of us is responsible for results. We solve problems and take initiative.",
    },
    {
      number: "07",
      title: "Master the process first",
      description:
        "Fix the process. We don’t throw tech at bad workflows. We start with first principles and get the basics right. Automation comes after the process works well.",
    },
  ];

  useEffect(() => {
    const update = () => {
      const line = lineRef.current;
      const ball = ballRef.current;
      if (!line || !ball) return;
      const lr = line.getBoundingClientRect();
      const br = ball.getBoundingClientRect();
      const ballCenter = br.top + br.height / 2;
      const p = Math.max(0, Math.min((ballCenter - lr.top) / Math.max(lr.height, 1), 1));
      setProgress(p);
    };
    const onScroll = () => requestAnimationFrame(update);
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section>
      <div className="container mx-auto px-4 relative">
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-12 h-full">
            <div className="hidden md:block md:col-start-2 md:col-span-1 relative">
              <div
                ref={lineRef}
                className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #F7D34E, #E3B300), linear-gradient(#959595, #959595)",
                  backgroundRepeat: "no-repeat, no-repeat",
                  backgroundSize: `100% ${(progress * 100).toFixed(2)}%, 100% 100%`,
                  backgroundPosition: "top, top",
                }}
              />
              <div className="sticky top-[16%]">
                <div
                  ref={ballRef}
                  className="relative left-1/2 -translate-x-1/2 w-5 h-5 lg:w-6 lg:h-6 rounded-full p-[2px] will-change-transform shadow-[0_4px_10px_rgba(0,0,0,0.25)]"
                  style={{
                    background: "linear-gradient(to bottom, #EDBE00, #4F3F00)",
                  }}
                >
                  <div
                    className="w-full h-full rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.35)]"
                    style={{
                      background: "linear-gradient(to bottom, #FFCC00, #E7B900)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>


        <ContentLayout
          className="items-start"
          leftContent={<div className="text-sm text-[#303030]">Values</div>}
          rightContent={
            <div className="flex flex-col gap-8 xl:gap-14">
              <h2 className="text-black text-3xl md:text-5xl tracking-tighter">
                How we work
                <br />
                <span className="text-primary-gray">From strategy to output</span>
              </h2>

              <div className="flex flex-col gap-4">
                {values.map((v) => (
                  <div
                    key={v.number}
                    className="flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-12 p-6 md:p-8 border border-[#DCD9D5] bg-transparent"
                  >
                    <div className="min-w-[60px] text-primary-gray font-light tracking-tight text-3xl flex flex-col md:col-span-4">
                      {v.number}
                      <h4 className="text-primary-black text-3xl font-semibold mb-3 leading-[1] tracking-tighter">
                        {v.title}
                      </h4>
                    </div>
                    <div className="md:col-span-8">
                      <p className="text-2xl leading-[1.36] font-light text-[#303030]">{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }
          leftClassName="md:text-base"
        />
      </div>
    </section>
  );
}