import React, { useEffect, useRef } from 'react';
import { PagePanel } from './PagePanel';
import './name-panel.css';
import drawingSvg from '../assets/drawing.svg';

export const NamePanel = () => {
  const nameCanvas = useRef<HTMLCanvasElement>(null);
  const draw = () => {
    if (!nameCanvas || !nameCanvas.current) {
      return;
    }
    const canvas = nameCanvas.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }
    console.log('canvas draw', canvas.width, canvas.height);
    ctx.beginPath();
    ctx.strokeRect(50, 50, 50, 50);
    ctx.stroke();
  };
  useEffect(() => {
    const listener = () => {
      if (!nameCanvas || !nameCanvas.current) {
        return;
      }
      nameCanvas.current.width = window.innerWidth;
      nameCanvas.current.height = window.innerHeight;
      draw();
    };
    if (nameCanvas.current) {
      listener();
    }
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [nameCanvas.current]);
  return (
    <PagePanel className="name">
      <div className="main">
        <h1 className="header">Hello!</h1>
        <img className="drawing" src={drawingSvg} />
        <p className="content-bottom">
          My name is Sirawit Pongnakintr. I'm a student preparing to study
          abroad in the fields of mathematics and computer science. I'm also
          interested in physics, economics, sociology, and philosophy. My
          ultimate goal of living is to find the ultimate answer of life itself.
        </p>
      </div>
      {/* <canvas className="overlay" ref={nameCanvas} /> */}
    </PagePanel>
  );
};
