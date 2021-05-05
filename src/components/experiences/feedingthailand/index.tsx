import React from 'react';
import { ExperiencePanel } from '../../ExperiencePanel';
import './index.css';

export const VolunteerExperienceFeedingThailandPanel = () => {
  return (
    <ExperiencePanel className="experience-feedingthailand">
      <div className="overlay" />
      <div className="main">
        <div className="description">
          <h1 className="header">Back-end Developer for Feeding Thailand</h1>
          <p className="body">
            I have volunteered to be a back-end function developer for a
            voluntary group of people, Feeding Thailand. The project was aimed
            to provide a channel to match people in need and people who are
            ready to help during the COVID-19 crisis in Thailand.
          </p>
          <p className="body">
            Unfortunately, our project did not achieve a good result due to lack
            of donors. However, we are grateful for people who donated supplies
            to others in need. We strongly believe in values of giving and
            sharing in our community.
          </p>
        </div>
      </div>
    </ExperiencePanel>
  );
};
