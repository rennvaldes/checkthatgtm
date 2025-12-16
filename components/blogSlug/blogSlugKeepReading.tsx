"use client";

import { Grid } from "@/components/home/grid/gridRoot";
import { BlogCard } from "@/components/blog/blogCard";
import { CardData } from "@/static/types";

export default function BlogSlugKeepReading({
  relatedArticles,
}: {
  relatedArticles: CardData[];
}) {
  if (!relatedArticles?.length) return null;

  return (
    <section className="w-full">
      {/* Header */}
      <Grid className="mb-6 md:mb-10">
        {/* Label - col 1 */}
        <div className="col-span-full md:col-span-2 flex items-start">
          <span className="text-sm leading-none tracking-[-0.03em] text-muted-foreground font-light">
            Related content
          </span>
        </div>

        {/* Title - cols 3-10 */}
        <div className="col-span-full md:col-span-6 md:col-start-3 lg:col-span-8 lg:col-start-3 mt-3 md:mt-0">
          <h2 className="text-[20px] lg:text-2xl font-[520] leading-[1.5] lg:leading-[1.25] tracking-[-0.06em]">
            Keep reading.
          </h2>
          <p className="text-[20px] lg:text-2xl font-400 leading-[1.5] lg:leading-[1.25] tracking-[-0.06em] text-muted-foreground">
            We aim to inspire.
          </p>
        </div>
      </Grid>

      <div className="border-t-[0.5px] border-b-[0.5px] border-border">
        {/* Cards Container */}
        <Grid className="md:border-l-[0.5px] border-border w-full">
          {/* Mobile & Tablet: Scroll container */}
          <div className="col-span-full lg:hidden overflow-x-scroll scroll-smooth [scroll-snap-type:x_mandatory] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden">
            <ul className="flex">
              {relatedArticles.map((article) => (
                <li key={article.id} className="[scroll-snap-align:center]">
                  <BlogCard
                    {...article}
                    variant="regular"
                    slug={article.slug}
                    className="w-[88vw] h-[88vw] max-w-[576px] max-h-[576px] border-r-[0.5px] border-border"
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop: Grid */}
          <ul className="col-span-full hidden lg:flex">
            {relatedArticles.slice(0, 3).map((article) => (
              <li key={article.id}>
                <BlogCard
                  {...article}
                  variant="regular"
                  slug={article.slug}
                  className="max-w-[576px] max-h-[576px] border-r-[0.5px] border-border"
                />
              </li>
            ))}
          </ul>
        </Grid>
      </div>
    </section>
  );
}
