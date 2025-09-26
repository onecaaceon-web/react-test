import { Routes, Route } from 'react-router-dom';
import HomePage from './home/index';
import MartyrsPage from './martyrs/index';
import CommentsPage from './comments/index';
import MartyrInfoPage from './martyr-info/index';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/martyrs" element={<MartyrsPage />} />
      <Route path="/martyr-info" element={<MartyrInfoPage />} />
      <Route path="/comments" element={<CommentsPage />} />
    </Routes>
  );
};

export default AppRoutes;