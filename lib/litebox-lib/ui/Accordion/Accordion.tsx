import React from 'react';
import { cn } from '../../utils/cn';

interface AccordionProps {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
  variant?: Variant;
  isOpen?: boolean;
  className?: string;
}

type Variant = 'filled' | 'outlined';

const VARIANTS = {
  essentialStyles: 'relative w-full',
  componentVariants: {
    filled: 'border-0 border-b border-current text-ui-black rounded-t-md',
    outlined: 'border rounded-md',
  },
  contentVariants: {
    filled: '',
    outlined: 'peer-checked:border-t',
  },
};

const ChevronIcon = ({ className }: { className: string }) => {
  return (
    <svg
      className={cn('lucide lucide-chevron-down', 'peer-checked:text-ui-blue hover:text-ui-blue transition-colors duration-200', className)}
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      stroke='currentColor'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M8 12 16 20 24 12' />
    </svg>
  );
};

/**
 * The `Accordion` component has two style variants (outlined or filled). Also it must be defined with an specific id, a title and its content. And It also integrates customization using Tailwind CSS by the className property.
 * Version: 1.0.0
 * Docs: https://www.notion.so/litebox/Accordion-1-0-0-1ad701bba51e4a9fb0b4cf11fb49bcb9
 *
 * @param id - The id attribute which will be assigned to the accordion.
 * @param title - The title element that will be always displayed at the top of the accordion.
 * @param content - The content that will be displayed when the accordion is open.
 * @param variant - The variant for the search input (default or outlined).
 * @param isOpen - Determine whether the accordion is opened or not
 * @param className - Additional CSS classes that can be passed to customize the styling of the component.
 */
const Accordion = ({ id, title, variant = 'outlined', isOpen = false, content, className }: AccordionProps) => {
  const { essentialStyles, componentVariants, contentVariants } = VARIANTS;

  return (
    <div className={cn(essentialStyles, componentVariants[variant], className)}>
      <input type='checkbox' id={id} className='hidden peer' defaultChecked={isOpen} />
      <label
        htmlFor={id}
        className={cn(
          'flex justify-between py-4 lg:py-[24px] cursor-pointer transition-colors duration-200',
          'peer-checked:text-ui-blue',
          'font-clash-display'
        )}
      >
        {title}
      </label>
      <ChevronIcon className='absolute right-0 lg:top-[34px] top-[51px] transform transition-transform duration-500 ease-out peer-checked:-rotate-180 pointer-events-none' />
      <div
        className={cn(
          'max-h-0 overflow-hidden transition-all duration-600 ease-in',
          contentVariants[variant],
          'peer-checked:max-h-[1500px] peer-checked:pb-4'
        )}
      >
        <div className='pb-4 overflow-hidden font-elza'>
          {content}
        </div>
      </div>
    </div>
  );
};

Accordion.displayName = 'Accordion';

export default Accordion;
