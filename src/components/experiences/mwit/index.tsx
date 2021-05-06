import React from 'react';
import { ExperiencePanel } from '../../ExperiencePanel';
import './index.css';

export const VolunteerExperienceMWITPanel = () => {
  return (
    <ExperiencePanel className="experience-mwit">
      <div className="overlay" />
      <div className="main">
        <div className="description">
          <h1 className="header">
            Volunteering in activities at Mahidol Wittayanusorn School
          </h1>
          <p className="body">
            As a student in high school, I enjoy devoting myself to develop
            competitive programming in the school. I've volunteered as a
            (unofficial) teaching assistant in data structures class (2019). I
            have also developed dockerized version of Cafe grader and Fossil
            grader (the highly used automated competitive programming judges in
            Thailand). I've also prepared competitive programming problemsets
            for the local camp in the school.
          </p>
        </div>
      </div>
    </ExperiencePanel>
  );
};
