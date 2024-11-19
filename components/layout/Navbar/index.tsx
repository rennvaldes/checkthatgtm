'use client';
import useResponsiveDevice from '@/hooks/useResponsiveDevice';

import Desktop from './Desktop';
import Mobile from './Mobile';

function Navbar() {
  const { isDesktop, isProcessing } = useResponsiveDevice();

  return isProcessing ? null : isDesktop ? <Desktop /> : <Mobile />;
}

export default Navbar;
