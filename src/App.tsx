import React, { useState, useEffect } from 'react';
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
  return (
    <div className="App">
      <NamePanel />
      <ExperienceHeadPanel />
      <ExperienceBriklPanel />
      <ExperienceFreelancePanel />
      <ExperienceSCSUPanel />
      <ExperienceIPSTPanel />
      <VolunteerExperienceHeadPanel />
      <VolunteerExperienceFeedingThailandPanel />
      <VolunteerExperienceMWITPanel />
      <VolunteerExperienceTHACOPanel />
      <EducationHeadPanel />
      <AllEducationPanel />
      <SummaryPanel />
    </div>
  );
}

export default App;
