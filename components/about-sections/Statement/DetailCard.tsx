import ArrowRight from '@/components/icons/ArrowRight';
import { cn } from '@/lib/shadcn/utils';
import Line from './Line';
import { PropsWithChildren } from 'react';
import DotPatternBackground from '@/components/ui/DotPatternBackground';

type ItemDetail = {
  title: string;
  subTitle: JSX.Element;
};

type Props = {
  className?: string;
  data: ItemDetail[];
};

export default function DetailCard({ className = '', data }: Props) {
  return (
    <div className={cn(['bg-ui-black py-[43px] px-[70px] w-[405px] h-[416px] relative', className])}>
      <ul className='w-full h-full flex flex-col justify-center gap-3 relative z-[5]'>
        {data.map(({ title, subTitle }, index) => (
          <li className='grid grid-cols-[24px_auto] text-ui-whitest gap-x-2' key={`Marcel-item-${index.toString()}`}>
            <ArrowRight className='w-6 h-6 bg-ui-green-light rounded-full text-ui-black' />
            <h4 className='font-elza font-[600] text-[16px] leading-[150%] tracking-normal'>{title}</h4>
            {subTitle}
          </li>
        ))}
      </ul>
      <DotPatternBackground
        className='z-[2]'
        dotsColorStyle='bg-ui-peach'
        dotsSeparationPx={{ horizontal: 41, vertical: 41 }}
        dotWidthPxIncreasePerRow={0}
        dotPatternTopPaddingPx={40}
      />
      <div className='from-ui-black via-ui-black to-ui-black/80 absolute left-0 top-0 z-[3] w-full h-full bg-gradient-to-b' />
      <Line className='absolute inset-0 z-[4]' />
    </div>
  );
}

type DetailSubTitleProps = PropsWithChildren<{ clasName?: string }>;

function SubTitle({ children, clasName }: DetailSubTitleProps) {
  return (
    <p className={cn(['col-start-2 font-elza font-[400] text-[14px] leading-[150%] tracking-normal', clasName])}>
      {children}
    </p>
  );
}

DetailCard.SubTitle = SubTitle;
