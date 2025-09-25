import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function MartyrsPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const handleMartyrClick = (martyrName, martyrInfo) => {
    navigate('/martyr-info', { state: { martyrName, martyrInfo } });
  };

  // 烈士信息数据
  const martyrData = {
    "张 思 德": "张思德（1915年4月—1944年9月5日），四川仪陇人，\n中国人民解放军的创始人之一，中国共产党党员。\n\n1944年9月5日，在陕北安塞县山中烧炭时，\n因炭窑崩塌而牺牲，时年29岁。\n\n毛泽东在其追悼会上发表了著名的《为人民服务》演讲。张思德（1915年4月—1944年9月5日），四川仪陇人，\n中国人民解放军的创始人之一，中国共产党党员。\n\n1944年9月5日，在陕北安塞县山中烧炭时",
    "黄 继 光": "黄继光（1931年1月—1952年10月20日），四川省中江县人，\n中国人民志愿军特级英雄。\n\n在抗美援朝上甘岭战役中，为夺取阵地，\n用胸膛堵住敌人机枪口，壮烈牺牲，年仅21岁。\n\n被中国人民志愿军领导机关追记特等功，\n并授予“特级英雄”称号。黄继光（1931年1月—1952年10月20日），四川省中江县人，\n中国人民志愿军特级英雄。\n\n在抗美援朝上甘岭战役中，为夺取阵地，\n用胸膛堵住敌人机枪口，壮烈牺牲，年仅21岁。",
    "董 存 瑞": "董存瑞（1929年10月—1948年5月25日），河北省怀来县人，\n中国人民解放军战斗英雄。\n\n在解放隆化的战斗中，为炸毁敌军桥型暗堡，\n舍身炸碉堡，壮烈牺牲，年仅19岁。\n\n被追认为中国共产党党员，\n所在班被命名为“董存瑞班”。董存瑞（1929年10月—1948年5月25日），河北省怀来县人，\n中国人民解放军战斗英雄。\n\n在解放隆化的战斗中，为炸毁敌军桥型暗堡。"
  };

  return (
    <div className="martyrs-page">
      <button onClick={handleBack} className="back-button"></button>
      
      <div className="martyrs-container">
        {/* 烈士信息容器 */}
        <div 
          className="martyr-card" 
          onClick={() => handleMartyrClick("张 思 德", martyrData["张 思 德"])}
        >
        </div>
        
        <div 
          className="martyr-card" 
          onClick={() => handleMartyrClick("黄 继 光", martyrData["黄 继 光"])}
        >
        </div>
        
        <div 
          className="martyr-card" 
          onClick={() => handleMartyrClick("董 存 瑞", martyrData["董 存 瑞"])}
        >
        </div>
      </div>
    </div>
  );
}

export default MartyrsPage;