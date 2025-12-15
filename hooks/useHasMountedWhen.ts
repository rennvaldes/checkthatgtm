import { useState, useEffect } from "react";

/**
 * Hook that returns true after a specified delay, useful for delaying animations
 * until content has had time to load and stabilize.
 *
 * @param delay - Delay in milliseconds before returning true (default: 10ms)
 * @returns boolean indicating whether the delay has elapsed
 */
export function useHasMountedWhen(delay = 10): boolean {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setHasMounted(true), delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [delay]);

  return hasMounted;
}
