import React from 'react';

function RightSection({ onClick }) {
  return (
    <div className="right-section" onClick={onClick}>
      <div className="section-content"></div>
    </div>
  );
}

export default RightSection;