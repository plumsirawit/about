import React from 'react';
import './timeline.css';

interface ITimelineProps {
  enableTop?: boolean;
  enableBottom?: boolean;
}
export const Timeline = (props: ITimelineProps) => {
  return (
    <div className="timeline">
      <div className="circle" />
      {props.enableTop && <div className="vertical-bar-top" />}
      {props.enableBottom && <div className="vertical-bar-bottom" />}
    </div>
  );
};
