"use client";

import MarkdownContent from "@/lib/litebox-lib/ui/MarkdownContent";
import { Skeleton } from "@/lib/shadcn/ui/skeleton";
import { Icon } from "@iconify/react";
import { ComponentProps } from "react";
import { Grid } from "@/components/home/grid/gridRoot";

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
    <Grid className="w-full mt-18 px-6 lg:px-0 mt-44 mb-14">
      {/* Content - 8 cols, max-w-820px */}
      <div className="col-span-12 lg:col-span-8 lg:col-start-3">
        <div className="w-full max-w-[820px] mx-auto">
          {isLoading ? (
            <Skeleton className="w-full h-[427px]" />
          ) : (
            <div className="blog-content">
              <MarkdownContent isLoading={isLoading} content={content} />
            </div>
          )}
        </div>
      </div>

      {/* Share Section - 12 cols */}

      <Grid className="py-12 md:py-32 lg:py-44 w-full col-span-12">
        {/* Share Label */}
        <div className="col-span-full md:col-span-1 flex items-start">
          <span className="text-sm leading-none tracking-[-0.03em] text-muted-foreground font-light">
            Share
          </span>
        </div>

        {/* Gap - col 2 is empty */}

        {/* Share Icons */}
        <div className="col-span-full md:col-span-8 md:col-start-3 flex items-center gap-2 mt-3 md:mt-0">
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

        {/* Empty cols 9-12 */}
      </Grid>
    </Grid>
  );
}

export default BlogSlugContent;
