import React, { useRef } from 'react';
import { useParallaxEffect } from '../utils/useParallaxEffect';
import { PagePanel } from './PagePanel';
import './experience-panel.css';
import { useCombinedRefs } from '../utils/refs';

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
    <PagePanel ref={combinedRefs} className={'experience ' + props.className}>
      {props.children}
    </PagePanel>
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
