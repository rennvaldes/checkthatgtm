"use client";

import { cx } from "@/lib/classnames";
import { GridRoot } from "@/components/home/grid/gridRoot";
import { StickyBookButton } from "./stickyBookButton";
import { RadarBackground } from "./radarBackground";
import { useState, useEffect } from "react";
import { useIsMobile, usePrefersReducedMotion } from "@/lib/hooks";

interface HeroTextProps {
  className?: string;
}

const textSets = [
  {
    line1: "The Public Record",
    line2: "of AI Visibility.",
  },
  {
    line1: "We're building an open way",
    line2: "to track how AI sees your market.",
  },
  {
    line1: "See who AI favors in your category,",
    line2: "and why.",
  },
];

export function HeroText({ className }: HeroTextProps) {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [displayText1, setDisplayText1] = useState("");
  const [displayText2, setDisplayText2] = useState("");
  const [phase, setPhase] = useState<"typing1" | "typing2" | "pause" | "fadeout">("typing1");
  const [opacity, setOpacity] = useState(1);
  const isMobile = useIsMobile();
  const prefersReducedMotion = usePrefersReducedMotion();
  const shouldAnimate = !isMobile && !prefersReducedMotion;

  useEffect(() => {
    if (shouldAnimate) return;

    // Mobile/reduced-motion: keep it fast and stable.
    setCurrentSetIndex(0);
    setDisplayText1(textSets[0].line1);
    setDisplayText2(textSets[0].line2);
    setPhase("pause");
    setOpacity(1);
  }, [shouldAnimate]);

  useEffect(() => {
    if (!shouldAnimate) return;

    const currentSet = textSets[currentSetIndex];
    
    const typingSpeed = 25; // Consistent, fast speed
    
    if (phase === "typing1") {
      // Type line 1
      if (displayText1.length < currentSet.line1.length) {
        const timeout = setTimeout(() => {
          setDisplayText1(currentSet.line1.slice(0, displayText1.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Brief pause before line 2
        const timeout = setTimeout(() => {
          setPhase("typing2");
        }, 100);
        return () => clearTimeout(timeout);
      }
    } else if (phase === "typing2") {
      // Type line 2
      if (displayText2.length < currentSet.line2.length) {
        const timeout = setTimeout(() => {
          setDisplayText2(currentSet.line2.slice(0, displayText2.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Pause before next set
        const timeout = setTimeout(() => {
          setPhase("pause");
        }, 300);
        return () => clearTimeout(timeout);
      }
    } else if (phase === "pause") {
      // Pause for 2.5 seconds, then fade out
      const timeout = setTimeout(() => {
        setPhase("fadeout");
        setOpacity(0);
      }, 2500);
      return () => clearTimeout(timeout);
    } else if (phase === "fadeout") {
      // Wait for fade out, then switch to next set
      const timeout = setTimeout(() => {
        setDisplayText1("");
        setDisplayText2("");
        setCurrentSetIndex((prev) => (prev + 1) % textSets.length);
        setOpacity(1);
        setPhase("typing1");
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [displayText1, displayText2, phase, currentSetIndex, shouldAnimate]);

  return (
    <section className={cx("pb-32 relative", className)}>
      <RadarBackground />
      {/* Title */}
      <GridRoot size="normal" className="pt-[264px] desktop:pt-[338px]">
        <h1 
          className="text-[clamp(50px,50px+(78-50)*(100vw-375px)/(1112-375),78px)] leading-[0.89] tracking-[-0.07em] min-h-[240px] transition-opacity duration-500 ease-in-out"
          style={{ opacity }}
        >
          {currentSetIndex === 0 ? (
            /* First set: 2 lines */
            <>
              <span className="text-foreground font-bold block">
                {displayText1}
              </span>
              <span className="font-bold block" style={{color: "#0ABF53"}}>
                {displayText2}
              </span>
            </>
          ) : (
            /* Second and third sets: inline on mobile, separate lines on desktop */
            <>
              <span className="text-foreground font-bold inline desktop:block">
                {displayText1}
              </span>
              <span className="font-bold inline desktop:block" style={{color: "#0ABF53"}}>
                {" "}{displayText2}
              </span>
            </>
          )}
        </h1>
      </GridRoot>

      {/* Description Row */}
      <GridRoot size="normal">
        <div className="desktop:grid desktop:grid-cols-[5fr_16fr_5fr] desktop:gap-0">
          <span className="block text-sm leading-none tracking-[-0.03em] text-muted-foreground font-normal mb-3 desktop:mb-0">
            AI Visibility Index
          </span>
          <div>
            <p className="text-[20px] desktop:text-2xl font-[600] leading-normal desktop:leading-tight tracking-[-0.06em]">
              CheckThat is the Open AI Visibility Index. Track your brand across real prompts, see what&apos;s shifting, and get a 5-day action plan to become AEO-ready.
            </p>
          </div>
          <div className="flex justify-start desktop:justify-end mt-6 desktop:mt-0">
            <StickyBookButton />
          </div>
        </div>
      </GridRoot>
    </section>
  );
}
