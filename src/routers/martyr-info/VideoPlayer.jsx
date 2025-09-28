import React, { useRef } from 'react';

const VideoPlayer = ({ onClose, videoSrc }) => {
  const videoRef = useRef(null);

  const closeVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    onClose();
  };

  return (
    <div className="overlay" onClick={closeVideo}>
      <div className="video-container" onClick={(e) => e.stopPropagation()}>
        <video 
          ref={videoRef}
          src={videoSrc} 
          controls 
          autoPlay 
          style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
          onEnded={closeVideo}
        />
        <button className="close-video-button" onClick={closeVideo}>✕</button>
      </div>
    </div>
  );
};

export default VideoPlayer;