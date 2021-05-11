import React, { useRef, useState } from 'react';
import { PagePanel } from './PagePanel';
import './achievements-panel.css';
import { useCombinedRefs } from '../utils/refs';
import AnimateHeight from 'react-animate-height';
import { useScrollObserverEffect } from '../utils/useScrollObserverEffect';
import { useWindowHeight } from '../utils/useWindowHeight';

interface IAchievementPanelProps {
  className?: string;
}
export const AchievementPanel = React.forwardRef<
  HTMLElement,
  React.PropsWithChildren<IAchievementPanelProps>
>((props, ref) => {
  const backgroundImageRef = useRef<HTMLElement>(null);
  const combinedRefs = useCombinedRefs<HTMLElement>(ref, backgroundImageRef);
  const [height, setHeight] = useState<number>(25); // in vh
  const windowHeight = useWindowHeight();
  useScrollObserverEffect(combinedRefs, (isObserving) => {
    setHeight(isObserving ? 50 : 25);
  });
  return (
    <section ref={combinedRefs}>
      <AnimateHeight
        duration={500}
        height={(height * windowHeight) / 100}
        className={'page-panel achievement ' + props.className}
      >
        {props.children}
      </AnimateHeight>
    </section>
  );
});

export const AchievementsPanel = () => {
  return (
    <PagePanel className="achievements">
      <div className="main">
        <h1 className="header">Olympiad Achievements</h1>
        <AchievementPanel className="test1">Hello</AchievementPanel>
        <AchievementPanel className="test2">Hello2</AchievementPanel>
      </div>
    </PagePanel>
  );
};
