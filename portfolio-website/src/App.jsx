import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';

function App() {
  const navigate = useNavigate();
  const handleNavigate = (page) => {
    if (page === 'about') navigate('/about');
    if (page === 'home') navigate('/');
  };

  return (
    <div className="app-container">
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