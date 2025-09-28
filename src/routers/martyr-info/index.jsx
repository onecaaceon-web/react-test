import React, { useState, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../App.css';
import MartyrInfoMainContainer from './MartyrInfoMainContainer';
import MartyrActions from './MartyrActions';
import QuestionList from './QuestionList';
import FlowerAnimation from './FlowerAnimation';
import VideoPlayer from './VideoPlayer';

function MartyrInfoPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showFlower, setShowFlower] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  
  // 使用useMemo优化烈士信息获取，避免重复计算
  const { martyrName, martyrInfo } = useMemo(() => {
    return location.state || { 
      martyrName: '未知烈士', 
      martyrInfo: '暂无信息' 
    };
  }, [location.state]);

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
    setShowVideo(false);
  };

  return (
    <div className="martyr-info-page">
      {!showFlower && !showQuestions && !showVideo && (
        <button onClick={handleBack} className="back-button"></button>
      )}
      
      {/* 新的烈士信息主容器 */}
      <MartyrInfoMainContainer martyrName={martyrName} martyrInfo={martyrInfo} />
      
      {/* 底部按钮区域 */}
      <MartyrActions onQuestionsClick={handleQuestions} onFlowersClick={handleFlowers} />
      
      {/* 花朵动画覆盖层 */}
      {showFlower && <FlowerAnimation />}
      
      {/* 问题词条覆盖层 */}
      {showQuestions && (
        <QuestionList 
          onQuestionClick={handleQuestionClick}
          onClose={() => setShowQuestions(false)}
        />
      )}
      
      {/* 视频播放覆盖层 */}
      {showVideo && (
        <VideoPlayer 
          onClose={closeVideo}
          videoSrc="/video/vid.mp4"
        />
      )}
    </div>
  );
}

export default MartyrInfoPage;