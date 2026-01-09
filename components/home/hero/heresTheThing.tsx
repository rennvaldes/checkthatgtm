"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { GridRoot } from "@/components/home/grid/gridRoot";

const paragraphs = [
  "We got tired of AI visibility tools that feel designed to scare you.",
  "Black boxes.",
  "Fear-based pricing.",
  "Dashboards that create more questions than answers.",
  "So we decided to build something simpler:",
  "an index that tracks how AI describes your market — and makes that data public.",
  "We're not charging for access to the data.",
  "We're charging for help acting on it.",
  "This week, we're opening it to a small group who want to help shape it.",
];

interface HeresTheThingProps {
  onComplete?: () => void;
}

export function HeresTheThing({ onComplete }: HeresTheThingProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [completedParagraphs, setCompletedParagraphs] = useState<string[]>([]);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [showAvatar, setShowAvatar] = useState(false);
  const [hasTriggeredContentLoad, setHasTriggeredContentLoad] = useState(false);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const typingSpeed = 10; // Consistent, smooth speed (2x faster)

  // Check if section is in view
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || hasStarted) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Start typing when section enters viewport (top 70% of screen)
      if (rect.top < windowHeight * 0.7 && rect.bottom > 0) {
        setHasStarted(true);
      }
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasStarted]);

  // Trigger content load after a short delay
  useEffect(() => {
    if (hasStarted && !hasTriggeredContentLoad && onComplete) {
      const contentLoadTimeout = setTimeout(() => {
        setHasTriggeredContentLoad(true);
        onComplete();
      }, 2000); // Load content after 2 seconds

      return () => clearTimeout(contentLoadTimeout);
    }
  }, [hasStarted, hasTriggeredContentLoad, onComplete]);

  // Typewriter effect
  useEffect(() => {
    if (!hasStarted) return;
    
    // Check if animation is complete
    if (currentParagraphIndex >= paragraphs.length) {
      if (!isAnimationComplete) {
        setIsAnimationComplete(true);
        // Trigger avatar fade-in after a brief delay
        setTimeout(() => {
          setShowAvatar(true);
        }, 200);
      }
      return;
    }

    const targetText = paragraphs[currentParagraphIndex];
    
    if (currentText.length < targetText.length) {
      typingTimeoutRef.current = setTimeout(() => {
        setCurrentText(targetText.slice(0, currentText.length + 1));
      }, typingSpeed);

      return () => {
        if (typingTimeoutRef.current) {
          clearTimeout(typingTimeoutRef.current);
        }
      };
    } else {
      // Current paragraph complete, move to next after brief pause
      const pauseTimeout = setTimeout(() => {
        setCompletedParagraphs([...completedParagraphs, currentText]);
        setCurrentText("");
        setCurrentParagraphIndex(currentParagraphIndex + 1);
      }, 25); // Brief pause between paragraphs (2x faster)

      return () => clearTimeout(pauseTimeout);
    }
  }, [hasStarted, currentParagraphIndex, currentText, completedParagraphs, isAnimationComplete]);

  return (
    <section ref={sectionRef} className="pt-20 tablet:pt-32 desktop:pt-44 pb-20 tablet:pb-32 desktop:pb-44 border-b border-border">
      <GridRoot size="normal">
        <div className="desktop:grid desktop:grid-cols-[5fr_16fr_5fr] desktop:gap-0 relative">
          {/* Avatar and Name - absolute positioned on desktop, slides in from left */}
          {isAnimationComplete && (
            <div 
              className="hidden desktop:flex flex-col gap-5 absolute left-0 top-0 transition-all duration-1000 ease-out"
              style={{
                opacity: showAvatar ? 1 : 0,
                transform: showAvatar ? 'translateX(0)' : 'translateX(-32px)',
              }}
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-border">
                <Image
                  src="/images/marcel-avatar.jpg"
                  alt="Marcel Santilli"
                  fill
                  className="object-cover scale-[1.5]"
                  style={{ objectPosition: '50% 8%' }}
                />
              </div>
              <div className="text-sm leading-[1.5] text-muted-foreground">
                <p className="font-bold tracking-[-0.03em]">Marcel Santilli</p>
                <p className="font-medium tracking-[-0.03em]">
                  Co-Founder & CEO
                  <br />
                  of GrowthX,
                  <br />
                  builders of CheckThat
                </p>
              </div>
            </div>
          )}

          {/* Empty space on desktop to maintain layout */}
          <div className="hidden desktop:block"></div>
          
          {/* Content - always full width and in correct position */}
          <div>
            <h2 className="text-[20px] desktop:text-2xl font-[500] leading-normal desktop:leading-tight tracking-[-0.06em] mb-6 text-foreground">
              Here&apos;s the thing:
            </h2>
            
            <div className="text-[20px] desktop:text-2xl font-[500] leading-normal desktop:leading-tight tracking-[-0.06em] space-y-6 min-h-[620px] desktop:min-h-[520px]">
              {paragraphs.map((text, index) => {
                let displayText = "";
                let shouldShow = false;
                
                if (index < completedParagraphs.length) {
                  // Completed paragraph
                  displayText = completedParagraphs[index];
                  shouldShow = true;
                } else if (index === currentParagraphIndex) {
                  // Currently typing paragraph
                  displayText = currentText;
                  shouldShow = currentText.length > 0;
                }
                
                // Only render paragraphs that have started typing
                if (!shouldShow) return null;
                
                return (
                  <p
                    key={index}
                    className="text-foreground"
                  >
                    {displayText}
                  </p>
                );
              })}
            </div>
            
            {/* Avatar and Name - shown on mobile after animation completes, slides in from left */}
            {isAnimationComplete && (
              <div 
                className="flex desktop:hidden flex-col gap-5 mt-12 transition-all duration-1000 ease-out"
                style={{
                  opacity: showAvatar ? 1 : 0,
                  transform: showAvatar ? 'translateX(0)' : 'translateX(-32px)',
                }}
              >
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-border">
                  <Image
                    src="/images/marcel-avatar.jpg"
                    alt="Marcel Santilli"
                    fill
                    className="object-cover scale-[1.5]"
                    style={{ objectPosition: '50% 8%' }}
                  />
                </div>
                <div className="text-sm leading-[1.5] text-muted-foreground">
                  <p className="font-bold tracking-[-0.03em]">Marcel Santilli</p>
                  <p className="font-medium tracking-[-0.03em]">
                    Co-Founder & CEO
                    <br />
                    of GrowthX,
                    <br />
                    builders of CheckThat
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </GridRoot>
    </section>
  );
}

