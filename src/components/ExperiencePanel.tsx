import React from 'react';
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

export const ExperienceSCSUPanel = () => {
  return (
    <PagePanel className="experience-scsu">
      <div className="overlay" />
      <div className="main">
        <h1 className="header">
          Instructor for Silpakorn University team to compete in Thailand
          Olympiad in Informatics
        </h1>
        <p className="body">
          I've teached a few groups of competitive programmers to help for their
          preparations for the annual national programming competitions in
          Thailand, Thailand's Olympiad in Informatics (TOI). I have a strong
          passion in teaching new-generation students, fostering their
          programming and problem solving skills.
        </p>
      </div>
    </PagePanel>
  );
};

export const ExperienceBriklPanel = () => {
  return (
    <PagePanel className="experience-brikl">
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

export const ExperienceIPSTPanel = () => {
  return (
    <PagePanel className="experience-ipst">
      <div className="overlay" />
      <div className="main">
        <div className="description">
          <h1 className="header">
            Teaching Assistant at IPST Computer Olympiad Camp
          </h1>
          <p className="body">
            I've joined the staff team as a teaching assistant. I spent my time
            mostly on preparing materials, problems, solutions and test cases.
          </p>
        </div>
      </div>
    </PagePanel>
  );
};

export const VolunteerExperiencePanel = () => {
  return (
    <PagePanel className="experience-head">
      <div className="main">
        <h1 className="header">Volunteer Experience</h1>
      </div>
    </PagePanel>
  );
};
