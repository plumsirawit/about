import React, { useEffect } from 'react';
import { useWindowHeight } from './useWindowHeight';

export const useIntersectionObserverEffect = (
  ref: React.MutableRefObject<any>,
  handler: (isObserving: boolean) => void,
) => {
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const refCurrent = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        // isIntersecting is true when element and viewport are overlapping
        // isIntersecting is false when element and viewport don't overlap
        handler(entries[0].isIntersecting);
      },
      { threshold: [0] },
    );
    observer.observe(refCurrent);
    return () => observer.unobserve(refCurrent);
  }, [ref.current]);
};

export const useScrollObserverEffect = (
  ref: React.MutableRefObject<any>,
  handler: (isObserving: boolean) => void,
) => {
  const windowHeight = useWindowHeight();
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const refCurrent = ref.current as HTMLElement;
    const listener = () => {
      const rect = refCurrent.getBoundingClientRect();
      // const verticalProgress = (rect.y + rect.height / 2) / windowHeight;
      const verticalStart = rect.top / windowHeight;
      const verticalEnd = rect.bottom / windowHeight;
      handler(verticalStart <= 0.5 && 0.5 <= verticalEnd);
    };
    document.addEventListener('scroll', listener);
    listener();
    return () => document.removeEventListener('scroll', listener);
  }, [ref.current, windowHeight]);
};
