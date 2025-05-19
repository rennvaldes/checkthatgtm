'use client';

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
    <div className='absolute bottom-[73px] right-0 z-[100] lg:bottom-[135px] lg:right-[70px] lg:scale-[2]'>
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

function NewsletterBanner({ className }: { className?: string }) {
  // return (
  //   <>
  //     <iframe 
  //       src="https://embeds.beehiiv.com/a74b51d8-211d-4085-ab61-be69549cf375" 
  //       data-test-id="beehiiv-embed" 
  //       width="100%" 
  //       height="320" 
  //       frameBorder="0" 
  //       scrolling="no" 
  //       style={{
  //         borderRadius: "0", 
  //         border: "1px solid #C1C0CD", 
  //         margin: 0, 
  //         backgroundColor: "transparent"
  //       }}
  //     />
  //   </>
  // );

  const { data: rawData, isLoading } = useGetQueryWithRefetchOnChange({
    key: 'blog-data-newsletter',
    getFn: () => getMainDataAndArticles(),
  });
  const { data: generalDataRaw } = useGetQueryWithRefetchOnChange({
    key: 'general-data',
    getFn: getData,
  });

  const { isDesktop } = useResponsiveDevice();
  const [value, setValue] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = React.useState('');

  // const newsletter_banner_title = React.useMemo(() => {
  //   if (!rawData) return {};
  //   return rawData.data.attributes.newsletter_banner_title;
  // }, [rawData]);

  const generalData = React.useMemo(() => generalDataRaw?.data.attributes || {}, [generalDataRaw]);

  const handleSubscribe = async () => {
    if (!value) {
      setSubmitStatus('error');
      setSubmitMessage('Please enter your email address.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: value }),
      });
      const result = await response.json();

      if (response.ok && result.data) {
        setSubmitStatus('success');
        setSubmitMessage('Successfully subscribed! Please check your email.');
        setValue(''); // Clear input on success
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.message || result.error?.message || 'Subscription failed. Please try again.');
        console.error('Beehiiv API Error:', result);
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setSubmitStatus('error');
      setSubmitMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={cn('bg-ui-green-light relative mt-[80px] w-full overflow-hidden lg:mt-[120px] max-w-[1280px] mx-auto px-4 lg:px-12', className)}>
      <div className='relative z-30 mx-auto w-[320px] pb-[120px] pt-[20px] lg:w-full lg:max-w-[1280px] lg:pb-[86px] lg:pt-[86px]'>
        {isLoading ? (
          <Skeleton className='h-[84px] w-[320px] lg:h-[84px] lg:w-[710px]' />
        ) : (
          <div className='max-w-screen-md flex flex-col gap-4'>
            <h3 className='bg-ui-green-light pr-1 text-3xl font-medium lg:text-[36px] leading-tighter'>
              Unlock AI-Powered Growth Strategies
            </h3>
            <p className='font-elza leading-tight text-ui-black/75 text-base max-w-[460px]'>Join experts from Y Combinator, HashiCorp & Affirm. <br className='hidden lg:block' /> Get bi-weekly, no-fluff insights on scaling and revenue growth.</p>
          </div>
        )}

        <div className='relative z-40 mt-[16px] flex flex-col items-start lg:mt-[32px] lg:flex-row lg:gap-[12px]'>
          <Input
            inputClassName='py-3'
            className='bg-ui-green-light self-stretch text-[16px] lg:w-[400px]'
            value={value}
            onChange={setValue}
            placeholder='Email address'
          />
          <KitButton
            onClick={handleSubscribe}
            isDisabled={isSubmitting}
            variant='primary'
            size='large'
            className='mt-[16px] lg:mt-0'>
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </KitButton>
        </div>
        {submitStatus !== 'idle' && (
          <p className={`mt-2 text-sm ${submitStatus === 'success' ? 'text-ui-black' : 'text-red-600'}`}>
            {submitMessage}
          </p>
        )}

        <Decoration />
        <Image
          alt='Mountain'
          className='absolute -bottom-[105px] right-[-32px] w-[257px] scale-x-[-1] lg:bottom-[-310px] lg:w-[612px]'
          src={mountainImage}
        />
      </div>

      <div className='from-ui-green-light/90 via-ui-green-light/70 to-ui-green-light/0 absolute bottom-4 left-0 z-20 h-[130px] w-full bg-gradient-to-b lg:bottom-auto lg:top-4 lg:h-[230px] lg:bg-gradient-to-t' />
      <DotPatternBackground
        dotPatternTopPaddingPx={0}
        dotWidthPxIncreasePerRow={0}
        dotsSeparationPx={{ vertical: isDesktop ? 35 : 25, horizontal: isDesktop ? 35 : 25 }}
        className='bottom-4 top-auto z-10 !h-[120px] !px-2 lg:bottom-auto lg:top-4 lg:!h-[220px]'
      />
    </div>
  );
}

export default NewsletterBanner;
