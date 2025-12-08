import type { Metadata } from 'next';
import Script from 'next/script';
import { clashDisplay, messinaSans } from '@/assets/fonts';
import '@/static/globals.css';

export const metadata: Metadata = {
  title: 'Book a Demo | GrowthX',
  description: 'Schedule a demo with our team to learn how GrowthX can help accelerate your growth with AI-powered solutions.',
};

export default function BookDemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Script id="default-form" strategy="afterInteractive">
        {`(function(w,d){w.__default__={team_id:432,form_id:828228};var s=d.createElement('script');s.async=!0;s.src='https://import-cdn.default.com/v2/index.js';d.head.appendChild(s)})(window,document);`}
      </Script>
      <div className={`${clashDisplay.variable} ${messinaSans.variable} font-messina-sans bg-[#F1EEE9] text-ui-black text-[14px] font-normal leading-none`}>
        {children}
      </div>
    </>
  );
} 