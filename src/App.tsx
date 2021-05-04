import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { PagePanel } from './components/PagePanel';
import { PhotoPanel } from './components/PhotoPanel';
import { NamePanel } from './components/NamePanel';
import {
  EducationHeadPanel,
  EducationPrimarySchoolPanel,
  EducationMiddleSchoolPanel,
  EducationHighSchoolPanel,
} from './components/EducationPanel';

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
      <PhotoPanel />
      <NamePanel />
      <EducationHeadPanel />
      <EducationPrimarySchoolPanel />
      <EducationMiddleSchoolPanel />
      <EducationHighSchoolPanel />
      <PagePanel>hello</PagePanel>
    </div>
  );
}

export default App;
