import type { Metadata } from 'next';
import { clashDisplay } from '@/assets/fonts';
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
    <div className={`${clashDisplay.variable} font-messina-sans bg-[#F1EEE9] text-ui-black text-[14px] font-normal leading-none`}>
      {children}
    </div>
  );
} 