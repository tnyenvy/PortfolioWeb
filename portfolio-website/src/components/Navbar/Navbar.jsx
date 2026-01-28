import React, { useState } from 'react';
import './Navbar.scss';

const Navbar = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleMenuClick = (id) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__brand">Yến Vy</div>
      
      <button 
        className={`navbar__hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`navbar__menu ${isMenuOpen ? 'open' : ''}`}>
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={currentPage === item.id ? 'navbar__item active' : 'navbar__item'}
            onClick={() => handleMenuClick(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;