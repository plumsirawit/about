import React from 'react';
import './page-panel.css';

interface PagePanelProps {
  className?: string;
}
export const PagePanel = React.forwardRef<
  HTMLElement,
  React.PropsWithChildren<PagePanelProps>
>((props, ref) => {
  return (
    <section ref={ref} className={['page-panel', props.className].join(' ')}>
      {props.children}
    </section>
  );
});
