"use client";

import MarkdownContent from "@/lib/litebox-lib/ui/MarkdownContent";
import { Skeleton } from "@/lib/shadcn/ui/skeleton";
import { Icon } from "@iconify/react";
import { ComponentProps } from "react";
import { GridRoot } from "@/components/home/grid/gridRoot";

function BlogSlugContent({
  content,
  isLoading,
  currentUrl,
}: {
  content: string;
  isLoading: boolean;
  currentUrl: string;
}) {
  function ShareLink({ children, ...props }: ComponentProps<"a">) {
    return (
      <a
        {...props}
        className="text-black hover:opacity-80 transition-opacity rounded-full p-2 duration-300 cursor-pointer"
        target="_blank"
      >
        {children}
      </a>
    );
  }

  return (
    <>
      {/* Content */}
      <GridRoot
        innerClassName="blog-content"
        className="my-[4.375rem] desktop:my-24 cinema:my-32"
      >
        {isLoading ? (
          <Skeleton className="w-full h-[427px]" />
        ) : (
          <MarkdownContent isLoading={isLoading} content={content} />
        )}
      </GridRoot>

      {/* Share Section */}
      <GridRoot size="normal" className="py-12 desktop:py-32 cinema:py-44">
        <div className="desktop:grid desktop:grid-cols-[5fr_16fr_5fr] desktop:gap-0">
          <span className="block text-sm leading-none tracking-[-0.03em] text-muted-foreground font-light mb-3 desktop:mb-0">
            Share
          </span>
          <div className="flex items-center gap-2">
            <ShareLink
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                currentUrl
              )}`}
              aria-label="Share on LinkedIn"
            >
              <Icon icon="mdi:linkedin" width={25} height={25} />
            </ShareLink>
            <ShareLink
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                currentUrl
              )}`}
              aria-label="Share on Twitter/X"
            >
              <Icon icon="devicon:twitter" width={20} height={20} />
            </ShareLink>
            <div className="relative flex items-center justify-center gap-1">
              <button
                onClick={() => navigator.clipboard.writeText(currentUrl)}
                className="text-black hover:opacity-80 transition-opacity peer rounded-full p-2 duration-300"
                aria-label="Copy link to clipboard"
              >
                <Icon icon="solar:link-outline" width={20} height={20} />
              </button>
              <p className="invisible absolute -top-4 text-xs peer-focus:visible">
                Copied!
              </p>
            </div>
          </div>
        </div>
      </GridRoot>
    </>
  );
}

export default BlogSlugContent;
