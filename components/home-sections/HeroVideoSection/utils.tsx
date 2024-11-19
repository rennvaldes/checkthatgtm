import useGetQueryWithRefetchOnChange from '@/hooks/useGetQueryWithRefetchOnChange';
import useResponsiveDevice from '@/hooks/useResponsiveDevice';
import { getMainData } from '@/lib/api/strapi/hero-section';
import { HERO_SECTION_DATA_KEY, STRAPI_BASE_URL, STRAPI_IS_LOCAL_ENV } from '@/static/constants';
import React from 'react';

export enum VideoZone {
  Zero,
  Initial,
  Transition,
  Final,
  After,
}

const INITIAL_VIDEO_TRANSLATE = { x: 105 };
const INITIAL_VIDEO_SCALE = { x: 0.184, y: 0.184 };
const MAX_TRANSITION_SCROLL = 850;

function calculateNewTranslation(prev: { x: number }, scrolledPixels: number) {
  return {
    x: Math.max(0, Math.min(INITIAL_VIDEO_TRANSLATE.x, prev.x - scrolledPixels / 5)),
  };
}
function calculateNewScale(prev: { x: number; y: number }, scrolledPixels: number) {
  return {
    x: Math.max(INITIAL_VIDEO_SCALE.x, Math.min(1, prev.x + scrolledPixels / 1000)),
    y: Math.max(INITIAL_VIDEO_SCALE.y, Math.min(1, prev.y + scrolledPixels / 1000)),
  };
}

export function useVideoStyles() {
  const { isDesktop, isProcessing } = useResponsiveDevice();

  const [videoStyles, setVideoStyles] = React.useState({
    translate: INITIAL_VIDEO_TRANSLATE,
    scale: INITIAL_VIDEO_SCALE,
    zone: VideoZone.Zero,
    isVisible: false,
  });
  const previousScrollY = React.useRef(0);

  React.useEffect(() => {
    const onScroll = () => {
      const scrolledPixels = previousScrollY.current ? window.scrollY - previousScrollY.current : window.scrollY;
      previousScrollY.current = window.scrollY;

      let isVisible = false;
      const rect = document.getElementById('arrow-deco')?.getBoundingClientRect();
      if (rect)
        isVisible =
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth);

      if (!isProcessing && !isDesktop) {
        setVideoStyles({
          translate: { x: 0 },
          scale: { x: 1, y: 1 },
          zone: VideoZone.Final,
          isVisible,
        });
        previousScrollY.current = MAX_TRANSITION_SCROLL;
        return;
      }

      if (window.scrollY <= 1) {
        setVideoStyles({
          translate: INITIAL_VIDEO_TRANSLATE,
          scale: INITIAL_VIDEO_SCALE,
          zone: VideoZone.Initial,
          isVisible,
        });
      } else if (window.scrollY >= MAX_TRANSITION_SCROLL) {
        setVideoStyles({
          translate: { x: 0 },
          scale: { x: 1, y: 1 },
          zone: VideoZone.Final,
          isVisible,
        });
        previousScrollY.current = MAX_TRANSITION_SCROLL;
      } else
        setVideoStyles(prev => ({
          translate: calculateNewTranslation(prev.translate, scrolledPixels),
          scale: calculateNewScale(prev.scale, scrolledPixels),
          zone: VideoZone.Transition,
          isVisible,
        }));
    };

    onScroll();

    window.addEventListener('scroll', onScroll);
    return () => removeEventListener('scroll', onScroll);
  }, [isDesktop, isProcessing]);

  return videoStyles;
}

export function useVideoData() {
  const { isDesktop } = useResponsiveDevice();

  const videoData = React.useMemo(() => ({
    src: isDesktop
      ? 'https://www.youtube.com/watch?v=6mqEoW3PvP0' // Your desktop video URL
      : 'https://www.youtube.com/watch?v=6mqEoW3PvP0'  // Your mobile video URL (can be different)
  }), [isDesktop]);

  return { videoData, isLoading: false };
}
