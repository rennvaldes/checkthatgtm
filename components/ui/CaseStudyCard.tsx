import React from 'react';
import Image from 'next/image';

interface CaseStudyCardProps {
  badge: string;
  title: string;
  imageUrl: string;
  className?: string;
  visits?: number | string;
  pages?: number | string;
  timeframe?: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  badge,
  title,
  imageUrl,
  className = '',
  visits,
  pages,
  timeframe,
}) => {
  const formatCompact = (value: number) =>
    new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(value);

  const formatVisits = (v?: number | string) => {
    if (v === undefined || v === null || v === '') return null;
    const n = typeof v === 'string' ? Number(v) : v;
    if (!isNaN(n as number)) {
      return `+${formatCompact(n as number)} Visits`;
    }
    return `+${v} Visits`;
  };

  const formatPages = (p?: number | string) => {
    if (p === undefined || p === null || p === '') return null;
    const n = typeof p === 'string' ? Number(p) : p;
    if (!isNaN(n as number)) {
      return `${(n as number).toLocaleString()} Pages`;
    }
    return `${p} Pages`;
  };

  const statParts = [formatVisits(visits), formatPages(pages), timeframe?.trim()].filter(Boolean) as string[];

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
          {statParts.length > 0 && (
            <p className="mt-2 text-sm lg:text-base text-white/90">
              {statParts.join(' | ')}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
