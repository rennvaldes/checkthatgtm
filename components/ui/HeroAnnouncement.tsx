import React from 'react';
import Link from 'next/link';
import ArrowRight from '@/components/icons/ArrowRight';
import KitButton from './KitButton';
import { motion } from 'framer-motion';

interface HeroAnnouncementProps {
  text: string;
  link: string;
}

const HeroAnnouncement: React.FC<HeroAnnouncementProps> = ({ text, link }) => {
  return (
    <motion.div className='flex justify-center items-center mb-12 mt-4'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <KitButton href={link} size='medium' variant='outline-solid' withAnimatedArrow='to-right'>
        {text}
      </KitButton>
    </motion.div>
  );
};

export default HeroAnnouncement;
