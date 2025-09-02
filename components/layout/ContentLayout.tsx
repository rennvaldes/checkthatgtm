import React, { ReactNode } from 'react';

interface ContentLayoutProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
  className?: string;
  leftClassName?: string;
  rightClassName?: string;
  description?: string;
  descriptionClassName?: string;
}

const ContentLayout: React.FC<ContentLayoutProps> = ({
  leftContent,
  rightContent,
  className = '',
  leftClassName = '',
  rightClassName = '',
  description = '',
  descriptionClassName = '',
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 ${className}`}>
      <div className={`md:col-span-2 text-[#151515] text-lg tracking-tight ${leftClassName}`}>
        {leftContent}
      </div>
      <div className={`md:col-span-10 ${rightClassName}`}>
        <div>
          {rightContent}
        </div>
        <div className={`${descriptionClassName} tracking-tight max-w-5xl`}>
          {description}
        </div>
      </div>
    </div>
  );
};

export default ContentLayout;
