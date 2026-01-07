import React from 'react';
import { chunk } from 'lodash';
import { CardData } from '@/static/types';
import CTABanner from '@/components/common/CTABanner';
import GrowthXLogo from '@/assets/img/v2/growthx_logo.png';
import CaseStudyCard from '@/components/case-studies-sections/v2/CaseStudyCard';

type Props = {
  cardsData: CardData[];
  isLoading?: boolean;
};

export default function DesktopGrid({ cardsData, isLoading }: Props) {
  const rows = React.useMemo(() => chunk(cardsData, 3), [cardsData]);
  const fmtCompact = React.useCallback((n?: number | string) => {
    if (n === undefined || n === null || n === '') return undefined;
    const num = typeof n === 'string' ? Number(n) : n;
    if (typeof num === 'number' && !isNaN(num)) {
      return new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(num);
    }
    return String(n);
  }, []);
  const fmtThousands = React.useCallback((n?: number | string) => {
    if (n === undefined || n === null || n === '') return undefined;
    const num = typeof n === 'string' ? Number(n) : n;
    if (typeof num === 'number' && !isNaN(num)) {
      return num.toLocaleString();
    }
    return String(n);
  }, []);

  return;
  // return (
  //   <div className="flex w-full flex-col items-center">
  //     <div className="mt-10 flex w-full flex-col gap-20 lg:mt-16">
  //       {rows.map((row, rowIndex) => (
  //         <React.Fragment key={rowIndex}>
  //           <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  //             {row.map(card => (
  //               <CaseStudyCard
  //                 key={card.documentId}
  //                 className="mt-0! w-full"
  //                 href={`/case-study/${card.slug ?? card.documentId}`}
  //                 title={card.title}
  //                 image={card.image_16x9 || card.image}
  //                 imageAlt={card.image_alt || card.title}
  //                 meta={{
  //                   visits: fmtCompact(card.visits),
  //                   pages: fmtThousands(card.pages),
  //                   duration: card.timeframe,
  //                 }}
  //               />
  //             ))}
  //           </div>
  //         </React.Fragment>
  //       ))}

  //       <div className="px-0 -mb-24 xl:-mb-52">
  //         <CTABanner
  //           logoSrc={GrowthXLogo}
  //           bgClassName="bg-[#FFD83E]"
  //           title={
  //             <>
  //               Get Started with
  //               <br className="hidden lg:block" /> AI-Led Growth
  //             </>
  //           }
  //           primaryButton={{ label: 'Book a Call', href: '/book-demo' }}
  //           description="Whether you're a budding startup or an established enterprise, discover how our AI can streamline your content creation and fuel your growth."
  //         />
  //       </div>
  //     </div>
  //   </div>
  // );
}
