import React from 'react';

const MartyrCard = ({ martyrName, martyrInfo, onClick }) => {
  return (
    <div 
      className="martyr-card" 
      onClick={() => onClick(martyrName, martyrInfo)}
    >
    </div>
  );
};

export default MartyrCard;