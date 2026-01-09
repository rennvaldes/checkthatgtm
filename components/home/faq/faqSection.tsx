"use client";

import { useState } from "react";
import { cx } from "@/lib/classnames";
import { GridRoot } from "@/components/home/grid/gridRoot";
import { Button } from "@/components/home/button";

interface FaqData {
  question: string;
  answer: string | JSX.Element;
}

export function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(1);

  const faqs: FaqData[] = [
    {
      question: "What is the Open AI Visibility Index?",
      answer: "The Open AI Visibility Index is a public database that tracks how AI models like ChatGPT, Claude, and others describe your market. We track 100,000+ industry prompts to show you which brands AI favors and why.",
    },
    {
      question: "What does \"AEO\" mean in practice?",
      answer: (
        <div>
          <p className="mb-0">AEO (Answer Engine Optimization) is the work of improving how often your brand is mentioned, recommended, and cited inside AI answers. In practice, it means:</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">- Understanding which prompts drive discovery in your category</p>
          <p className="mb-0">- Publishing the content and proof AI systems tend to cite</p>
          <p>- Fixing gaps in positioning, pages, and distribution that limit citations</p>
        </div>
      ),
    },
    {
      question: "Which models / answer engines are included?",
      answer: "We track across major AI platforms including ChatGPT, Claude, Perplexity, and other leading answer engines to give you comprehensive visibility across the AI landscape.",
    },
    {
      question: "What do I get for free vs paid?",
      answer: "We're not charging for access to the data. The index is public and free. We charge for help acting on it - like custom audits, workshops, and implementation support.",
    },
    {
      question: "How do you generate the rankings?",
      answer: "We run thousands of prompts across your category, analyze which brands are mentioned and cited, and track patterns over time to create a comprehensive AI visibility score.",
    },
  ];

  return (
    <section className="pt-20 tablet:pt-32 desktop:pt-44 pb-20 tablet:pb-32 desktop:pb-44">
      <GridRoot size="normal">
        {/* Header */}
        <div className="desktop:grid desktop:grid-cols-[5fr_16fr_5fr] desktop:gap-0 desktop:items-start mb-10">
          <span className="block text-sm leading-[1.5] tracking-[-0.03em] text-muted-foreground font-normal mb-3 desktop:mb-0">
            FAQ
          </span>
          <div>
            <h2 className="text-[40px] desktop:text-5xl font-bold leading-normal desktop:leading-tight tracking-[-0.06em]">
              Frequently asked questions
            </h2>
            <p className="text-[20px] desktop:text-2xl font-medium leading-normal desktop:leading-tight tracking-[-0.06em] text-muted-foreground mt-2">
              Quick answers on what the Open Index is, how rankings work, and what you get during Launch Week.
            </p>
          </div>
        </div>
      </GridRoot>

      {/* FAQ Container - full content width with full-width borders */}
      <div className="relative w-full">
        {/* Full-width top border */}
        <div 
          aria-hidden="true" 
          className="absolute border-t-[0.5px] border-[#b3b3b3] border-solid top-[-0.25px] left-1/2 -translate-x-1/2 w-screen pointer-events-none" 
        />
        
        <GridRoot size="normal">
          <div className="desktop:grid desktop:grid-cols-[5fr_16fr_5fr] desktop:gap-0 relative">
            
            {/* Q&A Section - starts at column 2, spans to right edge (columns 2-3) */}
            <div className="desktop:col-start-2 desktop:col-span-2 content-stretch flex flex-col desktop:flex-row items-start relative shrink-0 w-full desktop:h-[480px]">
              {/* Questions List - Left Column (50%) */}
              <div className="basis-0 flex flex-row grow items-start self-stretch shrink-0">
                <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0">
                  {/* Left border for questions column */}
                  <div aria-hidden="true" className="absolute border-l-[0.5px] border-[#b3b3b3] border-solid inset-y-[-0.25px] left-[-0.25px] pointer-events-none" />
                  
                  {faqs.map((faq, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={cx(
                        "basis-0 grow min-h-px min-w-px relative shrink-0 w-full",
                      )}
                    >
                      {index > 0 && (
                        <div 
                          aria-hidden="true"
                          className="absolute border-[0.5px_0px_0px] border-[rgba(8,10,13,0.3)] border-solid inset-0 pointer-events-none" 
                        />
                      )}
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex gap-[10px] items-center pl-0 pr-[40px] py-[19px] px-[40px] relative size-full">
                          <p className={cx(
                            "basis-0 font-medium grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[18px] tracking-[-0.72px]",
                            activeIndex === index ? "text-foreground" : "text-muted-foreground"
                          )}>
                            {faq.question}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Answer Detail - Right Column (50%) */}
              <div className="basis-0 flex flex-row grow items-start self-stretch shrink-0">
                <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
                  <div aria-hidden="true" className="absolute border-[#b3b3b3] border-[0.5px] border-solid inset-[-0.25px] pointer-events-none" />
                  <div className="flex flex-col justify-start size-full">
                    <div className="content-stretch flex flex-col items-start justify-start pb-[48px] pt-[40px] px-[40px] relative size-full">
                      <div className="font-medium leading-[1.5] relative shrink-0 text-muted-foreground text-[18px] tracking-[-0.54px] w-full">
                        {typeof faqs[activeIndex].answer === 'string' ? (
                          <p>{faqs[activeIndex].answer}</p>
                        ) : (
                          faqs[activeIndex].answer
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section - also spans columns 2-3 */}
            <div className="desktop:col-start-2 desktop:col-span-2 content-stretch flex gap-[20px] h-[134px] items-center justify-end p-[40px] relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[#b3b3b3] border-[0.5px] border-solid inset-[-0.25px] pointer-events-none" />
              <p className="basis-0 font-medium grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-foreground text-[18px] tracking-[-0.54px]">
                <span className="font-bold">Ready to see your category?</span>
                <span>{` Create a free account to explore rankings and start tracking prompts.`}</span>
              </p>
              <Button
                text="Get started"
                href="/book-demo"
                color="black"
                className="shrink-0"
              />
            </div>
          </div>
        </GridRoot>

        {/* Full-width bottom border */}
        <div 
          aria-hidden="true" 
          className="absolute border-b-[0.5px] border-[#b3b3b3] border-solid bottom-[-0.25px] left-1/2 -translate-x-1/2 w-screen pointer-events-none" 
        />
      </div>
    </section>
  );
}
