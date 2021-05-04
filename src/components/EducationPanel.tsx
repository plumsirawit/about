import React from 'react';
import { PagePanel } from './PagePanel';
import mainPhoto from '../assets/main_cut.jpg';
import './education-panel.css';

export const EducationHeadPanel = () => {
  return (
    <PagePanel className="education-head">
      <div className="main">
        <h1 className="header">Education</h1>
      </div>
    </PagePanel>
  );
};

export const EducationPrimarySchoolPanel = () => {
  return (
    <PagePanel className="education-primary">
      <div className="main">
        <h1 className="header">Primary School</h1>
        <p>blah blah blah</p>
      </div>
    </PagePanel>
  );
};

export const EducationMiddleSchoolPanel = () => {
  return (
    <PagePanel className="education-middle">
      <div className="main">
        <h1 className="header">Middle School</h1>
        <p>blah blah blah</p>
      </div>
    </PagePanel>
  );
};

export const EducationHighSchoolPanel = () => {
  return (
    <PagePanel className="education-high">
      <div className="main">
        <h1 className="header">High School</h1>
        <p>blah blah blah</p>
      </div>
    </PagePanel>
  );
};
