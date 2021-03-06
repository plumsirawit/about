import React from 'react';
import { ExperiencePanel } from '../../ExperiencePanel';
import './index.css';

export const ExperienceBriklPanel = () => {
  return (
    <ExperiencePanel className="experience-brikl">
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
    </ExperiencePanel>
  );
};
