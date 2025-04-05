'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import ChevronThin from '@/components/icons/ChevronThin';
import KitButton from '@/components/ui/KitButton';
import useHideOnScroll from '@/lib/litebox-lib/hooks/useHideOnScroll';
import Logo from '@/components/icons/Logo';
import useGetQueryWithRefetchOnChange from '@/hooks/useGetQueryWithRefetchOnChange';
import { getData } from '@/lib/api/strapi/general';

function Dropdown({ docs_url }: { docs_url: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      tabIndex={0}
      role='button'
      aria-expanded={isExpanded}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setTimeout(() => setIsExpanded(prev => (prev ? false : prev)), 200)}
      className='relative overflow-hidden aria-expanded:overflow-visible'>
      <KitButton variant='secondary' size='medium' className='peer flex items-center justify-center gap-[12px]'>
        Resources
        <ChevronThin
          extraProps={{ 'data-spin': isExpanded }}
          className='flex-shrink-0 text-[10.7px] transition-transform duration-200 data-[spin=true]:rotate-180'
        />
      </KitButton>
      <div className='absolute left-0 w-full pt-[8px] transition-opacity duration-200 hover:opacity-100 peer-hover:opacity-100'>
        <div className='bg-ui-whitest absolute flex w-full flex-col rounded-[20px] p-[8px]'>
          <KitButton sameBrowserTab href='/blog' variant='secondary' size='medium' className='!text-left font-normal'>
            Blog
          </KitButton>
          <KitButton
            href={docs_url}
            arrowSize='medium'
            variant='secondary'
            size='medium'
            withAnimatedArrow='to-top-right'
            className='justify-between font-normal'>
            Docs
          </KitButton>
        </div>
      </div>
    </div>
  );
}

function Desktop() {
  const { data: rawData } = useGetQueryWithRefetchOnChange({ key: 'general', getFn: getData });

  const { isVisible } = useHideOnScroll();

  const docs_url = React.useMemo(() => rawData?.data.attributes.docs_url, [rawData]);

  return (
    <nav
      aria-hidden={!isVisible}
      className='bg-ui-white fixed z-[100] flex w-screen items-center justify-between bg-opacity-[80%] py-[16px] pl-[20px] pr-[16px] font-medium backdrop-blur-[20px] transition-transform duration-300 aria-hidden:-translate-y-full lg:px-[52px] lg:py-[16px]'>
      <Link href="/">
        <Logo />
      </Link>

      <ul className='flex items-center justify-center'>
        <li>
          <KitButton scrollTo='results-section' variant='secondary' size='medium'>
            Our results
          </KitButton>
        </li>
        <li>
          <KitButton scrollTo='how-it-works-section' variant='secondary' size='medium'>
            How it works
          </KitButton>
        </li>
        <li>
          <KitButton scrollTo='reviews-section' variant='secondary' size='medium'>
            Reviews
          </KitButton>
        </li>
        <li>
          <KitButton scrollTo='pricing-section' variant='secondary' size='medium'>
            Pricing
          </KitButton>
        </li>
        <li>
          <KitButton
            className='secondary'
            href='/careers'
            variant='ghost'
            size='custom'
            sameBrowserTab={true}>
            Careers
          </KitButton>
        </li>
        <li className='hidden'>
          <KitButton sameBrowserTab href='/blog' variant='secondary' size='medium'>
            Blog
          </KitButton>
        </li>
        {/* <li>
          <Dropdown docs_url={docs_url} />
        </li> */}
      </ul>
      <KitButton 
        href='/book-demo' 
        variant='primary' 
        size='medium'
        className='rounded-full hover:bg-ui-blue'>
        Book a call
      </KitButton>
    </nav>
  );
}

export default Desktop;
