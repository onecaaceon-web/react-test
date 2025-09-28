import React from 'react';

function LeftSection({ onClick }) {
  return (
    <div className="left-section" onClick={onClick}>
      <div className="section-content"></div>
    </div>
  );
}

export default LeftSection;