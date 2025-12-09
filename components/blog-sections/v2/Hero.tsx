"use client";

import React from 'react';
import { Grid } from "@/components/home/grid/gridRoot";

function BlogHeroV2() {
  const title = 'Learn';
  const description = 'Updates, interviews, stories, and everything from the business, team, and industry.';

  return (
    <section className="pt-24 pb-32">
      {/* Title */}
      <Grid>
        <h1 className="col-span-full text-[clamp(50px,50px+(78-50)*(100vw-375px)/(1112-375),78px)] leading-[0.89] tracking-[-0.07em]">
          <span className="text-foreground font-semibold">
            {title}
          </span>
        </h1>
      </Grid>

      {/* Description Row */}
      <Grid className="pt-16">
        {/* Label */}
        <div className="col-span-full md:col-span-1">
          <span className="text-sm leading-none tracking-[-0.03em] text-muted-foreground font-light">
            Blog
          </span>
        </div>

        {/* Gap - col 2 is empty */}

        {/* Description */}
        <div className="col-span-full md:col-span-8 md:col-start-3 mt-3 md:mt-0">
          <p className="text-2xl font-[520] leading-[1.25] tracking-[-0.06em]">
            {description}
          </p>
        </div>
      </Grid>
    </section>
  );
}

export default BlogHeroV2;
