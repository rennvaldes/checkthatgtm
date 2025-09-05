import React from 'react';
import CaseStudyCard from '@/components/ui/CaseStudyCard';
import Spacer from '@/components/common/Spacer';
import CaseStudyImage1 from '@/assets/img/v2/case-study-1.png';
import CaseStudyImage2 from '@/assets/img/v2/case-study-2.png';

const CaseStudySection = () => {
  const caseStudies = [
    {
      id: 1,
      badge: 'Case Study',
      title: 'Surge AI is shaping AGI with the richness of human intelligence →',
      imageUrl: CaseStudyImage1,
    },
    {
      id: 2,
      badge: 'Case Study',
      title: 'Augment Code is never launching an IDE but building what comes after it →',
      imageUrl: CaseStudyImage2,
    },
  ];

  return;
  // return (
  //   <section>
  //     <div className="container mx-auto px-4">
  //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  //         {caseStudies.map((study) => (
  //           <CaseStudyCard
  //             key={study.id}
  //             badge={study.badge}
  //             title={study.title}
  //             imageUrl={study.imageUrl}
  //             className="h-[400px]"
  //           />
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default CaseStudySection;