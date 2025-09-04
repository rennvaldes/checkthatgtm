import MarkdownContent from '@/lib/litebox-lib/ui/MarkdownContent';
import { Skeleton } from '@/lib/shadcn/ui/skeleton';
import { Icon } from '@iconify/react';
import React, { ComponentProps } from 'react';
import { getMainDataAndArticles } from '@/lib/api/strapi/blog';
import useGetQueryWithRefetchOnChange from '@/hooks/useGetQueryWithRefetchOnChange';

function BlogPageContent({ content, isLoading, data }: { content: string; isLoading: boolean; data: any }) {
  function ShareLink({ children, ...props }: ComponentProps<'a'>) {
    return (
      <a
        {...props}
        className='text-black hover:opacity-80 transition-opacity rounded-full p-2 duration-300 cursor-pointer'
        target='_blank'>
        {children}
      </a>
    );
  }

  const { category, image, title, publisher_name, publisher_avatar, publisher_legend, updatedAt } = data || {};
  const categoryName = category?.name || category;

  const { data: rawData, isLoading: isGeneralDataLoading } = useGetQueryWithRefetchOnChange({
    key: 'blog-data-hero',
    getFn: () => getMainDataAndArticles(),
  });

  const { blog_x_link, blog_instagram_link, blog_linkedin_link } = React.useMemo(() => rawData?.data ?? {}, [rawData]);

  return (
    <section className={`max-w-[1200px] lg:border-x border-ui-black/25 mb-14 w-full ${isLoading ? 'px-[20px]' : ''}`}>
      {isLoading && <Skeleton className='mt-[30px] w-full h-[206px] md:px-[20px] lg:h-[427px]' />}
      <div className='max-w-[840px] mx-auto flex-shrink-0 my-12 flex flex-col w-full md:flex-row md:items-center md:justify-between order-3 md:order-1'>
        <div className='flex items-center gap-[12px] lg:items-stretch px-4'>
          {isLoading ? (
            <Skeleton className='h-[32px] w-[32px] rounded-full lg:h-[44px] lg:w-[44px]' />
          ) : (
            <img
              className='rounded-full h-[44px] w-[44px] bg-ui-peach'
              alt='placeholder-user'
              src={publisher_avatar}
            />
          )}
          {isLoading ? (
            <Skeleton className='h-[18px] w-[103px] lg:h-[42px]' />
          ) : (
            <div className='font-elza flex flex-col justify-center leading-[21px]'>
              <h4 className='font-[600]'>
                {publisher_name}
              </h4>
              {publisher_legend && <p>{publisher_legend}</p>}
            </div>
          )}
        </div>
        {isGeneralDataLoading ? (
          <Skeleton className='mb-2 mt-4 h-[44px] md:w-[300px]' />
        ) : (
          <div className='hidden flex-shrink-0 md:flex gap-8 items-center'>
            <p className='font-bold text-primary-gray text-lg'>Share</p>

            <div className='flex items-center gap-2'>
              <ShareLink href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(location.href)}`} aria-label='Share on LinkedIn'>
                <Icon icon='mdi:linkedin' width={25} height={25} />
              </ShareLink>
              <ShareLink href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(location.href)}`} aria-label='Share on Twitter/X'>
                <Icon icon='devicon:twitter' width={20} height={20} />
              </ShareLink>
              <div className='relative flex items-center justify-center gap-1'>
                <button
                  onClick={() => navigator.clipboard.writeText(location.href)}
                  className='text-black hover:opacity-80 transition-opacity peer rounded-full p-2 duration-300'
                  aria-label='Copy link to clipboard'>
                  <Icon icon='solar:link-outline' width={20} height={20} />
                </button>
                <p className='invisible absolute -top-4 text-xs peer-focus:visible'>Copied!</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className='prose prose-lg font-elza max-w-[840px] mx-auto px-4'>
        <MarkdownContent isLoading={isLoading} content={content} />
      </div>
    </section>
  );
}

export default BlogPageContent;
