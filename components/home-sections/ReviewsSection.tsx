import React from 'react';
import Quotes from '../icons/Quotes';
import { cn } from '@/lib/litebox-lib/utils/cn';
import KitButton from '../ui/KitButton';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

const reviewsData = [
  {
    "review_body": "Your guidance and execution on this SEO journey has been invaluable and we love working with you!",
    "name": "Stacey Baer",
    "legend": "VP of Marketing, Swoogo",
    "avatar": "https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/Stacey_Baer_Swoogo_VP_Marketing_b086dddd58.jpeg"
  },
  {
    "review_body": "GrowthX doesn’t just hand over a playbook—they dive in and do the work for you. Marcel and his team are all about delivering real, impactful growth without adding more to your plate.",
    "name": "Bob Summers",
    "legend": "CEO, Goodcall",
    "avatar": "https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/Bob_Summers_Goodcall_CEO_1_fbb6692987.jpg"
  },
  {
    "review_body": "I’ll be honest—I thought content automation sounded a bit 'too good to be true,' but GrowthX proved me wrong. It's already paying huge dividends.",
    "name": "Chaz Ross-Munro",
    "legend": "Head of Marketing, Datumate",
    "avatar": "https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/Chaz_Ross_Munro_0541aa7b70.jpeg"
  },
  {
    "review_body": "GrowthX is the real deal for practical AI workflows. I've pulled so much value from their frameworks and applied it directly to my work. Highly recommend if you’re ready to 100X your growth workflows!",
    "name": "Francesco Garofalo",
    "legend": "Growth Engineer, Teleport",
    "avatar": "https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/Francesco_Garofalo_f6ee387324.jpeg"
  },
  {
    "review_body": "If you're looking to dive into the next-gen of marketing, I'd definitely recommend.",
    "name": "Kenneth Tsai",
    "legend": "Growth Marketing, Constrafor",
    "avatar": "https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/Kenneth_Tsai_51ba3cc1c6.jpeg"
  },
  {
    "review_body": "GrowthX is truly defining AI-led growth, setting a new benchmark for what’s possible. Their expert-in-the-loop model combines a powerful blend of strategy, execution, and AI, delivering a hands-on, scalable approach that drives real impact.",
    "name": "Rajan Sheth",
    "legend": "CMO, Together AI",
    "avatar": "https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/Rajan_Sheth_6e1bd4180a.jpeg"
  },
  {
    "review_body": "Highly recommended, folks. Marcel knows his thing!",
    "name": "Paulo Martins",
    "legend": "CEO & Founder, Arena",
    "avatar": "https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/Paulo_Martins_Arena_CEO_profile_aeefc81b0d.jpg"
  },
  {
    "review_body": "Marcel is the mastermind behind the scaled LLM SEO strategy that’s driving results for us. He’s hands-on, incredibly technical, and his work speaks for itself. We’re seeing real, measurable impact thanks to his approach.",
    "name": "Guillaume Cabane",
    "legend": "General Partner, Hypergrowth",
    "avatar": "https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/Guillaume_Cabane_c9ba290b63.jpg"
  },
  {
    "review_body": "With GrowthX, AI-led growth is no longer a guessing game. Their systematic, AI-driven approach drives reliable results again and again. It’s impressive to see the impact they deliver.",
    "name": "Carilu Dietrich",
    "legend": "CMO & Hypergrowth Advisor",
    "avatar": "https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/Carilu_Dietrich_68f83955e6.jpeg"
  },
  {
    "review_body": "We've tried other partners, but GrowthX blew us away. Insanely responsive and fast, they deliver top-notch quality every time. Finally found a team that actually gets it.",
    "name": "Luke Tubinis",
    "legend": "Director of Growth, Ramp",
    "avatar": "https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/Luke_Tubinis_66f81f5f00.jpeg"
  },
  {
    "review_body": "It was a huge light bulb moment for me, rethinking what was possible and how we could approach things at Homebase.",
    "name": "John Waldmann",
    "legend": "CEO, Homebase",
    "avatar": "https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/John_Waldmann_1caa942e27.jpeg"
  },
  {
    "review_body": "We’re scaling fast at HeyGen, and GrowthX is the only partner that can keep up without sacrificing quality. Their programmatic SEO expertise has been a game-changer for our content growth.",
    "name": "Nav Singh",
    "legend": "Head of Growth, HeyGen",
    "avatar": "https://growthxlabs-prod-strapi-bucket.s3.us-east-1.amazonaws.com/Nav_Singh_968be95bb4.jpeg"
  }
];

