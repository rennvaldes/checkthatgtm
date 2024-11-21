import Input from '@/components/ui/Input';
import KitButton from '@/components/ui/KitButton';
import React from 'react';

import mountainImage from '@/assets/img/mountain.webp';
import Image from 'next/image';
import DotPatternBackground from '@/components/ui/DotPatternBackground';
import useResponsiveDevice from '@/hooks/useResponsiveDevice';
import useGetQueryWithRefetchOnChange from '@/hooks/useGetQueryWithRefetchOnChange';
import { getMainDataAndArticles } from '@/lib/api/strapi/blog';
import { Skeleton } from '@/lib/shadcn/ui/skeleton';
import { cn } from '@/lib/litebox-lib/utils/cn';
import { getData } from '@/lib/api/strapi/general';

function Decoration() {
  return (
    <div className='absolute -right-6 bottom-[73px] z-[100]'>
      <svg
        className='absolute bottom-[23px] right-[17px] z-10'
        width='15'
        height='16'
        viewBox='0 0 15 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <rect x='0.70166' y='0.902344' width='14.2711' height='14.2711' rx='7.13556' fill='#4400FF' />
        <path
          d='M8.49827 10.8413H7.6823V6.9881H6.44323V6.40635H6.685C7.24409 6.40635 7.56141 6.26279 7.78052 5.77926H8.49827V10.8413Z'
          fill='white'
        />
      </svg>

      <svg
        className='absolute bottom-0 right-[24px]'
        width='51'
        height='31'
        viewBox='0 0 51 31'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <g clipPath='url(#clip0_779_6217)'>
          <rect width='49.949' height='30.641' transform='translate(0.887695 0.0383301)' fill='#FDFDFF' />
          <path
            d='M-2.0008 30.6788L25.9706 10.1471L53.9419 30.6788L25.9706 51.2105L-2.0008 30.6788Z'
            fill='#FDFDFF'
            stroke='#20233A'
            strokeWidth='0.419739'
          />
          <path
            d='M-2.0008 0.0379257L25.9706 -20.4938L53.9419 0.0379257L25.9706 20.5697L-2.0008 0.0379257Z'
            fill='#FDFDFF'
            stroke='#20233A'
            strokeWidth='0.419739'
          />
        </g>
        <defs>
          <clipPath id='clip0_779_6217'>
            <rect width='49.949' height='30.641' fill='white' transform='translate(0.887695 0.0383301)' />
          </clipPath>
        </defs>
      </svg>

      <svg
        className='absolute bottom-[60px] right-[104px]'
        width='19'
        height='11'
        viewBox='0 0 19 11'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M0.841309 0.582275C0.841309 5.91403 5.16355 10.2363 10.4953 10.2363L18.0506 10.2363L18.0506 0.582275L0.841309 0.582275Z'
          fill='#4400FF'
        />
      </svg>

      <svg
        className='absolute bottom-[30px] right-[22px]'
        width='86'
        height='37'
        viewBox='0 0 86 37'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M0.0498047 1.19971L63.4304 1.19971C75.253 1.19971 84.8371 10.7838 84.8371 22.6064L84.8371 36.4578'
          stroke='#4400FF'
          strokeWidth='0.419739'
        />
      </svg>
    </div>
  );
}

function PortableNewsletterBanner({ className }: { className?: string }) {
  const { data: rawData, isLoading } = useGetQueryWithRefetchOnChange({
    key: 'blog-data-newsletter',
    getFn: () => getMainDataAndArticles(),
  });
  const { data: generalDataRaw } = useGetQueryWithRefetchOnChange({
    key: 'general-data',
    getFn: getData,
  });

  const [value, setValue] = React.useState('');

  const newsletter_banner_title = React.useMemo(() => {
    if (!rawData) return {};
    return rawData.data.newsletter_banner_title;
  }, [rawData]);

  const generalData = React.useMemo(() => generalDataRaw?.data.attributes || {}, [generalDataRaw]);
  // TODO: Disabling newsletter banner for now
  return (<></>)

  return (
    <div className={cn('bg-ui-green-light relative w-[327px] overflow-hidden px-[25px] pt-[20px]', className)}>
      <div className='relative z-30 mx-auto w-full pb-[98px] pt-[20px]'>
        {isLoading ? (
          <Skeleton className='h-[84px] w-full' />
        ) : (
          <h3 className='bg-ui-green-light pr-1 text-[20px] font-medium leading-[23px]'>{newsletter_banner_title}</h3>
        )}

        <div className='relative z-40 mt-[16px] flex flex-col items-start'>
          <Input
            inputClassName='py-3'
            className='bg-ui-green-light self-stretch text-[16px]'
            value={value}
            onChange={setValue}
            placeholder='Email address'
          />
          <KitButton
            href={`mailto:${generalData.suscribe_receiver_mail}?subject=${generalData.suscribe_mail_subject}&body=${generalData.suscribe_mail_body ?? ''}. Mail suscribing: ${value}`}
            variant='primary'
            size='large'
            className='mt-[16px]'>
            Suscribe
          </KitButton>
        </div>

        <Decoration />
        <Image
          alt='Mountain'
          className='absolute -bottom-[105px] right-[-52px] w-[257px] scale-x-[-1]'
          src={mountainImage}
        />
      </div>

      <div className='from-ui-green-light/100 via-ui-green-light/90 to-ui-green-light/50 absolute bottom-4 left-0 z-20 h-[130px] w-full bg-gradient-to-b' />
      <DotPatternBackground
        dotPatternTopPaddingPx={0}
        dotWidthPxIncreasePerRow={0}
        dotsSeparationPx={{ vertical: 25, horizontal: 25 }}
        className='bottom-2 top-auto z-10 !h-[120px] !px-2'
      />
    </div>
  );
}

export default PortableNewsletterBanner;
