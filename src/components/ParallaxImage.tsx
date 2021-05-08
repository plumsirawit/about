import React, { useEffect, useRef, useState } from 'react';
import { useCombinedRefs } from '../utils/refs';
import { standardLogisticFunction } from '../utils/math';

export const ParallaxImage = React.forwardRef<HTMLImageElement>(
  (props: React.HTMLAttributes<HTMLImageElement>, ref) => {
    const innerRef = useRef(null);
    const combinedRefs = useCombinedRefs<HTMLImageElement>(ref, innerRef);
    const [backgroundPosition, setBackgroundPosition] = useState<string>();
    const parallax = (e: MouseEvent) => {
      let _w = window.innerWidth / 2;
      let _h = window.innerHeight / 2;
      let _mouseX = e.clientX;
      let _mouseY = e.clientY;
      let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${
        50 - (_mouseY - _h) * 0.01
      }%`;
      let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${
        50 - (_mouseY - _h) * 0.02
      }%`;
      let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${
        50 - (_mouseY - _h) * 0.06
      }%`;
      let x = `${_depth3}, ${_depth2}, ${_depth1}`;
      console.log(x);
      setBackgroundPosition(x);
    };
    useEffect(() => {
      if (!combinedRefs.current) {
        return;
      }
      const elem = combinedRefs.current;
      elem.addEventListener('mousemove', parallax);
      return () => elem.removeEventListener('mousemove', parallax);
    }, [combinedRefs.current]);
    return <img ref={combinedRefs} {...props} />;
  },
);

export function useParallaxEffect<T extends HTMLElement>(
  ref: React.RefObject<T>,
) {
  useEffect(() => {
    if (!ref.current || !window || !document) {
      return;
    }
    const elem = ref.current;
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
      const depth = `${percentX}% ${percentY}%`;
      elem.style.backgroundPosition = depth;
      elem.style.backgroundSize = '150vw';
    };
    console.log('hello', elem);
    elem.addEventListener('mousemove', parallax);
    return () => elem.removeEventListener('mousemove', parallax);
  }, [ref.current, document, window]);
}
