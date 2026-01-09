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

      {/* Q&A Section with full-width container */}
      <div className="relative w-full">
        {/* Full width border */}
        <div 
          aria-hidden="true" 
          className="absolute border-[0.5px] border-border border-solid inset-y-[-0.25px] left-1/2 -translate-x-1/2 w-screen pointer-events-none" 
        />
        
        <GridRoot size="normal">
          <div className="desktop:grid desktop:grid-cols-[5fr_16fr_5fr] desktop:gap-0">
            <div className="desktop:col-start-2 desktop:col-span-1">
              <div className="flex flex-col desktop:flex-row relative">
                {/* Questions List - Left Column */}
                <div className="flex-1 flex flex-col desktop:border-r desktop:border-r-[0.5px] desktop:border-border">
                  {faqs.map((faq, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={cx(
                        "relative flex items-center px-10 py-6 text-left text-[18px] font-medium leading-[1.5] tracking-[-0.72px] transition-colors",
                        activeIndex === index
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {index > 0 && (
                        <div 
                          aria-hidden="true"
                          className="absolute border-t-[0.5px] border-[rgba(8,10,13,0.3)] border-solid inset-x-[-0.25px] top-0 pointer-events-none" 
                        />
                      )}
                      {faq.question}
                    </button>
                  ))}
                </div>

                {/* Answer Detail - Right Column */}
                <div className="flex-1 relative border-t desktop:border-t-0 border-border">
                  <div className="flex flex-col justify-center px-10 py-12">
                    <div className="text-[18px] font-medium leading-[1.5] tracking-[-0.54px] text-muted-foreground">
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
        </GridRoot>
      </div>

      {/* CTA Section with full-width container */}
      <div className="relative w-full mt-0">
        {/* Full width border */}
        <div 
          aria-hidden="true" 
          className="absolute border-[0.5px] border-border border-solid inset-[-0.25px] left-1/2 -translate-x-1/2 w-screen pointer-events-none" 
        />
        
        <GridRoot size="normal">
          <div className="desktop:grid desktop:grid-cols-[5fr_16fr_5fr] desktop:gap-0">
            <div className="desktop:col-start-2 desktop:col-span-1">
              <div className="relative flex items-center gap-5 px-10 py-10">
                <p className="flex-1 text-[18px] font-medium leading-[1.5] tracking-[-0.54px] text-foreground">
                  <span className="font-bold">Ready to see your category?</span>
                  {" "}Create a free account to explore rankings and start tracking prompts.
                </p>
                <Button
                  text="Get started"
                  href="/book-demo"
                  color="black"
                  className="shrink-0"
                />
              </div>
            </div>
          </div>
        </GridRoot>
      </div>
    </section>
  );
}
