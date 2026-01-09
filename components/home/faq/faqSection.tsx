"use client";

import { useState } from "react";
import { GridRoot } from "@/components/home/grid/gridRoot";

const faqs = [
  {
    question: "What is the Open AI Visibility Index?",
    answer: "The Open AI Visibility Index is a public database that tracks how AI models like ChatGPT, Claude, and others describe your market. We track 100,000+ industry prompts to show you which brands AI favors and why."
  },
  {
    question: "How does it help me grow?",
    answer: "By understanding how AI sees your market, you can optimize your content and positioning to be more visible in AI-generated responses. This is the new frontier of organic growth - AEO (Answer Engine Optimization)."
  },
  {
    question: "How does pricing work?",
    answer: "We're not charging for access to the data. The index is public and free. We charge for help acting on it - like custom audits, workshops, and implementation support during Launch Week."
  },
  {
    question: "What's included in Launch Week?",
    answer: "Launch Week gives you 5 days of intensive support: Full platform access, our $1M research study, a custom audit for your brand, a live workshop, and early access to new features."
  },
  {
    question: "Why are you making the data public?",
    answer: "We got tired of AI visibility tools that feel designed to scare you with black boxes and fear-based pricing. We believe transparency drives better outcomes for everyone."
  },
  {
    question: "How is this different from SEO?",
    answer: "SEO optimizes for search engines like Google. AEO optimizes for answer engines like ChatGPT and Claude. As more people ask AI directly instead of searching, AEO becomes essential for organic visibility."
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pt-20 tablet:pt-32 desktop:pt-44 pb-20 tablet:pb-32 desktop:pb-44 border-b border-border">
      <GridRoot size="normal">
        <div className="desktop:grid desktop:grid-cols-[5fr_16fr_5fr] desktop:gap-0">
          {/* Label */}
          <span className="block text-sm leading-none tracking-[-0.03em] text-muted-foreground font-normal mb-3 desktop:mb-0">
            FAQ
          </span>

          {/* Content */}
          <div>
            <h2 className="text-[40px] desktop:text-5xl font-bold leading-tight desktop:leading-[1.1] tracking-[-0.06em] mb-10">
              Frequently asked questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-border rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg font-bold tracking-[-0.03em] pr-4">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-5 pt-2 text-base leading-normal tracking-[-0.03em] text-muted-foreground">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </GridRoot>
    </section>
  );
}
