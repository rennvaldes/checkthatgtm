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
          <Skeleton className='bg-ui-black/50 absolute right-[20px] top-0 h-[28px] w-[112px] translate-y-[-50%] rounded-full' />
        ) : (
          <div className='absolute top-4 right-4 rounded-full border border-white px-3 py-1.5 text-xs font-medium text-white'>
            {category}
          </div>
        )}
        <div className='flex flex-col gap-2 lg:gap-4 justify-between p-5 text-left absolute bottom-0 left-0 right-0'>
          <div>
            {isLoading ? (
              <>
                <Skeleton className='h-6 w-full rounded-full' />{' '}
                <Skeleton className='mt-2 h-6 w-[66%] rounded-full' />
              </>
            ) : (
              <h3 className='text-white text-xl font-medium leading-[23px] duration-500 lg:text-2xl'>
                {title}
              </h3>
            )}
            {/* {!!description && <p className='font-elza mt-[12px] text-[14px] leading-[21px]'>{description}</p>} */}
          </div>

          <div className='flex items-center gap-[12px] lg:mt-0'>
            {isLoading ? (
              <Skeleton className='h-[32px] w-[32px] rounded-full' />
            ) : (
              <img className='h-10 w-10 rounded-full bg-white' alt='publisher' src={publisher_avatar} />
            )}
            {isLoading ? (
              <Skeleton className='h-6 w-[103px] rounded-full' />
            ) : (
              <div className='flex flex-col -space-y-1 text-white'>
                <p className='text-white font-medium text-base'>
                  {publisher_name}
                </p>
                {publisher_legend && <p className='text-sm'>{publisher_legend}</p>}
              </div>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}

export default BlogCard;
