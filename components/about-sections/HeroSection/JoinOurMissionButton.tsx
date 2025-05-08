'use client';

import KitButton from '@/components/ui/KitButton';
import useResponsiveDevice from '@/hooks/useResponsiveDevice';

export default function JoinOurMissionButton() {
  const { isDesktop } = useResponsiveDevice();

  const styles = isDesktop
    ? {
        className: 'mt-4',
      }
    : {
        className: 'mt-4 w-[178px] h-10 [&&]:px-5 [&&]:py-3 [&&]:text-[14px] text-nowrap',
        arrowClassName: 'min-w-4',
        arrowSize: 'medium' as const,
      };

  return (
    <KitButton {...styles} size='large' variant='primary' withAnimatedArrow='to-right'>
      Join our mission
    </KitButton>
  );
}
