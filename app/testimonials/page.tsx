'use client';

import ReviewsSection from "@/components/sections/ReviewsSection";

export default function Testimonials() {
  return (
    <main className='relative flex min-h-screen flex-col items-center justify-between'>
      <ReviewsSection  isTestimonialsPage />
    </main>
  );
}
