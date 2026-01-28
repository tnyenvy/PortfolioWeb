import React from 'react';
import './Footer.scss';

const Footer = ({ text = '© 2026 Yen Vy' }) => {
  return (
    <footer className="footer">
      <p>{text}</p>
    </footer>
  );
};

export default Footer;