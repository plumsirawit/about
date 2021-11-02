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
  return (
    <section
      ref={combinedRefs}
      className={'page-panel showbody experience ' + props.className}
    >
      {props.children}
    </section>
  );
});

export const ExperienceHeadPanel = React.forwardRef<HTMLHeadingElement>(
  (_, ref) => {
    return (
      <PagePanel className="experience-head">
        <div className="main">
          <h1 className="header" ref={ref}>
            Work Experience
          </h1>
        </div>
      </PagePanel>
    );
  },
);

export * from './experiences/scsu';
export * from './experiences/brikl';
export * from './experiences/ipst';
export * from './experiences/freelance';

export const VolunteerExperienceHeadPanel = React.forwardRef<HTMLHeadingElement>(
  (_, ref) => {
    return (
      <PagePanel className="experience-head">
        <div className="main">
          <h1 className="header" ref={ref}>
            Volunteer Experience
          </h1>
        </div>
      </PagePanel>
    );
  },
);

export * from './experiences/feedingthailand';
export * from './experiences/mwit';
export * from './experiences/thaco';
