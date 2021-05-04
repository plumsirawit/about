import React from 'react';
import './page-panel.css';

interface PagePanelProps {}
export function PagePanel<T extends PagePanelProps>(
  props: React.PropsWithChildren<T>,
) {
  return (
    <section className={['page-panel'].join(' ')}>{props.children}</section>
  );
}
