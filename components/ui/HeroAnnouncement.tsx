import React from 'react';
import Link from 'next/link';
import ArrowRight from '@/components/icons/ArrowRight';

interface HeroAnnouncementProps {
  text: string;
  link: string;
}

const HeroAnnouncement: React.FC<HeroAnnouncementProps> = ({ text, link }) => {
  return (
    <div className="flex justify-center items-center mb-12 mt-4">
      <Link href={link} className="font-elza font-medium no-underline flex items-center gap-4 border border-ui-black rounded-full pt-2.5 pb-2 px-5 text-sm lg:text-base group hover:bg-ui-black hover:text-ui-white transition-colors duration-150">
        <span>{text}</span>
        <ArrowRight className="h-4 w-4 text-ui-black -translate-y-[1px] group-hover:text-ui-white group-hover:translate-x-1 transition duration-150" />
      </Link>
    </div>
  );
};

export default HeroAnnouncement;
