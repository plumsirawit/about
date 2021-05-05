import React from 'react';
import { ExperiencePanel } from '../../ExperiencePanel';
import './index.css';

export const VolunteerExperienceTHACOPanel = () => {
  return (
    <ExperiencePanel className="experience-thaco">
      <div className="overlay" />
      <div className="main">
        <div className="description">
          <h1 className="header">Co-founder of THACO</h1>
          <p className="body">
            I've co-founded a group of former competitive programming
            contestants to hold a programming competition, THACO 2020, for
            younger students. I've submitted some problems and also prepared
            test data used in the competition. My ultimate goal for THACO was to
            foster competitive programming society in Thailand.
          </p>
        </div>
      </div>
    </ExperiencePanel>
  );
};
