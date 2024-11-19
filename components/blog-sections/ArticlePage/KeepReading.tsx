import BlogCard from '@/components/ui/BlogCard';
import KitButton from '@/components/ui/KitButton';
import { CardData } from '@/static/types';

import { chunk } from 'lodash';

function KeepReading({ relatedArticles }: { relatedArticles: CardData[] }) {
  return (
    <>
      <div className='border-ui-black w-full border-t-[1px]' />
      <section className='flex w-[320px] flex-col pb-[40px] pt-[80px] lg:w-full lg:max-w-[1280px] lg:pb-[120px] lg:pt-[56px]'>
        <h3 className='text-[24px] font-medium leading-[28px] lg:text-[36px] lg:leading-[42px]'>Keep Reading</h3>

        <div className='mt-[32px] flex flex-col gap-[32px] lg:hidden lg:flex-row lg:justify-between lg:gap-0'>
          {!!relatedArticles &&
            relatedArticles.map(articleData => <BlogCard className='mt-0' key={articleData.id} {...articleData} />)}
        </div>

        <div className='mt-[40px] hidden flex-col gap-[32px] lg:flex'>
          {chunk(relatedArticles, 3).map((row, index) => (
            <div key={index} className='flex justify-between'>
              {row.map(articleData => (
                <BlogCard className='mt-0 w-[405px]' key={articleData.id} {...articleData} />
              ))}
            </div>
          ))}
        </div>

        <KitButton
          sameBrowserTab
          href='/blog'
          size='large'
          variant='ghost'
          className='hover:bg-ui-black/10 mt-[52px] self-end rounded-full pr-0 lg:mt-[60px] lg:pr-[24px]'
          withAnimatedArrow='to-right'>
          View all blog posts
        </KitButton>
      </section>
    </>
  );
}

export default KeepReading;