function ReviewCard({ reviewData }: { reviewData: any }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-ui-whitest"
    >
      <div className="px-[20px] py-[16px] lg:px-[32px] lg:py-[20px]">
        <Quotes />
        <p className="font-elza mt-[12px] text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px]">
          {reviewData.review_body}
        </p>
      </div>
      <div className="flex items-center gap-[12px] px-[20px] pb-[16px] lg:px-[32px] lg:pb-[20px]">
        <Image
          src={reviewData.avatar}
          alt={`Avatar of ${reviewData.name}`}
          width={52}
          height={52}
          className="h-[40px] w-[40px] rounded-full lg:h-[52px] lg:w-[52px]"
        />
        <div className="font-elza">
          <h4 className="text-[14px] font-[600] leading-[21px] lg:text-[16px] lg:leading-[24px]">
            {reviewData.name}
          </h4>
          <p className="text-[14px] leading-[21px]">{reviewData.legend}</p>
        </div>
      </div>
    </motion.article>
  );
}

function ReviewsSection() {
  const pathname = usePathname();
  const isTestimonialsPage = pathname === '/testimonials';

  return (
    <section
      id="reviews-section"
      className={cn(
        'relative mx-auto mt-[60px] flex max-w-[320px] flex-col items-center overflow-hidden pt-[50px] lg:mt-[90px] lg:max-w-[1280px] lg:pt-[75px]',
        {
          'max-h-[1200px]': !isTestimonialsPage,
        }
      )}
    >
      <h3 className="flex-shrink-0 text-center text-[28px] leading-[31px] lg:text-[52px] lg:leading-[57px]">
        Real people, real{' '}
        <span className="font-kepler-std text-ui-blue text-[32px] italic lg:text-[57px]">results</span>
      </h3>

      {/* Mobile view */}
      <div className="relative z-10 mt-[40px] flex flex-col gap-[20px] lg:hidden">
        {reviewsData.map((reviewData, index) => (
          <motion.div
            key={`review-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ReviewCard reviewData={reviewData} />
          </motion.div>
        ))}
      </div>

      {/* Desktop view */}
      <div className="relative z-10 hidden lg:mt-[64px] lg:flex lg:gap-[32px]">
        {[0, 1, 2].map((columnIndex) => (
          <motion.div
            key={`column-${columnIndex}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: columnIndex * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-1 flex-col gap-[32px]"
          >
            {reviewsData
              .filter((_, index) => index % 3 === columnIndex)
              .map((reviewData, index) => (
                <ReviewCard key={`review-${index}`} reviewData={reviewData} />
              ))}
          </motion.div>
        ))}
      </div>

      {/* Gradient overlay for non-testimonials pages */}
      {!isTestimonialsPage && (
        <div className="to-ui-white via-ui-white/80 from-ui-white/0 absolute bottom-0 left-0 z-20 h-[300px] w-full bg-gradient-to-b" />
      )}

      {/* Conditional button rendering */}
      {isTestimonialsPage ? (
        <KitButton
          className="mt-[64px] mb-[169px]"
          size="large"
          variant="primary"
          withAnimatedArrow="to-left"
          useLeftArrow
          href="/"
          sameBrowserTab={true}
        >
          Back to Home
        </KitButton>
      ) : (
        <KitButton
          className="absolute bottom-8 z-30 mx-auto"
          size="large"
          variant="primary"
          withAnimatedArrow="to-bottom-right"
          href="/testimonials"
          sameBrowserTab={true}
        >
          More testimonials
        </KitButton>
      )}
    </section>
  );
}

export default ReviewsSection;
