import React from 'react';
import Image from 'next/image';

interface CaseStudyCardProps {
  badge: string;
  title: string;
  imageUrl: string;
  className?: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  badge,
  title,
  imageUrl,
  className = '',
}) => {
  return (
    <div className={`relative overflow-hidden group ${className}`}>
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        <div className="absolute inset-0 group-hover:bg-black/20 transition-colors duration-300" />
      </div>
      
      <div className="relative z-10 h-full flex flex-col justify-between p-4 lg:p-6 text-white">
        <div className="inline-flex items-center px-3 py-1.5 text-base lg:text-lg text-white">
          {badge}
        </div>
        
        <div>
          <h3 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium tracking-tighter leading-[0.96] cursor-pointer">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
