/* eslint-disable @next/next/no-img-element */

import { cn } from '@/lib/litebox-lib/utils/cn';
import { slug } from '@/lib/litebox-lib/utils/slug';
import { Skeleton } from '@/lib/shadcn/ui/skeleton';
import { CardData } from '@/static/types';
import Link from 'next/link';

type Props = {
  className?: string;
  isLoading?: boolean;
};

function BlogCard({
  isLoading,
  id,
  image,
  image_alt,
  category,
  title,
  description,
  publisher_avatar,
  publisher_name,
  className,
}: CardData & Props) {
  return (
    <article className={cn('group relative z-20 mt-[52px] cursor-pointer', className)}>
      <Link href={`/blog/${id}/${slug(title)}`} className='block'>
        {isLoading ? (
          <Skeleton className='h-[184px] w-full rounded-none lg:h-[236px]' />
        ) : (
          <div className='h-[184px] w-full overflow-hidden lg:h-[236px]'>
            <img
              alt={image_alt}
              src={image}
              className='h-full w-full transition-transform duration-500 group-hover:scale-110'
            />
          </div>
        )}
        <div className='bg-ui-whitest relative flex flex-col justify-between p-[20px] text-left lg:h-[250px] lg:p-[32px]'>
          {isLoading ? (
            <Skeleton className='bg-ui-black/50 absolute right-[20px] top-0 h-[28px] w-[112px] translate-y-[-50%] rounded-full' />
          ) : (
            <div className='absolute right-[20px] top-0 translate-y-[-50%] rounded-full bg-[#DEDEF0] px-[12px] py-[8px] text-[12px] font-medium'>
              {category}
            </div>
          )}

          <div>
            {isLoading ? (
              <>
                <Skeleton className='h-[24px] w-full rounded-full' />{' '}
                <Skeleton className='mt-[8px] h-[24px] w-[66%] rounded-full' />
              </>
            ) : (
              <h3 className='group-hover:text-ui-blue transition-color text-[20px] font-medium leading-[23px] duration-500 lg:text-[24px]'>
                {title}
              </h3>
            )}
            {!!description && <p className='font-elza mt-[12px] text-[14px] leading-[21px]'>{description}</p>}
          </div>

          <div className='mt-[40px] flex items-center gap-[12px] lg:mt-0'>
            {isLoading ? (
              <Skeleton className='h-[32px] w-[32px] rounded-full' />
            ) : (
              <img className='h-[32px] w-[32px] rounded-full' alt='publisher' src={publisher_avatar} />
            )}
            {isLoading ? <Skeleton className='h-[18px] w-[103px] rounded-full' /> : <h4>by {publisher_name}</h4>}
          </div>
        </div>
      </Link>
    </article>
  );
}

export default BlogCard;
