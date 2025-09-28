import React from 'react';

const MartyrInfoMainContainer = ({ martyrName, martyrInfo }) => {
  return (
    <div className="martyr-info-main-container">
      {/* 左侧图片区域 - 30%宽度 */}
      <div className="martyr-image-section">
        <div className="martyr-image"></div>
      </div>
      
      {/* 右侧信息区域 - 70%宽度 */}
      <div className="martyr-info-section">
        {/* 烈士姓名区域 - 10%高度 */}
        <div className="martyr-name-area">
          <div className="martyr-name-container">| {martyrName}</div>
        </div>
        {/* 烈士信息区域 - 90%高度 */}
        <div className="martyr-info-area">
          <p className="martyr-bio" style={{ whiteSpace: 'pre-line' }}>{martyrInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default MartyrInfoMainContainer;