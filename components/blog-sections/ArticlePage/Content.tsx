/* eslint-disable @next/next/no-img-element */
import MarkdownContent from '@/lib/litebox-lib/ui/MarkdownContent';
import NewsletterBanner from '../NewsletterBanner';
import { Skeleton } from '@/lib/shadcn/ui/skeleton';

function BlogPageContent({ content, isLoading }: { content: string; isLoading: boolean }) {
  return (
    <section className='lg:border-ui-black lg:border-r-[1px] lg:p-[56px]'>
      {isLoading ? (
        <Skeleton className='mt-[30px] h-[206px] w-screen lg:mt-0 lg:h-[427px] lg:w-[750px]' />
      ) : (
        <img src='https://i.ytimg.com/vi/LPe56fezmoo/maxresdefault.jpg' alt='gg' className='mt-[30px] w-full lg:mt-0' />
      )}
      <MarkdownContent isLoading={isLoading} content={content} />
      <NewsletterBanner className='lg:hidden' />
    </section>
  );
}

export default BlogPageContent;
