import React, { useEffect, useRef, useState } from 'react';
import { useParallaxEffect } from '../utils/useParallaxEffect';
import { PagePanel } from './PagePanel';
import './experience-panel.css';
import { useCombinedRefs } from '../utils/refs';
import { useWindowHeight } from '../utils/useWindowHeight';
import { useScrollObserverEffect } from '../utils/useScrollObserverEffect';
import AnimateHeight from 'react-animate-height';

interface IExperiencePanelProps {
  className?: string;
}
export const ExperiencePanel = React.forwardRef<
  HTMLElement,
  React.PropsWithChildren<IExperiencePanelProps>
>((props, ref) => {
  const backgroundImageRef = useRef<HTMLElement>(null);
  const combinedRefs = useCombinedRefs<HTMLElement>(ref, backgroundImageRef);
  useParallaxEffect(combinedRefs);
  const [height, setHeight] = useState<number>(30); // in vh
  const windowHeight = useWindowHeight();
  useScrollObserverEffect(combinedRefs, (isObserving) => {
    setHeight(isObserving ? 50 : 30);
  });
  useEffect(() => {
    if (height === 50) {
      // observing
      combinedRefs.current?.classList.add('showbody');
    } else {
      combinedRefs.current?.classList.remove('showbody');
    }
  }, [height, combinedRefs.current]);
  return (
    <section ref={combinedRefs}>
      <AnimateHeight
        duration={500}
        height={(height * windowHeight) / 100}
        className={'page-panel experience ' + props.className}
      >
        {props.children}
      </AnimateHeight>
    </section>
  );
});

export const ExperienceHeadPanel = () => {
  return (
    <PagePanel className="experience-head">
      <div className="main">
        <h1 className="header">Work Experience</h1>
      </div>
    </PagePanel>
  );
};

export * from './experiences/scsu';
export * from './experiences/brikl';
export * from './experiences/ipst';
export * from './experiences/freelance';

export const VolunteerExperienceHeadPanel = () => {
  return (
    <PagePanel className="experience-head">
      <div className="main">
        <h1 className="header">Volunteer Experience</h1>
      </div>
    </PagePanel>
  );
};

export * from './experiences/feedingthailand';
export * from './experiences/mwit';
export * from './experiences/thaco';
