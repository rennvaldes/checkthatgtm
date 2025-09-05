/* eslint-disable @next/next/no-img-element */
import ArrowRight from '@/components/icons/ArrowRight';
import useGetQueryWithRefetchOnChange from '@/hooks/useGetQueryWithRefetchOnChange';
import { getMainDataAndArticles } from '@/lib/api/strapi/blog';
import { Skeleton } from '@/lib/shadcn/ui/skeleton';
import React from 'react';

function ArticleImage({ imageUrl, image16x9Url, isLoading }: { imageUrl: string; image16x9Url?: string; isLoading: boolean }) {
  if (isLoading) {
    return <Skeleton className='w-full h-[186px] lg:h-[461px] mt-10 order-5 md:order-1' />;
  }

  if (!imageUrl) {
    return null;
  }

  return (
    <div className='pt-10 order-5 md:order-1 relative'>
      {/* Mobile image */}
      <img 
        className='block lg:hidden aspect-square object-cover w-full' 
        src={imageUrl} 
        alt='Featured Image'
      />
      {/* Desktop image */}
      <img 
        className='hidden lg:block aspect-video object-cover w-full' 
        src={image16x9Url || imageUrl} 
        alt='Featured Image'
      />
    </div>
  );
}

function getFormattedDate(date: string) {
  const formattedDate = new Date(date);

  return `${formattedDate.getDay()} ${new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(formattedDate)}`;
}

function BlogPageHeader({ data, isLoading }: { isLoading: boolean; data: any }) {
  const { category, image, image_16x9, title, publisher_name, publisher_avatar, publisher_legend, updatedAt, createdAt } = data;
  const categoryName = category?.name || category;

  const { data: rawData, isLoading: isGeneralDataLoading } = useGetQueryWithRefetchOnChange({
    key: 'blog-data-hero',
    getFn: () => getMainDataAndArticles(),
  });

  const { blog_x_link, blog_instagram_link, blog_linkedin_link } = React.useMemo(() => rawData?.data ?? {}, [rawData]);

  return (
    <section className='flex w-full max-w-[624px] transition-[max-width] lg:max-w-[1246px] flex-col items-center self-center pb-[4px] lg:px-0 lg:pb-0'>
      {isLoading ? (
        <div className='flex flex-col items-center mt-[24px] lg:mt-[32px] gap-3'>
          <Skeleton className='h-[24px] w-[88px] rounded-md' />
          <Skeleton className='h-[16px] w-[160px]' />
        </div>
      ) : (
        <div className='flex flex-col items-center mt-[24px] lg:mt-[32px] gap-3 order-1'>
          <div className='border border-ui-black p-2.5 text-[12px] leading-none font-medium'>
            {categoryName}
          </div>
          <span className='text-ui-black/80 text-sm'>
            {new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(createdAt))}
          </span>
        </div>
      )}
      {isLoading ? (
        <Skeleton className='mt-[16px] h-[62px] w-full lg:h-[114px] lg:w-[1246px]' />
      ) : (
        <h1 className='mt-6 w-full text-center text-4xl xl:text-5xl tracking-tighter leading-[0.95] font-medium order-2 md:order-1'>
          {title}
        </h1>
      )}

      <ArticleImage imageUrl={image} image16x9Url={image_16x9} isLoading={isLoading} />

    </section>
  );
}

export default BlogPageHeader;
