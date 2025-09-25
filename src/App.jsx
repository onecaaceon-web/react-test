import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import MartyrsPage from './MartyrsPage';
import CommentsPage from './CommentsPage';
import MartyrInfoPage from './MartyrInfoPage';

function HomePage() {
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
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/martyrs" element={<MartyrsPage />} />
        <Route path="/martyr-info" element={<MartyrInfoPage />} />
        <Route path="/comments" element={<CommentsPage />} />
      </Routes>
    </Router>
  );
}

export default App;