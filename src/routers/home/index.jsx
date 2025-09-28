import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

const HomePage = () => {
  const navigate = useNavigate();

  const handleMartyrsClick = useCallback(() => {
    navigate('/martyrs');
  }, [navigate]);

  const handleCommentsClick = useCallback(() => {
    navigate('/comments');
  }, [navigate]);

  return (
    <div className="home-container">
      <LeftSection onClick={handleMartyrsClick} />
      <RightSection onClick={handleCommentsClick} />
    </div>
  );
};

export default HomePage;