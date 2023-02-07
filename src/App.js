import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import './global.module.scss';
import './App.css';

import Layout from './components/Page/Layout';
import HomePage from './components/HomePage/HomePage';
import ContactPage from './components/ContactPage/ContactPage';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import StellarView from './components/ProjectsPage/StellarView';
import BooBot from './components/ProjectsPage/BooBot';
import ProjectsPageNavigation from './components/ProjectsPage/ProjectsPageNavigation';
import { useThemeContext } from './state/ThemeProvider';
import { fairyDustCursor } from 'cursor-effects';

function App() {
  const { theme } = useThemeContext();

  useEffect(() => {
    fairyDustCursor({ colors: ['#238636', '#2766b1'] });
  });

  return (
    <div className={`App ${theme}`}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route index path="/" element={<HomePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="projects" element={<ProjectsPage />}>
              <Route index element={<ProjectsPageNavigation />} />
              <Route path="stellarview" element={<StellarView />} />
              <Route path="boobot" element={<BooBot />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
