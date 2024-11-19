import { useEffect, useState } from 'react';

function useCustomMediaQuery(mediaQuery: string) {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);

    const handleChange = (event: any) => {
      setMatches(event.matches);
    };

    handleChange(mediaQueryList);

    mediaQueryList.addEventListener('change', handleChange);

    return () => {
      mediaQueryList.removeEventListener('change', handleChange);
    };
  }, [mediaQuery]);

  return matches;
}

/** Be fully aware that this hook works async because of the Effect used above ↑
 * Use the returned value `isProcessing` to check for this and avoid weird and very annoying behaviors. */
function useResponsiveDevice() {
  const isDesktop = useCustomMediaQuery('(min-width: 1024px)');
  const isTablet = useCustomMediaQuery('(min-width: 640px)');
  const isMobile = useCustomMediaQuery('(min-width: 0px)');

  const isProcessing = !isDesktop && !isTablet && !isMobile;

  return { isDesktop, isTablet, isMobile, isProcessing };
}

export default useResponsiveDevice;
