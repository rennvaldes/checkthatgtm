import MarkdownContent from '@/lib/litebox-lib/ui/MarkdownContent';
import { Skeleton } from '@/lib/shadcn/ui/skeleton';
import { Icon } from '@iconify/react';
import React, { ComponentProps } from 'react';
import { getMainDataAndArticles } from '@/lib/api/strapi/blog';
import useGetQueryWithRefetchOnChange from '@/hooks/useGetQueryWithRefetchOnChange';
import { Grid } from '@/components/home/grid/gridRoot';

function BlogSlugContent({ content, isLoading, data }: { content: string; isLoading: boolean; data: any }) {
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
    <section className='w-full px-5 lg:px-0 mb-14'>
      <Grid>
        {/* Publisher Info and Share - 8 cols */}
        <div className='col-span-12 lg:col-span-8 lg:col-start-3'>
          <div className='w-full max-w-[820px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0 my-12'>
            <div className='flex items-center gap-3'>
              {isLoading ? (
                <>
                  <Skeleton className='h-11 w-11 rounded-full' />
                  <Skeleton className='h-[42px] w-[103px]' />
                </>
              ) : (
                <>
                  <img
                    className='rounded-full h-11 w-11 object-cover'
                    alt={publisher_name}
                    src={publisher_avatar}
                  />
                  <div className='flex flex-col justify-center leading-tight'>
                    <h4 className='font-semibold'>
                      {publisher_name}
                    </h4>
                    {publisher_legend && <p className='text-foreground/60'>{publisher_legend}</p>}
                  </div>
                </>
              )}
            </div>

            {isGeneralDataLoading ? (
              <Skeleton className='h-11 w-[300px]' />
            ) : (
              <div className='hidden md:flex gap-8 items-center'>
                <p className='font-bold text-foreground/60 text-lg'>Share</p>
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
        </div>

        {/* Content - 8 cols, max-w-820px */}
        <div className='col-span-12 lg:col-span-8 lg:col-start-3'>
          <div className='w-full max-w-[820px] mx-auto'>
            {isLoading ? (
              <Skeleton className='w-full h-[427px]' />
            ) : (
              <div className='blog-content'>
                <MarkdownContent isLoading={isLoading} content={content} />
              </div>
            )}
          </div>
        </div>
      </Grid>

      <style jsx global>{`
        .blog-content {
          /* All headings */
          h1, h2, h3, h4, h5, h6 {
            font-size: 20px;
            line-height: 1.25;
            letter-spacing: -0.03em;
            font-weight: 600;
            margin-bottom: 0;
          }

          @media (min-width: 1024px) {
            h1, h2, h3, h4, h5, h6 {
              font-size: 24px;
              line-height: 1.25;
              letter-spacing: -0.03em;
            }
          }

          /* Paragraphs */
          p {
            font-size: 16px;
            line-height: 1.5;
            letter-spacing: -0.03em;
            margin-bottom: 0;
          }

          @media (min-width: 1024px) {
            p {
              font-size: 18px;
              line-height: 1.5;
              letter-spacing: -0.03em;
            }
          }

          /* Heading + p spacing */
          h1 + p, h2 + p, h3 + p, h4 + p, h5 + p, h6 + p {
            margin-top: 40px;
          }

          /* p + heading spacing */
          p + h1, p + h2, p + h3, p + h4, p + h5, p + h6 {
            margin-top: 40px;
          }

          /* p + p spacing */
          p + p {
            margin-top: 40px;
          }

          /* Lists */
          ul, ol {
            margin-top: 40px;
            margin-bottom: 0;
          }

          li {
            font-size: 16px;
            line-height: 1.5;
            letter-spacing: -0.03em;
          }

          @media (min-width: 1024px) {
            li {
              font-size: 18px;
              line-height: 1.5;
              letter-spacing: -0.03em;
            }
          }

          /* li + li spacing */
          li + li {
            margin-top: 18px;
          }

          /* Links */
          a {
            text-decoration: underline;
            color: inherit;
          }

          a:hover {
            opacity: 0.8;
          }

          /* Images */
          img {
            margin-top: 40px;
            margin-bottom: 40px;
            width: 100%;
            height: auto;
          }

          /* Code blocks */
          pre {
            margin-top: 40px;
            margin-bottom: 40px;
            padding: 16px;
            background-color: #f5f5f5;
            border-radius: 8px;
            overflow-x: auto;
          }

          code {
            font-family: 'Courier New', Courier, monospace;
            font-size: 14px;
          }

          @media (min-width: 1024px) {
            code {
              font-size: 16px;
            }
          }

          /* Blockquotes */
          blockquote {
            margin-top: 40px;
            margin-bottom: 40px;
            padding-left: 24px;
            border-left: 4px solid currentColor;
            font-style: italic;
          }
        }
      `}</style>
    </section>
  );
}

export default BlogSlugContent;
