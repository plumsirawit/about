import React from 'react';

interface IScrollToRefButton {
  refObj: React.RefObject<HTMLElement>;
  title: string;
}
export const ScrollToRefButton = ({ refObj, title }: IScrollToRefButton) => {
  return title === 'Sirawit' ? (
    <img className="scroll-btn" src="/dist/assets/signature.png" />
  ) : (
    <button
      className="scroll-btn"
      onClick={() => {
        refObj?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        console.log('refObj', refObj);
      }}
    >
      {title}
    </button>
  );
};
