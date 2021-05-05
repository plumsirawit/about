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
enum FetchState {
  UNFETCHED,
  FETCHING,
  FETCHED,
}
export const NamePanel = () => {
  const svgRef = useRef<HTMLDivElement>(null);
  const [drawingState, setDrawingState] = useState<DrawingState>(
    DrawingState.UNREADY,
  );
  const [fetchState, setFetchState] = useState<FetchState>(
    FetchState.UNFETCHED,
  );
  useEffect(() => {
    if (!svgRef.current) {
      return;
    }
    if (fetchState === FetchState.UNFETCHED) {
      setFetchState(FetchState.FETCHING);
      fetch(drawingSvg)
        .then((resp) => resp.text())
        .then((data) => {
          if (svgRef.current) {
            svgRef.current.innerHTML = data;
            setTimeout(() => setFetchState(FetchState.FETCHED), 200); // This is bad practice but I have no other choice.
          }
        });
    }
  }, [svgRef.current, fetchState]);
  useEffect(() => {
    if (!svgRef.current) {
      return;
    }
    if (drawingState === DrawingState.UNREADY) {
      const observer = new IntersectionObserver(
        (entries) => {
          // isIntersecting is true when element and viewport are overlapping
          // isIntersecting is false when element and viewport don't overlap
          if (entries[0].isIntersecting === true) {
            setDrawingState(DrawingState.READY);
          }
        },
        { threshold: [0] },
      );
      observer.observe(svgRef.current);
      return () => {
        svgRef.current && observer.unobserve(svgRef.current);
      };
    }
  }, [svgRef.current, drawingState, fetchState]);
  useEffect(() => {
    if (
      fetchState === FetchState.FETCHED &&
      drawingState === DrawingState.READY
    ) {
      setDrawingState(DrawingState.DRAWING);
      drawSVG(svgRef.current!.firstElementChild as SVGSVGElement).then(() =>
        setDrawingState(DrawingState.DONE),
      );
    }
  }, [
    drawingState,
    svgRef.current,
    svgRef.current?.firstElementChild,
    fetchState,
  ]);
  useEffect(() => {
    console.log(drawingState, fetchState);
  }, [drawingState, fetchState]);
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
