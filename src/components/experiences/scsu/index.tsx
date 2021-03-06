import React from 'react';
import { ExperiencePanel } from '../../ExperiencePanel';
import './index.css';

export const ExperienceSCSUPanel = () => {
  return (
    <ExperiencePanel className="experience-scsu">
      <div className="overlay" />
      <div className="main">
        <div className="description">
          <h1 className="header">
            Instructor for Silpakorn University team to compete in Thailand
            Olympiad in Informatics
          </h1>
          <p className="body">
            I've teached a few groups of competitive programmers to help for
            their preparations for the annual national programming competitions
            in Thailand, Thailand's Olympiad in Informatics (TOI). I have a
            strong passion in teaching new-generation students, fostering their
            programming and problem solving skills.
          </p>
        </div>
      </div>
    </ExperiencePanel>
  );
};
