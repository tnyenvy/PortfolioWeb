import React, { useState, useEffect } from 'react';
import SocialLink from '../SocialLink/SocialLink.jsx';
import ContactForm from '../ContactForm/ContactForm.jsx';
import Footer from '../Footer/Footer.jsx';
import './ContactSection.scss';

const ContactSection = ({ onSubmit }) => {
  // State quản lý hiển thị thông báo
  const [showSuccess, setShowSuccess] = useState(false);

  const handleFormSubmit = (formData) => {
    if (onSubmit) {
      onSubmit(formData);
    } else {
      console.log('Form data:', formData);
      setShowSuccess(true);
      //Tự động tắt sau 3 giây
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  };

  return (
    <section className="contact-section-home">
      <h2 className="contact-section-home__title">LET'S CONNECT</h2>
      
      <div className="contact-grid">
        {/* Left Column - Contact Info & Profile Card */}
        <div className="contact-info-column">
          <div className="contact-info">
            <p className="contact-text">
              Say hello at <a href="mailto:tnyenvy.2003@gmail.com">tnyenvy.2003@gmail.com</a>
            </p>
            <p className="contact-text">
              For more info, here's my <a href="#">resume</a>
            </p>
            <div className="social-links">
              <SocialLink 
                platform="linkedin" 
                link="https://www.linkedin.com/in/vy-tr%E1%BA%A7n-846718366/" 
                ariaLabel="LinkedIn" 
              />
              <SocialLink 
                platform="github" 
                link="https://github.com/tnyenvy" 
                ariaLabel="GitHub" 
              />
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="contact-form-column">
          <ContactForm onSubmit={handleFormSubmit} />
        </div>
      </div>
      <Footer />
      {/* --- POP-UP THÔNG BÁO --- */}
      <div className={`success-toast ${showSuccess ? 'show' : ''}`}>
        <span className="toast-icon">✓</span>
        Thank you for your message!
      </div>
    </section>
  );
};

export default ContactSection;