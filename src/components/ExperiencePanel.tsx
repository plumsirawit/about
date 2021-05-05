import React, { useEffect, useRef } from 'react';
import { PagePanel } from './PagePanel';
import './experience-panel.css';

interface IExperiencePanelProps {
  className?: string;
}
export const ExperiencePanel = (
  props: React.PropsWithChildren<IExperiencePanelProps>,
) => (
  <PagePanel className={'experience ' + props.className}>
    {props.children}
  </PagePanel>
);

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
