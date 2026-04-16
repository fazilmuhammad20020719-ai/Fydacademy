import React from 'react';

const BackgroundLines = () => {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        backgroundImage:
          'repeating-linear-gradient(to right, #d1d5db 0px, #d1d5db 1px, transparent 1px, transparent 80px)',
        opacity: 0.25,
      }}
    />
  );
};

export default BackgroundLines;
