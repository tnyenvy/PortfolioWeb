import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleNavigation = (e, targetId) => {
    e.preventDefault(); 

    if (targetId === 'about') {
        navigate('/about');
        return;
    }

    if (location.pathname === '/') {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: targetId } });
    }
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            Yến Vy
          </Link>
        </div>

        {/* Menu bên phải */}
        <nav className="header__nav">
          <ul className="header__menu">
            <li>
              <a href="#projects" onClick={(e) => handleNavigation(e, 'projects')}>
                Work
              </a>
            </li>
            <li>
              <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
                About
              </Link>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleNavigation(e, 'contact')}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;