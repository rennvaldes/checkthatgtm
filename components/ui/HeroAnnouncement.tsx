import React from 'react';
import KitButton from './KitButton';

interface HeroAnnouncementProps {
  text: string;
  link: string;
}

const HeroAnnouncement: React.FC<HeroAnnouncementProps> = ({ text, link }) => {
  return (
    <div className='flex justify-center items-center mb-12 mt-4'>
      <KitButton href={link} size='medium' variant='outline-solid' withAnimatedArrow='to-right'>
        {text}
      </KitButton>
    </div>
  );
};

export default HeroAnnouncement;
