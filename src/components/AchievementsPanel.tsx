import React, { useRef, useState } from 'react';
import { PagePanel } from './PagePanel';
import './achievements-panel.css';
import { useCombinedRefs } from '../utils/refs';
import { useParallaxEffect } from '../utils/useParallaxEffect';
import AnimateHeight from 'react-animate-height';
import {
  useIntersectionObserverEffect,
  useScrollObserverEffect,
} from '../utils/useScrollObserverEffect';

interface IAchievementPanelProps {
  className?: string;
}
export const AchievementPanel = React.forwardRef<
  HTMLElement,
  React.PropsWithChildren<IAchievementPanelProps>
>((props, ref) => {
  const backgroundImageRef = useRef<HTMLElement>(null);
  const combinedRefs = useCombinedRefs<HTMLElement>(ref, backgroundImageRef);
  const [height, setHeight] = useState<number>(200);
  useScrollObserverEffect(combinedRefs, (isObserving) => {
    setHeight(isObserving ? 300 : 200);
  });
  return (
    <PagePanel ref={combinedRefs} className={'achievement ' + props.className}>
      <AnimateHeight duration={500} height={height}>
        {props.children}
      </AnimateHeight>
    </PagePanel>
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
