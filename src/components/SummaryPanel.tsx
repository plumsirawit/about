import React from 'react';
import { PagePanel } from './PagePanel';
import mainPhoto from '../assets/selfsprite_cut.png';
import './summary-panel.css';

interface ISummaryPhotoProps {
  photoName: string;
  [x: string]: string;
}
export const SummaryPhoto = (props: ISummaryPhotoProps) => (
  <img src={`/dist/assets/moments/${props.photoName}`} {...props} />
);

export const SummaryPanel = () => {
  return (
    <PagePanel className="summary">
      <div className="overlay">
        <h1 className="header"></h1>
        <h1 className="header">Best wishes!</h1>
        {/* <img className="main-photo" src={mainPhoto} /> */}
      </div>
      <div className="summary-grid">
        <SummaryPhoto photoName="toi13activity_cut.jpg" />
        <SummaryPhoto photoName="20181118.jpg" />
        {/* <SummaryPhoto photoName="20181122.jpg" /> */}
        <SummaryPhoto photoName="20181127f.jpg" />
        {/* <SummaryPhoto photoName="20181128.jpg" /> */}
        <SummaryPhoto photoName="ioith_cut.jpg" />
        <SummaryPhoto photoName="20200706.jpg" />
        {/* <SummaryPhoto photoName="20200719.jpg" /> */}
        <SummaryPhoto photoName="20200727.jpg" />
        <SummaryPhoto photoName="20201130.jpg" />
        <SummaryPhoto photoName="20201223.jpg" />
        <SummaryPhoto photoName="20201226.jpg" className="last-photo" />
      </div>
    </PagePanel>
  );
};
