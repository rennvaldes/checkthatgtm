import { cn } from '@/lib/shadcn/utils';

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('h-full w-full animate-pulse rounded-md bg-neutral-900/20 dark:bg-neutral-50/20', className)}
      {...props}
    />
  );
}

export { Skeleton };
