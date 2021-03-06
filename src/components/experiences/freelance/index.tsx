import React from 'react';
import { ExperiencePanel } from '../../ExperiencePanel';
import './index.css';

export const ExperienceFreelancePanel = () => {
  return (
    <ExperiencePanel className="experience-freelance">
      <div className="overlay" />
      <div className="main">
        <div className="description">
          <h1 className="header">Freelance Software Engineer</h1>
          <p className="body">
            In my free time, I'm available as a freelance software engineer. I
            have done a few freelance projects with small teams of 2-3 people.
          </p>
        </div>
      </div>
    </ExperiencePanel>
  );
};
