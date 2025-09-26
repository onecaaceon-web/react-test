import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../App.css';

function MartyrInfoPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showFlower, setShowFlower] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);
  
  // 获取烈士信息
  const { martyrName, martyrInfo } = location.state || { 
    martyrName: '未知烈士', 
    martyrInfo: '暂无信息' 
  };

  // 预设问题列表
  const presetQuestions = [
    "这位烈士的生平事迹是什么？",
    "这位烈士牺牲时的年龄是多少？",
    "这位烈士参与了哪些重要战役？",
    "这位烈士获得了哪些荣誉？",
    "这位烈士的家人现在怎么样？",
    "这位烈士的墓地在哪里？",
    "这位烈士有什么名言或遗言？",
    "这位烈士是如何被发现并纪念的？",
    "这位烈士对后世有什么影响？",
    "如何向这位烈士表达敬意？"
  ];

  const handleBack = () => {
    navigate('/martyrs');
  };

  const handleQuestions = () => {
    // 切换问题词条显示状态
    setShowQuestions(!showQuestions);
  };

  const handleFlowers = () => {
    // 显示花朵动画
    setShowFlower(true);
    
    // 1秒后隐藏花朵，保持在当前烈士详细信息页面
    setTimeout(() => {
      setShowFlower(false);
    }, 1000);
  };

  const handleQuestionClick = (question) => {
    // 处理问题点击事件
    // 不再显示alert，而是显示视频
    setShowQuestions(false);
    setShowVideo(true);
  };

  const closeVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setShowVideo(false);
  };

  return (
    <div className="martyr-info-page">
      {!showFlower && !showQuestions && !showVideo && (
        <button onClick={handleBack} className="back-button"></button>
      )}
      
      {/* 新的烈士信息主容器 */}
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
      
      {/* 底部按钮区域 */}
      <div className="martyr-actions">
        <button className="blank-button button-1" onClick={handleQuestions}>
        </button>
        <button className="blank-button button-2" onClick={handleFlowers}>
        </button>
      </div>
      
      {/* 花朵动画覆盖层 */}
      {showFlower && (
        <div className="overlay">
          <div className="flower-container"></div>
        </div>
      )}
      
      {/* 问题词条覆盖层 */}
      {showQuestions && (
        <div className="overlay" onClick={() => setShowQuestions(false)}>
          <div className="questions-container" onClick={(e) => e.stopPropagation()}>
            <div className="questions-grid">
              <div className="questions-column">
                {presetQuestions.slice(0, 5).map((question, index) => (
                  <button 
                    key={index} 
                    className="question-button" 
                    onClick={() => handleQuestionClick(question)}
                  >
                    {question}
                  </button>
                ))}
              </div>
              <div className="questions-column">
                {presetQuestions.slice(5, 10).map((question, index) => (
                  <button 
                    key={index + 5} 
                    className="question-button" 
                    onClick={() => handleQuestionClick(question)}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* 视频播放覆盖层 */}
      {showVideo && (
        <div className="overlay" onClick={closeVideo}>
          <div className="video-container" onClick={(e) => e.stopPropagation()}>
            <video 
          ref={videoRef}
          src="/video/vid.mp4" 
          controls 
          autoPlay 
          style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
          onEnded={closeVideo}
        />
            <button className="close-video-button" onClick={closeVideo}>✕</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MartyrInfoPage;