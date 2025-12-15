import { Skeleton } from '@/lib/shadcn/ui/skeleton';
import { Grid } from '@/components/home/grid/gridRoot';

function BlogPageHeader({ data, isLoading }: { isLoading: boolean; data: any }) {
  const { category, image, title, publisher_name, publisher_avatar, publisher_legend } = data;

  // Handle category as array or string
  const categories = Array.isArray(category) ? category : category ? [category] : [];
  const categoryNames = categories.map((cat: any) => cat?.name || cat);

  if (isLoading) {
    return (
      <section className='w-full px-5 lg:px-0'>
        <Grid className='pt-8 lg:pt-12'>
          {/* Desktop skeleton */}
          <div className='hidden lg:block col-span-5'>
            <Skeleton className='w-full aspect-square' />
          </div>
          <div className='hidden lg:flex lg:col-span-7 flex-col justify-center gap-6 pl-12'>
            <Skeleton className='h-12 w-3/4' />
            <div className='flex gap-2'>
              <Skeleton className='h-8 w-24 rounded-full' />
              <Skeleton className='h-8 w-28 rounded-full' />
            </div>
            <Skeleton className='h-6 w-48' />
          </div>

          {/* Mobile skeleton */}
          <div className='lg:hidden col-span-12 flex flex-col gap-6'>
            <Skeleton className='h-10 w-3/4' />
            <div className='flex gap-2'>
              <Skeleton className='h-8 w-20 rounded-full' />
              <Skeleton className='h-8 w-24 rounded-full' />
            </div>
            <Skeleton className='h-6 w-40' />
            <Skeleton className='w-full aspect-square mt-4' />
          </div>
        </Grid>
      </section>
    );
  }

  return (
    <section className='w-full px-5 lg:px-0'>
      <Grid className='pt-8 lg:pt-12'>
        {/* Desktop layout - LTR (image left, chin right) */}
        <div className='hidden lg:block col-span-5'>
          {image && (
            <img
              src={image}
              alt={title}
              className='w-full aspect-square object-cover'
            />
          )}
        </div>

        <div className='hidden lg:flex lg:col-span-7 flex-col justify-center gap-6 pl-12'>
          <h1 className='text-[40px] leading-[1.1] font-medium tracking-tight'>
            {title}
          </h1>

          {categoryNames.length > 0 && (
            <div className='flex gap-2 flex-wrap'>
              {categoryNames.map((name: string, index: number) => (
                <span
                  key={index}
                  className='inline-flex items-center px-4 py-2 rounded-full border border-foreground text-sm'
                >
                  {name}
                </span>
              ))}
            </div>
          )}

          {(publisher_name || publisher_avatar) && (
            <div className='flex items-center gap-3'>
              {publisher_avatar && (
                <img
                  src={publisher_avatar}
                  alt={publisher_name}
                  className='w-10 h-10 rounded-full object-cover'
                />
              )}
              <div className='flex items-center gap-1.5'>
                <span className='font-medium text-foreground'>{publisher_name}</span>
                {publisher_legend && (
                  <>
                    <span className='text-foreground/60'>·</span>
                    <span className='text-foreground/60'>{publisher_legend}</span>
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Mobile layout - Vertical (chin above, image below) */}
        <div className='lg:hidden col-span-12 flex flex-col'>
          <h1 className='text-[32px] leading-[1.1] font-medium tracking-tight'>
            {title}
          </h1>

          {categoryNames.length > 0 && (
            <div className='flex gap-2 flex-wrap mt-6'>
              {categoryNames.map((name: string, index: number) => (
                <span
                  key={index}
                  className='inline-flex items-center px-4 py-2 rounded-full border border-foreground text-sm'
                >
                  {name}
                </span>
              ))}
            </div>
          )}

          {(publisher_name || publisher_avatar) && (
            <div className='flex items-center gap-3 mt-6'>
              {publisher_avatar && (
                <img
                  src={publisher_avatar}
                  alt={publisher_name}
                  className='w-10 h-10 rounded-full object-cover'
                />
              )}
              <div className='flex items-center gap-1.5'>
                <span className='font-medium text-foreground'>{publisher_name}</span>
                {publisher_legend && (
                  <>
                    <span className='text-foreground/60'>·</span>
                    <span className='text-foreground/60'>{publisher_legend}</span>
                  </>
                )}
              </div>
            </div>
          )}

          {image && (
            <img
              src={image}
              alt={title}
              className='w-full aspect-square object-cover mt-8'
            />
          )}
        </div>
      </Grid>
    </section>
  );
}

export default BlogPageHeader;
