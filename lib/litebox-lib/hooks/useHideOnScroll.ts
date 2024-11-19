import { useEffect, useState, useRef, RefObject } from 'react';

interface UseHideOnScrollProps {
  ref?: RefObject<HTMLElement>;
}

/**
 * The `useHideOnScroll` hook is crafted to toggle the visibility of components based on the scroll direction. It works with the window's scroll events by default, but can also be attached to a specific scrollable element through a `ref`.
 * Version: 1.0.0
 * Docs: https://www.notion.so/litebox/useHideOnScroll-1-0-0-82ea7b3dec3e4cf48c4f895f3d9e9f99?pvs=25
 *
 * @param ref A `RefObject` for a specific scrollable element to monitor (optional).
 *
 * @returns `isVisible`: A boolean indicating the visibility state based on scroll direction.
 */
const useHideOnScroll = ({ ref }: UseHideOnScrollProps = {}) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const prevPositionRef = useRef<number>(0);
  const scrollPositionThreshold = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos: number = ref?.current?.scrollTop ?? window.scrollY;
      const prevScrollPos: number = prevPositionRef.current;

      const hasScrolledUp = prevScrollPos > currentScrollPos;
      const isAtTop = currentScrollPos <= scrollPositionThreshold;
      const shouldBeVisible = hasScrolledUp || isAtTop;

      setIsVisible(shouldBeVisible);
      prevPositionRef.current = currentScrollPos;
    };

    const scrollableElement: HTMLElement | Window = ref?.current ?? window;

    scrollableElement.addEventListener('scroll', handleScroll);

    return () => {
      scrollableElement.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  return { isVisible };
};

export default useHideOnScroll;
