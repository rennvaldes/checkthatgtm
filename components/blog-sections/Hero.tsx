 
import React from 'react';

import useResponsiveDevice from '@/hooks/useResponsiveDevice';
import DotPatternBackground from '../ui/DotPatternBackground';
import useGetQueryWithRefetchOnChange from '@/hooks/useGetQueryWithRefetchOnChange';
import { getMainDataAndArticles } from '@/lib/api/strapi/blog';
import { Skeleton } from '@/lib/shadcn/ui/skeleton';
import { getCardFromStrapiRawData } from '@/lib/utils';
import { slug } from '@/lib/litebox-lib/utils/slug';
import Link from 'next/link';

function SemicircleDeco() {
  return (
    <svg
      className='absolute right-0 top-0 z-50 hidden translate-y-[-100%] lg:block'
      width='33'
      height='65'
      viewBox='0 0 33 65'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M33 0C14.7746 -1.59331e-06 5.95717e-07 14.5507 -9.73457e-07 32.5C-2.54263e-06 50.4493 14.7746 65 33 65L33 0Z'
        fill='#FFDACA'
      />
    </svg>
  );
}

function BlogHero() {
  const { data: rawData, isLoading } = useGetQueryWithRefetchOnChange({
    key: 'blog-data-hero',
    getFn: () => getMainDataAndArticles(),
  });

  const { isDesktop } = useResponsiveDevice();

  const { title, sub_title, main_article, documentId, slug } = React.useMemo(() => {
    if (!rawData) return {};
    const { title, sub_title, main_article: rawMainArticleData } = rawData.data as any;
    const main_article = rawMainArticleData ? getCardFromStrapiRawData(rawMainArticleData) : null;
    const documentId = rawMainArticleData?.documentId;
    const slug = rawMainArticleData?.slug;

    return { main_article, title, sub_title, documentId, slug };
  }, [rawData]);

  return (
    <section className='mx-auto mt-24 w-[320px] text-center lg:w-full lg:max-w-[1280px]'>
      {isLoading ? (
        <Skeleton className='relative z-30 mx-auto h-[40px] w-[80px] lg:h-[77px] lg:w-[200px]' />
      ) : (
        <h1 className='relative z-20 text-[36px] font-medium leading-[40px] lg:text-[70px] lg:leading-[77px]'>
          {title}
        </h1>
      )}
      {isLoading ? (
        <Skeleton className='relative z-30 mx-auto mt-[8px] h-[48px] w-[320px] lg:h-[60px] lg:w-[564px]' />
      ) : (
        <h2 className='font-elza relative z-20 mt-[8px] text-[16px] leading-[24px] text-[#5F5D78] lg:mx-auto lg:w-[564px] lg:text-center lg:text-[20px] lg:leading-[30px]'>
          {sub_title}
        </h2>
      )}

      {/* <article className='cursor-pointe group relative z-20 mt-[52px] lg:mt-[64px]'>
        <SemicircleDeco />

        <Link href={`/blog/${slug}`} className='flex flex-col lg:flex-row'>
          {isLoading ? (
            <Skeleton className='h-[184px] w-full rounded-none lg:h-[440px] lg:w-[765px] lg:flex-shrink-0' />
          ) : (
            <div className='h-[184px] w-full overflow-hidden lg:h-[440px] lg:w-[765px] lg:flex-shrink-0'>
              <img
                alt='placeholder'
                src={main_article.image}
                className='h-full w-full transition-transform duration-300 group-hover:scale-110'
              />
            </div>
          )}
          <div className='bg-ui-whitest relative p-[20px] text-left lg:flex lg:flex-grow lg:flex-col lg:justify-between lg:p-[32px]'>
            <div>
              {isLoading ? (
                <Skeleton className='bg-ui-black/50 absolute right-[20px] top-0 h-[28px] w-[112px] translate-y-[-50%] rounded-full lg:static lg:inline-block lg:translate-y-0' />
              ) : (
                <div className='absolute right-[20px] top-0 translate-y-[-50%] rounded-full bg-[#DEDEF0] px-[12px] py-[8px] text-[12px] font-medium lg:static lg:inline-block lg:translate-y-0'>
                  {main_article.category}
                </div>
              )}

              {isLoading ? (
                <>
                  <Skeleton className='h-[28px] w-full rounded-full lg:mt-[20px] lg:h-[42px]' />{' '}
                  <Skeleton className='mt-[8px] h-[28px] w-[66%] rounded-full lg:h-[42px]' />
                </>
              ) : (
                <h3 className='group-hover:text-ui-blue transition-color text-[24px] font-medium leading-[28px] duration-300 lg:mt-[20px] lg:text-[32px] lg:leading-[42px]'>
                  {main_article.title}
                </h3>
              )}
              {isLoading ? (
                <Skeleton className='mt-[12px] h-[84px]' />
              ) : (
                <p className='font-elza mt-[12px] text-[14px] leading-[21px] lg:mt-[20px] lg:text-[16px] lg:leading-[24px]'>
                  {main_article.description}
                </p>
              )}
            </div>
            <div className='mt-[40px] flex items-center gap-[12px] lg:items-stretch'>
              {isLoading ? (
                <Skeleton className='h-[32px] w-[32px] rounded-full lg:h-[44px] lg:w-[44px]' />
              ) : (
                <img
                  className='h-[32px] w-[32px] rounded-full lg:h-[44px] lg:w-[44px]'
                  alt='placeholder-user'
                  src={main_article.publisher_avatar}
                />
              )}
              {isLoading ? (
                <Skeleton className='h-[14px] w-[100px] lg:h-[42px] lg:w-[200px]' />
              ) : (
                <div className='font-elza flex flex-col justify-center lg:leading-[21px]'>
                  <h4 className='lg:font-[600]'>
                    <span className='lg:hidden'>by</span> {main_article.publisher_name}
                  </h4>
                  <p className='hidden lg:block'>{main_article.publisher_legend}</p>
                </div>
              )}
            </div>
          </div>
        </Link>
      </article> */}

      {/* <div className='absolute left-0 top-0 mt-[140px] w-full'>
        <div className='relative h-[340px] w-full'>
          <div className='from-ui-white to-ui-white/0 absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-b' />
          <DotPatternBackground
            className='z-0'
            dotsSeparationPx={{ vertical: isDesktop ? 45 : 35, horizontal: isDesktop ? 45 : 35 }}
            dotWidthPxIncreasePerRow={0}
            dotPatternTopPaddingPx={0}
          />
        </div>
        <div className='h-[10px] lg:h-[50px]' />
      </div> */}
    </section>
  );
}

export default BlogHero;
