"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeUnwrapImages from "rehype-unwrap-images";
import Image from "next/image";
import QuoteBg from "@/assets/img/v2/quote-bg.png";

export default function MarkdownContent({ content, className = "" }: { content: string; className?: string }) {
  return (
    <ReactMarkdown
      className={[
        "prose prose-lg max-w-none text-primary-black",
        "prose-blockquote:border-0 prose-blockquote:pl-0",
        className,
      ].join(" ")}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, rehypeUnwrapImages]}
      components={{
        blockquote({ children }) {
          return (
            <div className="relative my-6 overflow-hidden rounded-sm h-60 flex items-center">
              <div aria-hidden className="pointer-events-none absolute -top-14 inset-0 select-none">
                <Image src={QuoteBg} alt="" fill className="object-contain h-full" />
              </div>
              <blockquote className="relative m-0 p-4 md:p-8 text-primary-black">
                {children}
              </blockquote>
            </div>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
