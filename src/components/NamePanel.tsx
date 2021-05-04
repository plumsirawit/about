import React from 'react';
import { PagePanel } from './PagePanel';
import './name-panel.css';

export const NamePanel = () => {
  return (
    <PagePanel className="name">
      <div className="overlay">
        <h1 className="header">Hello!</h1>
        <p className="content-bottom">
          My name is Sirawit Pongnakintr. I'm a student preparing to study
          abroad in the fields of mathematics and computer science. I'm also
          interested in physics, economics, sociology, and philosophy. My
          ultimate goal of living is to find the ultimate answer of life itself.
        </p>
      </div>
    </PagePanel>
  );
};
