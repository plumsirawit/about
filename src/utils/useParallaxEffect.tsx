import React, { useEffect } from 'react';
import { standardLogisticFunction } from './math';

export function useParallaxEffect<T extends HTMLElement>(
  ref: React.RefObject<T>,
) {
  useEffect(() => {
    if (!ref.current || !window || !document) {
      return;
    }
    const elem = ref.current as HTMLElement;
    if (!elem) {
      return;
    }
    const parallax = (e: MouseEvent) => {
      let _w = elem.clientWidth / 2;
      let _h = elem.clientHeight / 2;
      const elemRect = elem.getBoundingClientRect();
      let _mouseX = e.clientX - elemRect.left;
      let _mouseY = e.clientY - elemRect.top;
      const dx = (_mouseX - _w) / _w; // [-1, 1]
      const dy = (_mouseY - _h) / _h; // [-1, 1]
      const percentX = 50 + standardLogisticFunction(dx * 2) * 10;
      const percentY = 50 + standardLogisticFunction(dy * 2) * 10;
      const [oldPX, oldPY] = elem.style.backgroundPosition.includes('%')
        ? elem.style.backgroundPosition.split('%').map((s) => Number(s.trim()))
        : [50, 50];
      const depth = `${(percentX + oldPX * 9) / 10}% ${
        (percentY + oldPY * 9) / 10
      }%`;
      elem.style.backgroundPosition = depth;
    };
    elem.addEventListener('mousemove', parallax);
    return () => elem.removeEventListener('mousemove', parallax);
  }, [ref.current, document, window]);
}
