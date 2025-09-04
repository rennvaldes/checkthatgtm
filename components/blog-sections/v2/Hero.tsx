"use client";

import React from 'react';
import ContentLayout from '@/components/layout/ContentLayout';

function BlogHeroV2() {
  const title = 'Learn';
  const description = 'Updates, interviews, stories, and everything from the business, team, and industry.';

  return (
    <section className="w-full max-md:px-4 max-md:pt-10">
      <div className="container mx-auto w-full">
        <ContentLayout
          leftContent={<span>Blog</span>}
          rightContent={
            <h1 className="text-primary-black tracking-tighter text-4xl lg:text-[96px] leading-[0.95] font-semibold ">
              {title}
            </h1>
          }
          description={description}
          descriptionClassName="mt-6 xl:mt-12 text-base text-primary-black/70 lg:text-xl max-w-[498px]"
          className="items-start"
          leftClassName="md:pt-4"
        />
      </div>
    </section>
  );
}

export default BlogHeroV2;
