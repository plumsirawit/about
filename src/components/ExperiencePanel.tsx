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

export const ExperienceFreelancePanel = () => {
  return (
    <PagePanel className="experience-freelance">
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
    </PagePanel>
  );
};

export const VolunteerExperienceHeadPanel = () => {
  return (
    <PagePanel className="experience-head">
      <div className="main">
        <h1 className="header">Volunteer Experience</h1>
      </div>
    </PagePanel>
  );
};

export const VolunteerExperienceFeedingThailandPanel = () => {
  return (
    <PagePanel className="experience-feedingthailand">
      <div className="overlay" />
      <div className="main">
        <div className="description">
          <h1 className="header">Software Engineer at Brikl</h1>
          <p className="body">
            I've participated as a front-end software engineer intern with Brikl
            during March - May 2020. Then, I joined the full-time front-end team
            during June - July 2020. I mostly work on 2D/3D programming part,
            mainly focusing on Three.js, Fabric.js and React. But after that I
            took a break in my career to spend my time in the last year of my
            time for the International Olympiad in Informatics (IOI).
          </p>
          <p className="body">
            I wanted to try something new, so I joined the full-time back-end
            team during December 2020 - February 2021. I mostly work on Node.js,
            Typescript, GraphQL, AWS DynamoDB, AWS Lambda, and Hasura.
          </p>
        </div>
      </div>
    </PagePanel>
  );
};

export const VolunteerExperienceMWITPanel = () => {
  return <></>;
};
