import { cn } from '@/lib/shadcn/utils';
import { ComponentProps } from 'react';

type Props = ComponentProps<'main'>;

export const Main = ({ className = '', children, ...props }: Props) => {
  return (
    <main className={cn(['relative flex min-h-screen flex-col items-center justify-between', className])} {...props}>
      {children}
    </main>
  );
};
