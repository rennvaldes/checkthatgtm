import MarkdownContent from "@/lib/litebox-lib/ui/MarkdownContent";
import { Skeleton } from "@/lib/shadcn/ui/skeleton";
import { Icon } from "@iconify/react";
import React, { ComponentProps } from "react";
import { getMainDataAndArticles } from "@/lib/api/strapi/blog";
import useGetQueryWithRefetchOnChange from "@/hooks/useGetQueryWithRefetchOnChange";
import { Grid } from "@/components/home/grid/gridRoot";

function BlogSlugContent({
  content,
  isLoading,
  data,
}: {
  content: string;
  isLoading: boolean;
  data: any;
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

  const {
    category,
    image,
    title,
    publisher_name,
    publisher_avatar,
    publisher_legend,
    updatedAt,
  } = data || {};
  const categoryName = category?.name || category;

  const { data: rawData, isLoading: isGeneralDataLoading } =
    useGetQueryWithRefetchOnChange({
      key: "blog-data-hero",
      getFn: () => getMainDataAndArticles(),
    });

  return (
    <Grid className="w-full px-6 lg:px-0 mb-14">
      {/* Publisher Info and Share - 8 cols */}
      <div className="col-span-12 lg:col-span-8 lg:col-start-3">
        <div className="w-full max-w-[820px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0 my-12">
          <div className="flex items-center gap-3">
            {isLoading ? (
              <>
                <Skeleton className="h-11 w-11 rounded-full" />
                <Skeleton className="h-[42px] w-[103px]" />
              </>
            ) : (
              <>
                <img
                  className="rounded-full h-11 w-11 object-cover"
                  alt={publisher_name}
                  src={publisher_avatar}
                />
                <div className="flex flex-col justify-center leading-tight">
                  <h4 className="font-semibold">{publisher_name}</h4>
                  {publisher_legend && (
                    <p className="text-foreground/60">{publisher_legend}</p>
                  )}
                </div>
              </>
            )}
          </div>

          {isGeneralDataLoading ? (
            <Skeleton className="h-11 w-[300px]" />
          ) : (
            <div className="hidden md:flex gap-8 items-center">
              <p className="font-bold text-foreground/60 text-lg">Share</p>
              <div className="flex items-center gap-2">
                <ShareLink
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    location.href
                  )}`}
                  aria-label="Share on LinkedIn"
                >
                  <Icon icon="mdi:linkedin" width={25} height={25} />
                </ShareLink>
                <ShareLink
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    location.href
                  )}`}
                  aria-label="Share on Twitter/X"
                >
                  <Icon icon="devicon:twitter" width={20} height={20} />
                </ShareLink>
                <div className="relative flex items-center justify-center gap-1">
                  <button
                    onClick={() => navigator.clipboard.writeText(location.href)}
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
          )}
        </div>
      </div>

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
    </Grid>
  );
}

export default BlogSlugContent;
