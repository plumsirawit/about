import React from 'react';
import { PagePanel } from './PagePanel';
import mainPhoto from '../assets/main_cut.jpg';
import './photo-panel.css';

export const PhotoPanel = () => {
  return (
    <PagePanel>
      <div className="overlay">
        <h1 className="header">About</h1>
        <div className="content-bottom">
          <div className="tooltiptext">hello</div>
          <span className="dot-phase-1">.</span>
          <br />
          <span className="dot-phase-2">.</span>
          <br />
          <span className="dot-phase-3">.</span>
        </div>
      </div>
      <img src={mainPhoto} className="photo-panel-img"></img>
    </PagePanel>
  );
};
