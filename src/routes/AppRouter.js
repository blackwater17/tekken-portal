import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Character from '../pages/Character';
import NotFoundPage from '../pages/NotFoundPage';

function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/character/:character_id/:character_name" element={<Character />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}

export default AppRouter;
