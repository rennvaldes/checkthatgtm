'use client';

import Logo from '@/components/icons/Logo';
import KitButton from '@/components/ui/KitButton';
import LinksColumn from './LinksColumn';
import React from 'react';

const RIGHTS_TEXT = `©${new Date().getFullYear()} GrowthX. All rights reserved.`;

const socialLinks: Array<{ text: string; url: string }> = [
  { text: 'LinkedIn', url: 'https://linkedin.com' },
  { text: 'Twitter', url: 'https://twitter.com' },
  { text: 'Facebook', url: 'https://facebook.com' },
];

const bottomLinks: Array<{ text: string; url: string }> = [
  { text: 'Privacy Policy', url: '/privacy-policy' },
  { text: 'Terms of Service', url: '/terms-of-service' },
];

const DOCS_URL = 'https://growthxlabs.com/docs';

function Footer() {
  return (
    <footer id='footer' className='font-elza bg-ui-veige pb-[64px] pt-[52px] lg:pb-[64px] lg:pt-[64px]'>
      <div className='mx-auto w-[320px] overflow-hidden lg:w-full lg:max-w-[1280px]'>
        <div className='flex flex-col justify-between lg:flex-row'>
          <div>
            <h3 className='font-clash-display w-[300px] text-[44px] font-medium leading-[48px] lg:w-[730px] lg:text-[70px] lg:leading-[77px]'>
              Your Growth Starts Here{' '}
              <span className='font-kepler-std text-ui-blue text-[52px] italic lg:text-[80px]'>
                GrowthX
              </span>{' '}
              with us.
            </h3>
            <div className='flex'>
              <KitButton
                scrollTo='book-section'
                variant='primary'
                withAnimatedArrow='to-right'
                size='large'
                className='mt-[24px] lg:mt-[32px]'>
                Get Started
              </KitButton>
            </div>
          </div>
          <div className='flex gap-[40px] pt-[64px] lg:pt-[28px]'>
            <LinksColumn
              title='GrowthX'
              links={[
                { to: 'results-section', text: 'Our results' },
                { to: 'how-it-works-section', text: 'How it works' },
                { to: 'reviews-section', text: 'Reviews' },
                { to: 'pricing-section', text: 'Pricing' },
                { isExternal: true, sameBrowserTab: true, to: '/blog', text: 'Blog' },
                { isExternal: true, to: DOCS_URL, text: 'Docs' },
              ]}
            />
            <LinksColumn
              title='Social'
              links={socialLinks.map(({ text, url }) => ({ isExternal: true, text, to: url }))}
            />
          </div>
        </div>

        <div className='mt-[80px] flex flex-col justify-between lg:mt-[160px] lg:flex-row lg:items-center'>
          <Logo className='h-[24px] w-[136px]' />
          <div className='mt-[32px] flex gap-[20px] leading-[20px] lg:mt-0 lg:gap-[40px]'>
            {bottomLinks.map(({ text, url }, index) => (
              <KitButton key={index} size='custom' variant='ghost' className='hover:underline' href={url}>
                {text}
              </KitButton>
            ))}
            <p className='hidden lg:block'>{RIGHTS_TEXT}</p>
          </div>
          <p className='mt-[20px] lg:hidden'>{RIGHTS_TEXT}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
