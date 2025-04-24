/* eslint-disable @next/next/no-img-element */
import ArrowRight from '@/components/icons/ArrowRight';
import useGetQueryWithRefetchOnChange from '@/hooks/useGetQueryWithRefetchOnChange';
import { getMainDataAndArticles } from '@/lib/api/strapi/blog';
import { Skeleton } from '@/lib/shadcn/ui/skeleton';
import Link from 'next/link';
import React from 'react';


function BlogPageHeader({ data, isLoading }: { isLoading: boolean; data: any }) {
  const { category, title, publisher_name, publisher_avatar, publisher_legend } = data;
  const categoryName = category?.name || category;

  const { data: rawData, isLoading: isGeneralDataLoading } = useGetQueryWithRefetchOnChange({
    key: 'blog-data-hero',
    getFn: () => getMainDataAndArticles(),
  });

  const { blog_x_link, blog_instagram_link, blog_linkedin_link } = React.useMemo(
    () => rawData?.data.attributes ?? {},
    [rawData]
  );

  return (
    <section className='flex w-full max-w-[1280px] flex-col items-start self-center px-[20px] pb-[4px] lg:px-0 lg:pb-0'>
      <Link href='/blog' className='flex items-center justify-center gap-[12px] py-[12px] font-medium hover:underline'>
        <ArrowRight className='scale-x-[-1]' />
        Back to blog
      </Link>

      {isLoading ? (
        <Skeleton className='bg-ui-black/50 mt-[32px] h-[28px] w-[112px] rounded-full lg:mt-[40px]' />
      ) : (
        <div className='mt-[32px] rounded-full bg-[#DEDEF0] px-[12px] py-[8px] text-[12px] font-medium lg:mt-[40px]'>
          {categoryName}
        </div>
      )}
      {isLoading ? (
        <Skeleton className='mt-[16px] h-[62px] w-full lg:mt-[16px] lg:h-[114px] lg:w-[850px]' />
      ) : (
        <h1 className='mt-[16px] text-[28px] font-medium leading-[31px] lg:mt-[16px] lg:w-[850px] lg:text-[52px] lg:leading-[57px]'>
          {title}
        </h1>
      )}

      <div className='mt-[20px] flex w-full flex-col lg:mt-[40px] lg:flex-row lg:items-center lg:justify-between'>
        <div className='flex items-center gap-[12px] lg:items-stretch'>
          {isLoading ? (
            <Skeleton className='h-[32px] w-[32px] rounded-full lg:h-[44px] lg:w-[44px]' />
          ) : (
            <img
              className='h-[32px] w-[32px] rounded-full lg:h-[44px] lg:w-[44px]'
              alt='placeholder-user'
              src={publisher_avatar}
            />
          )}
          {isLoading ? (
            <Skeleton className='h-[18px] w-[103px] lg:h-[42px]' />
          ) : (
            <div className='font-elza flex flex-col justify-center lg:leading-[21px]'>
              <h4 className='lg:font-[600]'>
                <span className='lg:hidden'>by</span> {publisher_name}
              </h4>
              {publisher_legend && <p className='hidden lg:block'>{publisher_legend}</p>}
            </div>
          )}
        </div>
        {isGeneralDataLoading ? (
          <Skeleton className='mb-[8px] mt-[16px] h-[44px] lg:w-[300px]' />
        ) : (
          <div className='mt-[16px] flex items-center justify-start mb-[8px]'>
            <p className='p-[16px] font-medium'>Share</p>
            {/* <a
              href={blog_linkedin_link}
              className='hover:bg-ui-black/10 transition-color rounded-full p-[16px] duration-300'>
              <Linkedin />
            </a>
            <a href={blog_x_link} className='hover:bg-ui-black/10 transition-color rounded-full p-[16px] duration-300'>
              <Twitter />
            </a>
            <a
              href={blog_instagram_link}
              className='hover:bg-ui-black/10 transition-color rounded-full p-[16px] duration-300'>
              <Instagram />
            </a> */}

            <div className='relative flex items-center justify-center gap-1'>
              <button
                onClick={() => navigator.clipboard.writeText(location.href)}
                className='hover:bg-ui-black/10 transition-color peer rounded-full p-[16px] duration-300'>
                <LinkIcon />
              </button>
              <p className='invisible absolute -top-4 text-xs peer-focus:visible'>Copied!</p>
            </div>
          </div>
        )}
      </div>

      <div className='border-ui-black w-full border-b-[1px]' />
    </section>
  );
}

export default BlogPageHeader;
