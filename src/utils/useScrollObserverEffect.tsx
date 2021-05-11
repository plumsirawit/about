import React, { useEffect } from 'react';

export const useScrollObserverEffect = (
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
