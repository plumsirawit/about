import React from 'react';
import './page-panel.css';

interface PagePanelProps {
  className?: string;
}
export function PagePanel<T extends PagePanelProps>(
  props: React.PropsWithChildren<T>,
) {
  return (
    <section className={['page-panel', props.className].join(' ')}>
      {props.children}
    </section>
  );
}
