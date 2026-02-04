import React, { useState, useEffect } from 'react';
import './BackToTop.scss';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Theo dõi vị trí cuộn
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Hàm cuộn lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`back-to-top ${isVisible ? 'visible' : ''}`}>
      <button onClick={scrollToTop} className="back-to-top__button" aria-label="Back to top">
        {/* Icon mũi tên */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </button>
    </div>
  );
};

export default BackToTop;