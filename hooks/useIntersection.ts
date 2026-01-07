import { useState, useRef, useCallback, useEffect, RefObject } from "react";

/**
 * Intersection Observer hook with observer pooling for performance.
 *
 * @param rootMargin - Margin around the root (default: "0px")
 * @param rootRef - Optional ref to use as the root element
 * @param disabled - Disable the observer
 * @returns [setRef, isIntersecting, reset]
 */

type ObserverId = { root: Element | Document | null; margin: string };

type ObserverPoolEntry = {
  id: ObserverId;
  observer: IntersectionObserver;
  elements: Map<Element, (isIntersecting: boolean) => void>;
};

const observerIdList: ObserverId[] = [];
const observerPool = new Map<ObserverId, ObserverPoolEntry>();

const hasIntersectionObserver = typeof IntersectionObserver === "function";

function getOrCreateObserver(options: IntersectionObserverInit) {
  const id = {
    root: options.root || null,
    margin: options.rootMargin || "",
  };

  // Check if observer already exists with same config
  const existingId = observerIdList.find(
    (entry) => entry.root === id.root && entry.margin === id.margin
  );

  if (existingId) {
    const existing = observerPool.get(existingId);
    if (existing) return existing;
  }

  // Create new observer
  const elements = new Map<Element, (isIntersecting: boolean) => void>();
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);

  const poolEntry: ObserverPoolEntry = { id, observer, elements };
  observerIdList.push(id);
  observerPool.set(id, poolEntry);

  return poolEntry;
}

function observe(
  element: Element,
  callback: (isIntersecting: boolean) => void,
  options: IntersectionObserverInit
) {
  const { id, observer, elements } = getOrCreateObserver(options);

  elements.set(element, callback);
  observer.observe(element);

  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element);

    // Clean up if no more elements
    if (elements.size === 0) {
      observer.disconnect();
      observerPool.delete(id);
      const index = observerIdList.findIndex(
        (entry) => entry.root === id.root && entry.margin === id.margin
      );
      if (index > -1) {
        observerIdList.splice(index, 1);
      }
    }
  };
}

type UseIntersectionOptions = {
  rootMargin?: string;
  rootRef?: RefObject<Element | null>;
  disabled?: boolean;
};

export function useIntersection({
  rootMargin = "0px",
  rootRef,
  disabled = false,
}: UseIntersectionOptions = {}): [
  (element: Element | null) => void,
  boolean,
  () => void,
] {
  const isDisabled = disabled || !hasIntersectionObserver;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [element, setElement] = useState<Element | null>(null);

  const setRef = useCallback((el: Element | null) => {
    setElement(el);
  }, []);

  useEffect(() => {
    if (hasIntersectionObserver) {
      if (isDisabled || isIntersecting || !element) return;

      if (element.tagName) {
        const unobserve = observe(
          element,
          (visible) => visible && setIsIntersecting(visible),
          {
            root: rootRef?.current ?? null,
            rootMargin,
          }
        );
        return unobserve;
      }
    } else if (!isIntersecting) {
      // Fallback: use requestIdleCallback or setTimeout
      if ("requestIdleCallback" in window) {
        const id = window.requestIdleCallback(() => setIsIntersecting(true));
        return () => window.cancelIdleCallback(id);
      } else {
        const id = setTimeout(() => setIsIntersecting(true), 1);
        return () => clearTimeout(id);
      }
    }
  }, [isDisabled, rootMargin, rootRef, isIntersecting, element]);

  const reset = useCallback(() => {
    setIsIntersecting(false);
  }, []);

  return [setRef, isIntersecting, reset];
}
