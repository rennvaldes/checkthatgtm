/* eslint-disable @next/next/no-img-element */
import ArrowRight from '@/components/icons/ArrowRight';
import useGetQueryWithRefetchOnChange from '@/hooks/useGetQueryWithRefetchOnChange';
import { getMainDataAndArticles } from '@/lib/api/strapi/blog';
import { Skeleton } from '@/lib/shadcn/ui/skeleton';
import Link from 'next/link';
import React from 'react';

function ArticleImage({ imageUrl, isLoading }: { imageUrl: string; isLoading: boolean }) {
  if (isLoading) {
    return <Skeleton className='w-full h-[186px] lg:h-[461px] mt-10 order-5 md:order-1' />;
  }

  if (!imageUrl) {
    return null;
  }

  return <img className='pt-10 order-5 md:order-1' src={imageUrl} alt='article-image' />;
}

function getFormattedDate(date: string) {
  const formattedDate = new Date(date);

  return `${formattedDate.getDay()} ${new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(formattedDate)}`;
}

function BlogPageHeader({ data, isLoading }: { isLoading: boolean; data: any }) {
  const { category, image, title, publisher_name, publisher_avatar, publisher_legend, updatedAt } = data;
  const categoryName = category?.name || category;

  const { data: rawData, isLoading: isGeneralDataLoading } = useGetQueryWithRefetchOnChange({
    key: 'blog-data-hero',
    getFn: () => getMainDataAndArticles(),
  });

  const { blog_x_link, blog_instagram_link, blog_linkedin_link } = React.useMemo(() => rawData?.data ?? {}, [rawData]);

  return (
    <section className='flex w-full max-w-[624px] transition-[max-width] lg:max-w-[863px] flex-col items-start self-center px-[20px] pb-[4px] lg:px-0 lg:pb-0'>
      <Link href='/blog' className='flex items-center justify-center gap-[12px] py-[12px] font-medium hover:underline'>
        <ArrowRight className='scale-x-[-1]' />
        Back to blog
      </Link>

      {isLoading ? (
        <Skeleton className='bg-ui-black/50 mt-[32px] h-[28px] w-[112px] rounded-full lg:mt-[40px]' />
      ) : (
        <div className='flex-1 w-full flex justify-center mt-[32px] lg:mt-[40px] items-center gap-4 order-1'>
          <span>{new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(updatedAt))}</span>
          <div className='rounded-full border border-ui-black px-[12px] py-[8px] text-[12px] font-medium'>{categoryName}</div>
        </div>
      )}
      {isLoading ? (
        <Skeleton className='mt-[16px] h-[62px] w-full lg:h-[114px] lg:w-[850px]' />
      ) : (
        <h1 className='mt-[16px] text-center text-[28px] font-medium leading-[31px] lg:w-[850px] lg:text-[52px] lg:leading-[57px] order-2 md:order-1'>
          {title}
        </h1>
      )}

      <ArticleImage imageUrl={image} isLoading={isLoading} />

    </section>
  );
}

export default BlogPageHeader;
