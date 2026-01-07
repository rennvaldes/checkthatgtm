"use client";

import { GridRoot } from "@/components/home/grid/gridRoot";
import { BlogCard } from "@/components/blog/blogCard";
import { CardData } from "@/static/types";

export default function BlogSlugKeepReading({
  relatedArticles,
}: {
  relatedArticles: CardData[];
}) {
  const featured = relatedArticles?.[0];
  if (!featured) return null;

  return (
    <section className="w-full">
      {/* Header */}
      <GridRoot size="normal" className="mb-6 desktop:mb-10">
        <div className="desktop:grid desktop:grid-cols-[5fr_16fr_5fr] desktop:gap-0">
          <span className="block text-sm leading-none tracking-[-0.03em] text-muted-foreground font-light mb-3 desktop:mb-0">
            Related content
          </span>
          <div>
            <h2 className="text-[20px] desktop:text-2xl font-[520] leading-normal desktop:leading-tight tracking-[-0.06em]">
              Keep reading.
            </h2>
            <p className="text-[20px] desktop:text-2xl font-400 leading-normal desktop:leading-tight tracking-[-0.06em] text-muted-foreground">
              We aim to inspire.
            </p>
          </div>
        </div>
      </GridRoot>

      {/* Single featured card */}
      <hr className="h-[0.5px] border-0 bg-border" />
      <GridRoot size="normal">
        <BlogCard
          {...featured}
          variant="featured"
          slug={featured.slug}
          className="w-full pr-5"
        />
      </GridRoot>
      <hr className="h-[0.5px] border-0 bg-border" />
    </section>
  );
}
