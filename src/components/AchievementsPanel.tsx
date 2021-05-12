import React, { useRef, useState } from 'react';
import { PagePanel } from './PagePanel';
import './achievements-panel.css';
import { useCombinedRefs } from '../utils/refs';
import AnimateHeight from 'react-animate-height';
import { useScrollObserverEffect } from '../utils/useScrollObserverEffect';
import { useWindowHeight } from '../utils/useWindowHeight';
import { MathPOSN1 } from './achievements/2015-math-posn-1';
import { MathPOSN2 } from './achievements/2015-math-posn-2';
import { ComPOSN1 } from './achievements/2016-com-posn-1';
import { ComPOSN2 } from './achievements/2016-com-posn-2';
import { ComPOSNTOI } from './achievements/2016-com-posn-toi';
import { ComIPST1_2017 } from './achievements/2017-com-ipst-1';
import { ComIPST2_2017 } from './achievements/2017-com-ipst-2-1';
import { ComIPST1_2018 } from './achievements/2018-com-ipst-1';
import { ComIPST2_2018 } from './achievements/2018-com-ipst-2-1';
import { ComIPST3_2018 } from './achievements/2018-com-ipst-2-2';
import { ComIPST2_2019 } from './achievements/2019-com-ipst-2';
import { ComIPSTIOI2019 } from './achievements/2018-com-ipst-ioi-2019';
import { ComIPSTIOI2020 } from './achievements/2019-com-ipst-ioi-2020';

interface IAchievementPanelProps {
  className?: string;
}
export const AchievementPanel = React.forwardRef<
  HTMLElement,
  React.PropsWithChildren<IAchievementPanelProps>
>((props, ref) => {
  const backgroundImageRef = useRef<HTMLElement>(null);
  const combinedRefs = useCombinedRefs<HTMLElement>(ref, backgroundImageRef);
  const [height, setHeight] = useState<number>(25); // in vh
  const windowHeight = useWindowHeight();
  useScrollObserverEffect(combinedRefs, (isObserving) => {
    setHeight(isObserving ? 50 : 25);
  });
  return (
    <section ref={combinedRefs}>
      <AnimateHeight
        duration={500}
        height={(height * windowHeight) / 100}
        className={'page-panel achievement ' + props.className}
      >
        {props.children}
      </AnimateHeight>
    </section>
  );
});

export const AchievementsPanel = () => {
  return (
    <PagePanel className="achievements">
      <div className="main">
        <h1 className="header">Olympiad Achievements</h1>
        <MathPOSN1 />
        <MathPOSN2 />
        <ComPOSN1 />
        <ComPOSN2 />
        <ComPOSNTOI />
        <ComIPST1_2017 />
        <ComIPST2_2017 />
        <ComIPST1_2018 />
        <ComIPST2_2018 />
        <ComIPST3_2018 />
        <ComIPSTIOI2019 />
        <ComIPST2_2019 />
        <ComIPSTIOI2020 />
      </div>
    </PagePanel>
  );
};
