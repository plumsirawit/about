import React, { useEffect, useRef, useState } from 'react';
import { PagePanel } from './PagePanel';
import './name-panel.css';
import drawingSvg from '../assets/drawing.svg';
import { drawSVG } from '../utils/canvas';
import { useIntersectionObserverEffect } from '../utils/useScrollObserverEffect';

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
  useIntersectionObserverEffect(
    svgRef,
    (isObserving) =>
      drawingState === DrawingState.UNREADY &&
      isObserving &&
      setDrawingState(DrawingState.READY),
  );
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
  const overlayRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (drawingState === DrawingState.DONE && overlayRef.current) {
      const divElem = overlayRef.current;
      divElem.classList.add('fade-in');
    }
  }, [drawingState]);
  return (
    <PagePanel className="name">
      <div className="main">
        <div className="overlay" ref={overlayRef}></div>
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
