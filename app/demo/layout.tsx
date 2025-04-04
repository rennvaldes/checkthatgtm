import Script from 'next/script'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Demo | GrowthX',
  description: 'Schedule a demo with our team to learn how GrowthX can help accelerate your growth with AI-powered solutions.',
}

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Script 
        src="https://import-cdn.default.com/sdk.js"
        strategy="beforeInteractive"
        id="default-sdk"
      />
      {children}
    </>
  )
} 