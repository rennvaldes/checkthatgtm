import KitButton from '@/components/ui/KitButton';
import { Skeleton } from '@/lib/shadcn/ui/skeleton';

function LinksColumn({
  isLoading,
  title,
  links,
}: {
  isLoading?: boolean;
  title: string;
  links: { isExternal?: boolean; sameBrowserTab?: boolean; to: string; text: string; scrollTo?: string }[];
}) {
  return isLoading ? (
    <Skeleton className='h-[200px] w-[160px]' />
  ) : (
    <div className='w-[160px] leading-[20px]'>
      <h4 className='text-[16px] font-[600]'>{title}</h4>

      <div className='mt-[24px] flex flex-col items-start gap-[12px]'>
        {links.map(({ to, text, isExternal, sameBrowserTab, scrollTo }, index) =>
          isExternal ? (
            <KitButton
              withAnimatedArrow='to-top-right'
              sameBrowserTab={sameBrowserTab}
              arrowSize='medium'
              size='custom'
              variant='ghost'
              className='hover:underline'
              arrowClassName='mt-[-2px] -translate-x-2'
              key={index}
              href={to}>
              {text}
            </KitButton>
          ) : (
            <KitButton
              className='hover:underline'
              href={scrollTo ? undefined : to}
              scrollTo={scrollTo}
              variant='ghost'
              size='custom'
              key={index}>
              {text}
            </KitButton>
          )
        )}
      </div>
    </div>
  );
}

export default LinksColumn;
