import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleMartyrsClick = () => {
    navigate('/martyrs');
  };

  const handleCommentsClick = () => {
    navigate('/comments');
  };

  return (
    <div className="home-container">
      <div className="left-section" onClick={handleMartyrsClick}>
        <div className="section-content"></div>
      </div>
      <div className="right-section" onClick={handleCommentsClick}>
        <div className="section-content"></div>
      </div>
    </div>
  );
};

export default HomePage;