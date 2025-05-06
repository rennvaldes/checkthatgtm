import MarkdownContent from '@/lib/litebox-lib/ui/MarkdownContent';
import NewsletterBanner from '../NewsletterBanner';
import { Skeleton } from '@/lib/shadcn/ui/skeleton';
import Instagram from '@/components/icons/Instagram';
import Linkedin from '@/components/icons/Linkedin';
import LinkIcon from '@/components/icons/LinkIcon';
import Twitter from '@/components/icons/Twitter';
import React, { ComponentProps } from 'react';
import { getMainDataAndArticles } from '@/lib/api/strapi/blog';
import useGetQueryWithRefetchOnChange from '@/hooks/useGetQueryWithRefetchOnChange';

function BlogPageContent({ content, isLoading, data }: { content: string; isLoading: boolean; data: any }) {
  function ShareLink({ children, ...props }: ComponentProps<'a'>) {
    return (
      <a
        {...props}
        className='hover:bg-ui-green-light transition-color rounded-full p-2 duration-300 cursor-pointer'
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
    <section className={`max-w-screen-sm border-x border-ui-black/25 mb-14 mt-5 lg:mt-10 px-8 w-full ${isLoading ? 'px-[20px]' : ''}`}>
      {isLoading && <Skeleton className='mt-[30px] w-full h-[206px] md:px-[20px] lg:h-[427px]' />}
      <div className='flex-shrink-0 mb-5 lg:mb-8 flex flex-col w-full md:flex-row md:items-center md:justify-between order-3 md:order-1'>
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
                {publisher_name}
              </h4>
              {publisher_legend && <p className='hidden md:block'>{publisher_legend}</p>}
            </div>
          )}
        </div>
        {isGeneralDataLoading ? (
          <Skeleton className='mb-2 mt-4 h-[44px] md:w-[300px]' />
        ) : (
          <div className='flex-shrink-0 flex flex-col justify-start'>
            <p className='pl-2 font-medium mb-1'>Share</p>

            <div className='flex items-center gap-2'>
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
                  className='hover:bg-ui-green-light transition-color peer rounded-full p-2 duration-300'>
                  <LinkIcon />
                </button>
                <p className='invisible absolute -top-4 text-xs peer-focus:visible'>Copied!</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <MarkdownContent isLoading={isLoading} content={content} />
      <NewsletterBanner className='lg:hidden' />
    </section>
  );
}

export default BlogPageContent;
