/* eslint-disable @next/next/no-img-element */

import { cn } from '@/lib/litebox-lib/utils/cn';
import { slug } from '@/lib/litebox-lib/utils/slug';
import { Skeleton } from '@/lib/shadcn/ui/skeleton';
import { CardData } from '@/static/types';
import Link from 'next/link';

type Props = {
  className?: string;
  isLoading?: boolean;
  slug?: string;
};

function BlogCard({
  isLoading,
  slug,
  image,
  image_alt,
  category,
  title,
  description,
  publisher_avatar,
  publisher_name,
  publisher_legend,
  className,
}: CardData & Props) {
  return (
    <article className={cn('group relative z-20 aspect-square cursor-pointer', className)}>
      <Link href={`/blog/${slug}`} className='block'>
        {isLoading ? (
          <Skeleton className='h-full w-full rounded-none aspect-square' />
        ) : (
          <div className='h-auto w-full overflow-hidden'>
            <img
              alt={image_alt}
              src={image}
              className='h-full w-full transition-transform duration-300 aspect-square object-cover'
            />
          </div>
        )}
        {isLoading ? (
          <Skeleton className='absolute left-4 top-4 h-[32px] w-[160px] rounded-none' />
        ) : (
          <div className='absolute left-4 top-4 lg:left-9 lg:top-9 border border-[#F1EEE9] px-2 lg:px-3 py-1 lg:py-2 text-base lg:text-lg font-light text-[#F1EEE9] rounded-none bg-transparent'>
            {category}
          </div>
        )}
        <div className='flex flex-col gap-2 lg:gap-6 justify-between p-6 lg:p-9 text-left absolute bottom-0 left-0 right-0'>
          <div>
            {isLoading ? (
              <>
                <Skeleton className='h-6 w-full rounded-full' />{' '}
                <Skeleton className='mt-2 h-6 w-[66%] rounded-full' />
              </>
            ) : (
              <h3 className='text-white text-xl font-medium leading-[23px] duration-500 lg:text-3xl lg:leading-[1.1] lg:tracking-tighter'>
                {title}
              </h3>
            )}
            {/* {!!description && <p className='font-elza mt-[12px] text-[14px] leading-[21px]'>{description}</p>} */}
          </div>

          <div className='flex items-center gap-[12px] lg:mt-0'>
            {isLoading ? (
              <Skeleton className='h-[32px] w-[32px] rounded-none lg:h-[100px] lg:w-[100px]' />
            ) : (
              <img className='h-10 w-10 bg-white rounded-none lg:h-16 lg:w-16 object-cover' alt='publisher' src={publisher_avatar} />
            )}
            {isLoading ? (
              <Skeleton className='h-6 w-[103px] rounded-full' />
            ) : (
              <div className='flex flex-col gap-1 text-white tracking-tight'>
                <p className='text-white font-semibold text-xl leading-tight'>
                  {publisher_name}
                </p>
                {publisher_legend && <p className='text-sm font-light leading-snug'>{publisher_legend}</p>}
              </div>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}

export default BlogCard;
