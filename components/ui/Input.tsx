import React from 'react';
import Search from '../icons/Search';
import X from '../icons/X';
import { cn } from '@/lib/litebox-lib/utils/cn';

type Props = {
  value: string;
  onChange: (newValue: string) => void;
  isDisabled?: boolean;
  className?: string;
  withSearchIcon?: boolean;
  placeholder?: string;
  inputClassName?: string;
};

function Input({ value, onChange, isDisabled, className, withSearchIcon, placeholder, inputClassName }: Props) {
  const inputRef = React.useRef<any>();

  const onContainerFocusToggle = React.useCallback((isFocused: boolean) => {
    if (!isDisabled) {
      if (isFocused) inputRef.current.focus();
      else inputRef.current.blur();
    }
  }, [isDisabled]);

  return (
    <div
      className={cn(
        'border-ui-black/0 transition-color focus-within:border-ui-black/100 border-[1px] duration-300',
        className
      )}>
      <div
        role='search'
        tabIndex={isDisabled ? undefined : 0}
        onFocus={() => onContainerFocusToggle(true)}
        onBlur={() => onContainerFocusToggle(false)}
        className='border-ui-black/40 transition-color hover:border-ui-black/100 aria-disabled:hover:border-ui-black/40 focus-within:border-ui-black/100 group flex w-full cursor-text items-center gap-[16px] border-[1px] pb-[11px] pl-[16px] pr-0 pt-[12px] duration-300 focus:outline-none aria-disabled:cursor-not-allowed aria-disabled:opacity-[40%]'>
        {withSearchIcon && <Search className='h-[16px] w-[16px] flex-shrink-0' />}
        <input
          value={value}
          disabled={isDisabled}
          onChange={e => onChange(e.target.value)}
          ref={inputRef}
          placeholder={placeholder}
          className={cn(
            'bg-ui-white/0 placeholder:text-ui-black/40 mt-[1px] h-[16px] w-full outline-none placeholder:font-medium disabled:cursor-not-allowed',
            inputClassName
          )}
        />
        {!!value && (
          <button onClick={() => onChange('')}>
            <X className='text-ui-black/40 mr-[10px] h-[10px] w-[10px] flex-shrink-0' />
          </button>
        )}
      </div>
    </div>
  );
}

export default Input;
