/* eslint-disable @next/next/no-img-element */
import useGetQueryWithRefetchOnChange from '@/hooks/useGetQueryWithRefetchOnChange';
import Quotes from '../icons/Quotes';
import { getDataWithReviews } from '@/lib/api/strapi/reviews-section';
import React from 'react';
import { STRAPI_BASE_URL, STRAPI_IS_LOCAL_ENV } from '@/static/constants';
import Video from '@/lib/litebox-lib/ui/Video/Video';
import { Skeleton } from '@/lib/shadcn/ui/skeleton';
import { divide } from '@/lib/utils';
import { cn } from '@/lib/litebox-lib/utils/cn';
import KitButton from '../ui/KitButton';
import useResponsiveDevice from '@/hooks/useResponsiveDevice';
import { usePathname } from 'next/navigation';

function ReviewCard({ reviewData, isLoading }: any) {
  return isLoading ? (
    <Skeleton className='h-[300px] w-[320px] lg:h-[353px] lg:w-[405px]' />
  ) : (
    <article className='bg-ui-whitest'>
      <div className='px-[20px] py-[16px] lg:px-[32px] lg:py-[20px]'>
        <Quotes />
        <p
          className={cn(
            'font-elza mt-[12px]',
            reviewData.avatar && 'text-[14px] leading-[21px] lg:text-[16px] lg:leading-[24px]',
            reviewData.video && 'text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px]'
          )}>
          {reviewData.review_body}
        </p>
      </div>
      {reviewData.video ? (
        <div className='bg-ui-black/0 relative'>
          <Video src={reviewData.video} className='rounded-none' />
          <div className='font-elza text-ui-whitest absolute bottom-[16px] left-[20px] font-[600]'>
            <h4 className='text-[16px] leading-[24px]'>{reviewData.name}</h4>
            <p className='text-[14px] leading-[21px]'>{reviewData.legend}</p>
          </div>
        </div>
      ) : (
        <div className='flex items-center gap-[12px] px-[20px] pb-[16px] lg:px-[32px] lg:pb-[20px]'>
          <img
            src={reviewData.avatar}
            alt='User profile'
            className='h-[40px] w-[40px] rounded-full lg:h-[52px] lg:w-[52px]'
          />
          <div className='font-elza'>
            <h4 className='text-[14px] font-[600] leading-[21px] lg:text-[16px] lg:leading-[24px]'>
              {reviewData.name}
            </h4>
            <p className='text-[14px] leading-[21px]'>{reviewData.legend}</p>
          </div>
        </div>
      )}
    </article>
  );
}

function ReviewsSection() {
  const { data: rawData, isLoading } = useGetQueryWithRefetchOnChange({
    key: 'reviews-section',
    getFn: getDataWithReviews,
  });
  const [isExpanded, setIsExpanded] = React.useState(false);
  const { isDesktop, isProcessing } = useResponsiveDevice();

  const pathname = usePathname();
  const isTestimonialsPage = pathname === '/testimonials';

  const { mainData, reviews } = React.useMemo(() => {
    if (!rawData) return {};

    const { reviews: rawReviewsData, ...mainData } = rawData.data.attributes;

    const reviews = rawReviewsData.data.map(({ attributes }: any) => {
      const avatarURL = attributes.avatar.data?.attributes.url;
      const videoURL = attributes.video.data?.attributes.url;

      return {
        ...attributes,
        avatar: avatarURL ? (STRAPI_IS_LOCAL_ENV ? `${STRAPI_BASE_URL}${avatarURL}` : avatarURL) : undefined,
        video: videoURL ? (STRAPI_IS_LOCAL_ENV ? `${STRAPI_BASE_URL}${videoURL}` : videoURL) : undefined,
      };
    });

    return { mainData, reviews };
  }, [rawData]);

  const reviewsWithPlaceholders = reviews ?? Array.from({ length: 10 });
  const chunkedReviews: any[][] = divide(reviewsWithPlaceholders, 3);

  const isExpandedByFewElements =
    !!reviews && !isProcessing && ((!isDesktop && reviews.length <= 2) || (isDesktop && reviews.length <= 6));

  return (
    <section
      id='reviews-section'
      data-expanded={isExpanded || isExpandedByFewElements}
      className={cn(
        'relative mx-auto mt-[60px] flex max-w-[320px] flex-col items-center overflow-hidden pt-[50px] data-[expanded=true]:max-h-max lg:mt-[90px] lg:max-w-[1280px] lg:pt-[75px]',
        {
          'max-h-[1200px]': !isTestimonialsPage,
        }
      )}>
      {isLoading ? (
        <Skeleton className='mx-auto h-[31px] w-[300px] flex-shrink-0 lg:h-[57px] lg:w-[500px]' />
      ) : (
        <h3 className='flex-shrink-0 text-center text-[28px] leading-[31px] lg:text-[52px] lg:leading-[57px]'>
          {mainData.title_left}{' '}
          <span className='font-kepler-std text-ui-blue text-[32px] italic lg:text-[57px]'>
            {mainData.title_colored}
          </span>
        </h3>
      )}

      <div className='relative z-10 mt-[40px] flex flex-col gap-[20px] lg:hidden'>
        {reviewsWithPlaceholders.map((reviewData: any, index: number) => (
          <ReviewCard key={`review-${index}`} reviewData={reviewData} reviewIndex={index} isLoading={isLoading} />
        ))}
      </div>

      <div className='relative z-10 hidden lg:mt-[64px] lg:flex lg:gap-[32px]'>
        {chunkedReviews.map((reviewsColumn, index) => (
          <div key={`reviews-column-${index}`} className='flex flex-1 flex-col gap-[32px]'>
            {reviewsColumn.map((reviewData: any, index: number) => (
              <ReviewCard key={`review-${index}`} reviewData={reviewData} reviewIndex={index} isLoading={isLoading} />
            ))}
          </div>
        ))}
      </div>

      {!(isExpanded || isExpandedByFewElements || isTestimonialsPage) && (
        <div className='to-ui-white via-ui-white/80 from-ui-white/0 absolute bottom-0 left-0 z-20 h-[300px] w-full bg-gradient-to-b' />
      )}
      {!isExpandedByFewElements && !isTestimonialsPage && (
        <KitButton
          extraProps={{ 'data-expanded': isExpanded }}
          onClick={() => setIsExpanded(prev => !prev)}
          className='absolute bottom-8 z-30 mx-auto data-[expanded=true]:static data-[expanded=true]:mt-8'
          size='large'
          variant='primary'
          withAnimatedArrow={isExpanded ? 'to-top-right' : 'to-bottom-right'}
          href='/testimonials'
        >
          More testimonials
        </KitButton>
      )}
      {isTestimonialsPage && (
        <KitButton
          className='mt-[64px] mb-[169px]'
          size='large'
          variant='primary'
          withAnimatedArrow='to-left'
          useLeftArrow
          href='/'
        >
          Back to Home
        </KitButton>
      )}
    </section>
  );
}

export default ReviewsSection;
