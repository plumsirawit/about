import React, { useEffect, useRef, useState } from 'react';
import { PagePanel } from './PagePanel';
import './name-panel.css';
import drawingSvg from '../assets/drawing.svg';
import { drawSVG } from '../utils/canvas';

enum DrawingState {
  UNREADY,
  READY,
  DRAWING,
  DONE,
}
export const NamePanel = () => {
  const svgRef = useRef<HTMLDivElement>(null);
  const [drawingState, setDrawingState] = useState<DrawingState>(
    DrawingState.UNREADY,
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    if (!svgRef.current) {
      return;
    }
    fetch(drawingSvg)
      .then((resp) => resp.text())
      .then((data) => {
        if (svgRef.current) {
          svgRef.current.innerHTML = data;
          setIsLoading(false);
        }
      });
    const observer = new IntersectionObserver(
      (entries) => {
        // isIntersecting is true when element and viewport are overlapping
        // isIntersecting is false when element and viewport don't overlap
        if (entries[0].isIntersecting === true) {
          setDrawingState(DrawingState.READY);
        }
        console.log(entries[0].isIntersecting, drawingState);
      },
      { threshold: [0] },
    );
    observer.observe(svgRef.current);
    return () => {
      svgRef.current && observer.unobserve(svgRef.current);
    };
  }, [svgRef.current]);
  useEffect(() => {
    if (
      svgRef.current?.firstChild &&
      !isLoading &&
      drawingState === DrawingState.READY
    ) {
      setDrawingState(DrawingState.DRAWING);
      drawSVG(svgRef.current.firstElementChild as SVGSVGElement).then(() =>
        setDrawingState(DrawingState.DONE),
      );
    }
  }, [drawingState, svgRef.current, svgRef.current?.firstChild, isLoading]);
  return (
    <PagePanel className="name">
      <div className="main">
        <h1 className="header">Hello!</h1>
        <div ref={svgRef} className="drawing" />
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
