import React, { ReactNode } from 'react';
import Button from "@/components/common/Button";

interface ContentLayoutProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
  className?: string;
  leftClassName?: string;
  rightClassName?: string;
  description?: string;
  descriptionClassName?: string;
  ctaButton?: {
    text: string;
    href?: string;
    onClick?: () => void;
    fillFrom?: string;
    fillTo?: string;
    textColorClass?: string;
    size?: 'sm' | 'md' | 'lg';
    icon?: ReactNode;
    className?: string;
    ariaLabel?: string;
  };
}

const ContentLayout: React.FC<ContentLayoutProps> = ({
  leftContent,
  rightContent,
  className = '',
  leftClassName = '',
  rightClassName = '',
  description = '',
  descriptionClassName = '',
  ctaButton,
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 ${className}`}>
      <div className={`md:col-span-2 text-[#151515] text-lg tracking-tight ${leftClassName}`}>
        {leftContent}
      </div>
      <div className={`md:col-span-10 ${rightClassName}`}>
        <div className="tracking-[-0.05em] font-semibold leading-[0.96]">
          {rightContent}
        </div>
        <div className={`${descriptionClassName} tracking-tight max-w-5xl`}>
          {description}
        </div>
        {ctaButton && (
          <div className="mt-6">
            <Button
              href={ctaButton.href}
              onClick={ctaButton.onClick}
              size={ctaButton.size ?? 'md'}
              fillFrom={ctaButton.fillFrom}
              fillTo={ctaButton.fillTo}
              textColorClass={ctaButton.textColorClass}
              className={ctaButton.className}
              ariaLabel={ctaButton.ariaLabel}
              variant="primary"
            >
              <span className="inline-flex items-center gap-2">
                <span>{ctaButton.text}</span>
                {ctaButton.icon ? <span className="shrink-0 ml-2">{ctaButton.icon}</span> : null}
              </span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentLayout;
