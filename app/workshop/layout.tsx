import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Answers Workshop - GrowthX',
  description: 'Join our AI Answers Workshop to learn how to leverage AI for growth and customer success.',
  openGraph: {
    title: 'AI Answers Workshop - GrowthX',
    description: 'Join our AI Answers Workshop to learn how to leverage AI for growth and customer success.',
    url: 'https://growthx.ai/workshop',
    siteName: 'GrowthX',
    images: [{
      url: '/social.png',
      width: 1200,
      height: 630,
      alt: 'AI Answers Workshop - GrowthX',
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Answers Workshop - GrowthX',
    description: 'Join our AI Answers Workshop to learn how to leverage AI for growth and customer success.',
    images: [{
      url: '/social.png',
      width: 1200,
      height: 630,
      alt: 'AI Answers Workshop - GrowthX',
    }],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function WorkshopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 