import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar/Navbar.jsx';
import Home from '../pages/Home/Home.jsx';
import AboutMe from '../pages/AboutMe/AboutMe.jsx';

const Layout = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const mainRef = useRef(null);

  const handleNavigate = (page) => {
    // Scroll TRƯỚC KHI đổi page
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    setCurrentPage(page);
  };

  useEffect(() => {
    // Force scroll to top khi page thay đổi
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
    
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);
    
    return () => clearTimeout(timeoutId);
  }, [currentPage]);

  return (
    <div className="app-container">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="main-content" ref={mainRef}>
        {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutMe onNavigate={handleNavigate} />}
      </main>
    </div>
  );
};

export default Layout;