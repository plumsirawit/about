import React, { useEffect, useState } from 'react';

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
  const [windowHeight, setWindowHeight] = useState<number>(1);
  useEffect(() => {
    const listener = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', listener);
    listener();
    return () => window.removeEventListener('resize', listener);
  }, [window]);
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const refCurrent = ref.current as HTMLElement;
    const listener = () => {
      const rect = refCurrent.getBoundingClientRect();
      const verticalProgress = (rect.y + rect.height / 2) / windowHeight;
      handler(verticalProgress >= 0.4 && verticalProgress <= 0.8);
    };
    document.addEventListener('scroll', listener);
    return () => document.removeEventListener('scroll', listener);
  }, [ref.current, windowHeight]);
};
