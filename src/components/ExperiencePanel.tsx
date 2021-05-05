import React, { useEffect, useRef } from 'react';
import { PagePanel } from './PagePanel';
import './experience-panel.css';

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
