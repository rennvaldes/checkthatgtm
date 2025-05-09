import { cn } from '@/lib/shadcn/utils';

type Props = {
  className?: string;
  title: string;
  subtitle: string;
  imgSrc: string;
  imgAlt: string;
};

export default function ImageCard({ className, title, subtitle, imgSrc, imgAlt }: Props) {
  return (
    <div
      className={cn([
        'text-ui-whitest relative w-[152px] h-[162px] lg:w-[405px] lg:h-[416px] flex flex-col justify-end p-2 lg:p-[22px] pb-0 gap-[2px]',
        className,
      ])}>
      <img className='absolute inset-0 -z-[1] h-full object-cover' loading='lazy' src={imgSrc} alt={imgAlt} />
      <h4 className='font-clash-display font-[500] text-xs lg:text-[24px] leading-[114%] tracking-normal'>{title}</h4>
      <h4 className='font-elza font-[400] text-xs lg:text-[16px] leading-[150%] tracking-normal'>{subtitle}</h4>
    </div>
  );
}
