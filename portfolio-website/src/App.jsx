import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigate = (page) => {
    if (page === 'about') navigate('/about');
    if (page === 'home') navigate('/');
  };

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div className="app-container">
      <Header />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home onNavigate={handleNavigate} />} />
        
        {/* About Me Page */}
        <Route path="/about" element={<AboutMe onNavigate={handleNavigate} />} />
      </Routes>
    </div>
  );
}

export default App;