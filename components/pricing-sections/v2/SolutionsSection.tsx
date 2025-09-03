"use client";

import { useEffect, useRef, useState } from "react";
import ContentLayout from "@/components/layout/ContentLayout";
import Spacer from "@/components/common/Spacer";
import Blackhole from "@/components/icons/Blackhole";
import BlackholeV2 from "@/components/icons/BlackholeV2";
import Hashtag from "@/components/icons/Hashtag";
import Server from "@/components/icons/Server";
import Fire from "@/components/icons/Fire";
import GridIcon from "@/components/icons/Grid";

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

export default function SolutionsSection() {
  const lineRef = useRef<HTMLDivElement | null>(null);
  const ballRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  const contentItems = [
    { title: "Dedicated AI Growth Strategist", Icon: Blackhole },
    { title: "Fine tuned expert + AI content machine", Icon: BlackholeV2 },
    { title: "Monitoring hub for AI mentions, citations and search rankings", Icon: Hashtag },
  ];

  const distributionItems = [
    { title: "Custom content distribution plan", Icon: Server },
    { title: "Content repurposing machine from newsletters to socials", Icon: Fire },
    { title: "Social signals monitoring", Icon: GridIcon },
  ];

  const conversionItems = [
    { title: "A proven system to drive down-funnel metrics", Icon: Server },
    { title: "Lead magnets targeted to your ICP", Icon: Fire },
  ];

  const sections: {
    key: string;
    label: string;
    heading: React.ReactNode;
    items: { title: string; Icon: (props: { className?: string }) => JSX.Element }[];
  }[] = [
    {
      key: "content",
      label: "Content",
      heading: (
        <h3 className="text-primary-black tracking-tighter font-semibold text-2xl md:text-4xl">
          Build a content foundation to <br />win GEO and SEO.
        </h3>
      ),
      items: contentItems,
    },
    {
      key: "distribution",
      label: "Distribution",
      heading: (
        <h3 className="text-primary-black tracking-tighter font-semibold text-2xl md:text-4xl">
          Show up where your customers are searching <br />from search to AI engines.
        </h3>
      ),
      items: distributionItems,
    },
    {
      key: "conversion",
      label: "Conversion",
      heading: (
        <h3 className="text-primary-black tracking-tighter font-semibold text-2xl md:text-4xl">
          Convert your audience with <br />high quality offers.
        </h3>
      ),
      items: conversionItems,
    },
  ];

  const gridColsClass = (len: number) => {
    if (len === 2) return "md:grid-cols-2";
    if (len === 3) return "md:grid-cols-3";
    if (len === 4) return "md:grid-cols-4";
    return "md:grid-cols-3";
  };

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
      <div className="container mx-auto px-4">
        <ContentLayout
          className="items-start mb-8 md:mb-12"
          leftContent={<div className="text-sm text-[#303030]">Solutions</div>}
          rightContent={
            <h2 className="text-black text-3xl md:text-5xl">
            AI-native marketing <br />
            <span className="text-primary-gray">
              For companies in hypergrowth 
            </span>
          </h2>
        }
        leftClassName="md:text-base"
        description="With human expertise and AI working in sync, we deliver insights and content that fuel momentum, amplify your voice, and accelerate growth."
        descriptionClassName="text-primary-black text-2xl mt-8"
      />
      </div>

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

        {sections.map((section, idx) => (
          <div key={section.key}>
            <ContentLayout
              className="items-start mb-10 md:mb-14"
              leftContent={<div className="text-sm text-[#303030]">{section.label}</div>}
              rightContent={
                <div>
                  {section.heading}
                  <div className={`mt-6 grid gap-3 sm:gap-4 ${gridColsClass(section.items.length)}`}>
                    {section.items.map(({ title, Icon }) => (
                      <div key={title} className="bg-[#E6E3DE] border border-primary-gray p-4 md:p-5 min-h-[88px]">
                        <Icon className="w-5 h-5" />
                        <div className="mt-3 text-primary-black font-semibold tracking-tighter leading-tight text-[26px]">{title}</div>
                      </div>
                    ))}
                  </div>
                </div>
              }
              leftClassName="md:text-base"
            />
            {idx < sections.length - 1 && <Separator lineRef={lineRef} />}
          </div>
        ))}
      </div>
      <Spacer size="xl" />
    </section>
  );
}
