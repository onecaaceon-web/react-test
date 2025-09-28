import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import { martyrData } from '../../data/data';
import MartyrCard from './MartyrCard';

function MartyrsPage() {
  const navigate = useNavigate();

  const handleBack = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const handleMartyrClick = useCallback((martyrName, martyrInfo) => {
    navigate('/martyr-info', { state: { martyrName, martyrInfo } });
  }, [navigate]);

  return (
    <div className="martyrs-page">
      <button onClick={handleBack} className="back-button"></button>
      
      <div className="martyrs-container">
        {/* 烈士信息容器 */}
        <MartyrCard 
          martyrName="张 思 德" 
          martyrInfo={martyrData["张 思 德"]} 
          onClick={handleMartyrClick} 
        />
        
        <MartyrCard 
          martyrName="黄 继 光" 
          martyrInfo={martyrData["黄 继 光"]} 
          onClick={handleMartyrClick} 
        />
        
        <MartyrCard 
          martyrName="董 存 瑞" 
          martyrInfo={martyrData["董 存 瑞"]} 
          onClick={handleMartyrClick} 
        />
      </div>
    </div>
  );
}

export default MartyrsPage;