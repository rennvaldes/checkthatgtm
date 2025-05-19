import { cn } from '@/lib/shadcn/utils';
import { ReactNode } from 'react';

type Item = {
  className: string;
  name: string;
  position: string;
};

export function getInfiniteItems({ data }: { data: Item[] }) {
  const items: ReactNode[] = data.map(({ className, name, position }, index) => (
    <div
      className='flex flex-col items-center justify-center gap-1 w-[234px]'
      key={`first-row-${name}-${index.toString()}`}>
      <div className={cn([className, 'w-6 h-3 rounded-t-full'])} />
      <h4 className='font-elza font-[600] text-[16px] lg:text-[20px] leading-[150%] tracking-normal'>{name}</h4>
      <p className='font-elza font-[400] text-sm lg:text-[14px] leading-[150%] tracking-normal'>{position}</p>
    </div>
  ));

  return items;
}
