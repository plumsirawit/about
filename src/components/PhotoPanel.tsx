import React from 'react';
import { PagePanel } from './PagePanel';
import mainPhoto from '../assets/main_cut.jpg';
import mainBodyPhoto from '../assets/main_bodycut.jpg';
import './photo-panel.css';

export const PhotoPanel = () => {
  return (
    <PagePanel className="photo">
      <div className="overlay">
        <div className="content-bottom">
          <span className="dot-phase-1">.</span>
          <br />
          <span className="dot-phase-2">.</span>
          <br />
          <span className="dot-phase-3">.</span>
        </div>
      </div>
      <img src={mainPhoto} className="photo-panel-img"></img>
      <img src={mainBodyPhoto} className="photo-panel-img-body"></img>
    </PagePanel>
  );
};
