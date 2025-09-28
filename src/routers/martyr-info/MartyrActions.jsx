import React from 'react';

const MartyrActions = ({ onQuestionsClick, onFlowersClick }) => {
  return (
    <div className="martyr-actions">
      <button className="blank-button button-1" onClick={onQuestionsClick}>
      </button>
      <button className="blank-button button-2" onClick={onFlowersClick}>
      </button>
    </div>
  );
};

export default MartyrActions;