import React, { useEffect, useRef } from 'react';
import { ExperiencePanel } from '../../ExperiencePanel';
import ekamaiThonglor from '../../../assets/walk3x.mp4';
import './index.css';

export const ExperienceIPSTPanel = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, [videoRef.current]);
  return (
    <ExperiencePanel className="experience-ipst">
      {/* <video autoPlay muted loop ref={videoRef}>
        <source src={ekamaiThonglor} type="video/mp4" />
      </video> */}
      <div className="overlay"></div>
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
    </ExperiencePanel>
  );
};
