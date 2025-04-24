import MarkdownContent from '@/lib/litebox-lib/ui/MarkdownContent';
import NewsletterBanner from '../NewsletterBanner';
import { Skeleton } from '@/lib/shadcn/ui/skeleton';

function BlogPageContent({ content, isLoading }: { content: string; isLoading: boolean }) {
  return (
    <section className={`max-w-[624px] lg:max-w-[863px] pb-[56px] w-full ${isLoading ? 'px-[20px]' : ''} lg:px-0`}>
      {isLoading && <Skeleton className='mt-[30px] w-full h-[206px] md:px-[20px] lg:h-[427px]' />}
      <MarkdownContent isLoading={isLoading} content={content} />
      <NewsletterBanner className='lg:hidden' />
    </section>
  );
}

export default BlogPageContent;
