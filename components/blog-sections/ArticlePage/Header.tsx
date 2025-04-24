/* eslint-disable @next/next/no-img-element */
import ArrowRight from '@/components/icons/ArrowRight';
import Instagram from '@/components/icons/Instagram';
import Linkedin from '@/components/icons/Linkedin';
import LinkIcon from '@/components/icons/LinkIcon';
import Twitter from '@/components/icons/Twitter';
import useGetQueryWithRefetchOnChange from '@/hooks/useGetQueryWithRefetchOnChange';
import { getMainDataAndArticles } from '@/lib/api/strapi/blog';
import { Skeleton } from '@/lib/shadcn/ui/skeleton';
import Link from 'next/link';
import React, { ComponentProps } from 'react';

function ShareLink({ children, ...props }: ComponentProps<'a'>) {
  return (
    <a
      {...props}
      className='hover:bg-ui-green-light transition-color rounded-full p-[16px] duration-300 cursor-pointer'
      target='_blank'>
      {children}
    </a>
  );
}

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

      <ArticleImage imageUrl={image} isLoading={isLoading} />

      <div className='mt-[20px] flex flex-col w-full lg:mt-[40px] md:flex-row md:items-center md:justify-between order-3 md:order-1'>
        <div className='flex items-center gap-[12px] lg:items-stretch'>
          {isLoading ? (
            <Skeleton className='h-[32px] w-[32px] rounded-full lg:h-[44px] lg:w-[44px]' />
          ) : (
            <img
              className='h-[32px] w-[32px] rounded-full lg:h-[44px] lg:w-[44px] bg-ui-peach'
              alt='placeholder-user'
              src={publisher_avatar}
            />
          )}
          {isLoading ? (
            <Skeleton className='h-[18px] w-[103px] lg:h-[42px]' />
          ) : (
            <div className='font-elza flex flex-col justify-center leading-[21px]'>
              <h4 className='font-normal md:font-[600]'>
                <span>by</span> {publisher_name}
              </h4>
              {publisher_legend && <p className='hidden md:block'>{publisher_legend}</p>}
            </div>
          )}
        </div>
        {isGeneralDataLoading ? (
          <Skeleton className='mb-[8px] mt-[16px] h-[44px] lg:w-[300px]' />
        ) : (
          <div className='mt-[16px] flex items-center justify-start mb-[8px]'>
            <p className='pl-0 md:p-[16px] mr-5 font-medium'>Share</p>

            <ShareLink href={blog_linkedin_link}>
              <Linkedin />
            </ShareLink>
            <ShareLink href={blog_x_link}>
              <Twitter />
            </ShareLink>
            <ShareLink href={blog_instagram_link}>
              <Instagram />
            </ShareLink>

            <div className='relative flex items-center justify-center gap-1'>
              <button
                onClick={() => navigator.clipboard.writeText(location.href)}
                className='hover:bg-ui-green-light transition-color peer rounded-full p-[16px] duration-300'>
                <LinkIcon />
              </button>
              <p className='invisible absolute -top-4 text-xs peer-focus:visible'>Copied!</p>
            </div>
          </div>
        )}
      </div>

      <div className='border-ui-black w-full border-b-[1px] order-4 md:order-1' />

      {isLoading ? (
        <Skeleton className='bg-ui-black/50 mt-[32px] h-[28px] w-[112px] rounded-full lg:mt-[40px]' />
      ) : (
        <div className='flex mt-[32px] lg:mt-[40px] items-center gap-4 order-1'>
          <div className='rounded-full bg-[#DEDEF0] px-[12px] py-[8px] text-[12px] font-medium'>{categoryName}</div>
          <span>Updated on {getFormattedDate(updatedAt)}</span>
        </div>
      )}
      {isLoading ? (
        <Skeleton className='mt-[16px] h-[62px] w-full lg:h-[114px] lg:w-[850px]' />
      ) : (
        <h1 className='mt-[16px] text-[28px] font-medium leading-[31px] lg:w-[850px] lg:text-[52px] lg:leading-[57px] order-2 md:order-1'>
          {title}
        </h1>
      )}
    </section>
  );
}

export default BlogPageHeader;
