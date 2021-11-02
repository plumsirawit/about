import React, { useEffect, useRef, useState } from 'react';
import { ScrollToRefButton } from './ScrollToRefButton';
import './navbar.css';

interface INavbarProps {
  educationRef: React.RefObject<HTMLElement>;
  workRef: React.RefObject<HTMLElement>;
  volunteerRef: React.RefObject<HTMLElement>;
}
export const Navbar = ({
  educationRef,
  workRef,
  volunteerRef,
}: INavbarProps) => {
  return (
    <>
      <div className="nav">
        <div className="nav-left">
          <ScrollToRefButton title="Sirawit" refObj={educationRef} />
          <ScrollToRefButton title="Education" refObj={educationRef} />
          <ScrollToRefButton title="Work" refObj={workRef} />
          <ScrollToRefButton title="Volunteer" refObj={volunteerRef} />
          <ScrollToRefButton title="Achievements" refObj={volunteerRef} />
        </div>
        <div>
          <div className="nav-rightbar" />
        </div>
      </div>
    </>
  );
};
