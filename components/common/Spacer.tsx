import React from 'react';

type SpacerSize = 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'd80' | 'd88' | 'd122' | 'd164';

interface SpacerProps {
  size?: SpacerSize;
}

const Spacer: React.FC<SpacerProps> = ({ size = 'medium' }) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'h-5 sm:h-6 md:h-8 lg:h-10';
      case 'medium':
        return 'h-7 sm:h-8 md:h-12 lg:h-14';
      case 'large':
        return 'h-9 sm:h-12 md:h-16 lg:h-20';
      case 'xl':
        return 'h-13 sm:h-16 md:h-24 lg:h-30';
      case 'xxl':
        return 'h-16 sm:h-20 md:h-35 lg:h-40';
      case 'd80':
        return 'h-10 sm:h-12 md:h-14 lg:h-[80px]';
      case 'd88':
        return 'h-10 sm:h-12 md:h-16 lg:h-[88px]';
      case 'd122':
        return 'h-12 sm:h-16 md:h-24 lg:h-[122px]';
      case 'd164':
        return 'h-16 sm:h-20 md:h-28 lg:h-[164px]';
      default:
        return 'h-8 sm:h-12 md:h-16 lg:h-20';
    }
  };

  return <div className={getSizeClasses()} aria-hidden="true" />;
};

export default Spacer;
