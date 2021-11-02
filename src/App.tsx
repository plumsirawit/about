import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { PagePanel } from './components/PagePanel';
import { PhotoPanel } from './components/PhotoPanel';
import { NamePanel } from './components/NamePanel';
import {
  EducationHeadPanel,
  AllEducationPanel,
} from './components/EducationPanel';
import { AchievementsPanel } from './components/AchievementsPanel';
import {
  ExperienceHeadPanel,
  ExperienceSCSUPanel,
  ExperienceBriklPanel,
  ExperienceIPSTPanel,
  VolunteerExperienceHeadPanel,
  ExperienceFreelancePanel,
  VolunteerExperienceFeedingThailandPanel,
  VolunteerExperienceMWITPanel,
  VolunteerExperienceTHACOPanel,
} from './components/ExperiencePanel';
import { SummaryPanel } from './components/SummaryPanel';
import { ScrollToRefButton } from './components/ScrollToRefButton';
import { Navbar } from './components/Navbar';

interface AppProps {}

function App({}: AppProps) {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  const educationRef = useRef<HTMLHeadingElement>(null);
  const workRef = useRef<HTMLHeadingElement>(null);
  const volunteerRef = useRef<HTMLHeadingElement>(null);
  return (
    <div className="App">
      <NamePanel />
      <div className="nav-wrapper">
        <Navbar
          educationRef={educationRef}
          workRef={workRef}
          volunteerRef={volunteerRef}
        />
        <div className="panels">
          <EducationHeadPanel ref={educationRef} />
          <AllEducationPanel />
          <ExperienceHeadPanel ref={workRef} />
          <ExperienceBriklPanel />
          <ExperienceFreelancePanel />
          <ExperienceSCSUPanel />
          <ExperienceIPSTPanel />
          <VolunteerExperienceHeadPanel ref={volunteerRef} />
          <VolunteerExperienceFeedingThailandPanel />
          <VolunteerExperienceMWITPanel />
          <VolunteerExperienceTHACOPanel />
        </div>
      </div>
      <SummaryPanel />
    </div>
  );
}

export default App;
