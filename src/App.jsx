import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './global.module.scss';
import './App.css';
import Layout from './components/Page/Layout';
import HomePage from './components/HomePage/HomePage';
import ContactPage from './components/ContactPage/ContactPage';

import { useThemeContext } from './state/ThemeProvider';

function App() {
  const {
    theme
  } = useThemeContext();

  return (
    <Router>
      <div className={`App ${theme}`}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
