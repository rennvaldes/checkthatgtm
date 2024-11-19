import X from '@/components/icons/X';
import TableOfContentsUI from '@/lib/litebox-lib/ui/TableOfContents/TableOfContents';
import PortableNewsletterBanner from '../PortableNewsletterBanner';
import { Skeleton } from '@/lib/shadcn/ui/skeleton';
import { cn } from '@/lib/litebox-lib/utils/cn';
import React from 'react';

function ButtonIcon() {
  return (
    <svg width='26' height='18' viewBox='0 0 26 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 1C0 0.447715 0.447715 0 1 0H1.01333C1.56562 0 2.01333 0.447715 2.01333 1C2.01333 1.55228 1.56562 2 1.01333 2H1C0.447715 2 0 1.55228 0 1ZM6.66667 1C6.66667 0.447715 7.11438 0 7.66667 0H25C25.5523 0 26 0.447715 26 1C26 1.55228 25.5523 2 25 2H7.66667C7.11438 2 6.66667 1.55228 6.66667 1ZM0 9C0 8.44772 0.447715 8 1 8H1.01333C1.56562 8 2.01333 8.44772 2.01333 9C2.01333 9.55229 1.56562 10 1.01333 10H1C0.447715 10 0 9.55229 0 9ZM6.66667 9C6.66667 8.44772 7.11438 8 7.66667 8H25C25.5523 8 26 8.44772 26 9C26 9.55229 25.5523 10 25 10H7.66667C7.11438 10 6.66667 9.55229 6.66667 9ZM0 17C0 16.4477 0.447715 16 1 16H1.01333C1.56562 16 2.01333 16.4477 2.01333 17C2.01333 17.5523 1.56562 18 1.01333 18H1C0.447715 18 0 17.5523 0 17ZM6.66667 17C6.66667 16.4477 7.11438 16 7.66667 16H25C25.5523 16 26 16.4477 26 17C26 17.5523 25.5523 18 25 18H7.66667C7.11438 18 6.66667 17.5523 6.66667 17Z'
        fill='currentColor'
      />
    </svg>
  );
}

function TableOfContents({ content, isLoading }: { content: string; isLoading: boolean }) {
  return (
    <nav className='relative z-[40] h-full overflow-hidden lg:border-l-[1px]'>
      {isLoading ? (
        <Skeleton className='bg-ui-black/50 fixed bottom-[20px] right-[20px] h-[64px] w-[64px] rounded-full' />
      ) : (
        <button className='bg-ui-whitest text-ui-black transition-color hover:bg-ui-blue hover:text-ui-whitest peer fixed bottom-[20px] right-[20px] flex h-[64px] w-[64px] items-center justify-center rounded-full duration-300 lg:hidden'>
          <ButtonIcon />
        </button>
      )}

      <div
        className={cn(
          'bg-ui-whitest lg:bg-ui-white group fixed bottom-0 left-0 mx-auto w-full translate-y-[200%] overflow-hidden px-[20px] py-[32px] transition-transform duration-500 ease-out group-focus-within:translate-y-0 peer-focus:translate-y-0 lg:static lg:w-[330px] lg:translate-y-0 lg:p-0 lg:pt-[56px]',
          isLoading && 'hidden lg:block'
        )}>
        {isLoading ? (
          <>
            <Skeleton className='h-[300px] w-full' />
            <Skeleton className='mt-[32px] h-[300px] w-full' />
          </>
        ) : (
          <>
            <div className='flex justify-between'>
              <p className='text-[18px] font-medium'>In this article</p>
              <button className='lg:hidden'>
                <X className='h-[12px] w-[12px]' />
              </button>
            </div>

            <div className='mt-[32px] h-auto max-h-[250px] overflow-scroll lg:max-h-full lg:overflow-visible'>
              <TableOfContentsUI headers={['h2', 'h3']} content={content} />
              <PortableNewsletterBanner className='!mt-[50px] hidden lg:block' />
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default TableOfContents;
