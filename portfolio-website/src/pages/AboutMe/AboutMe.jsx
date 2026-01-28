import React, { useEffect } from 'react';
import Button from '../../components/Button/Button.jsx';
import SocialLink from '../../components/SocialLink/SocialLink.jsx';
import ContactSection from '../../components/ContactSection/ContactSection.jsx';
import './AboutMe.scss';

const AboutMe = ({ onNavigate }) => {
  // Scroll to top 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    'HTML', 'CSS', 'JAVASCRIPT', 'SQL', 'FIGMA', 'TAILWIND CSS'
  ];

  return (
    <div className="about-me-page">
      {/* Header Section */}
      <section className="about-header">
        <h1 className="about-header__title">ABOUT ME</h1>
        
        <div className="about-header__content">
          <p className="intro-text">
            I am a front-end developer based in VietNam. Has strong English background.
          </p>
          <p className="detail-text">
            I am a front-end developer based in VietNam looking for exciting opportunities. 
            Has strong English background. Likes to focus on accessibility when developing. 
            Passionate and curious about solving problems. 
            Currently, I'm exploring Reactjs, Webflow and a bit of Designing. 
            While I am not programming, I enjoy playing football, photography and playing Valorant. 
            Learning more to improve skill.
          </p>
          
          <div className="action-buttons">
            <Button variant="primary" className="btn-resume">
              RESUME
              <span className="btn__icon-wrapper">
                {/* SVG Icon Download */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Button>
            
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
        
        {/* Badge and Profile Image */}
        <div className="profile-section">
          <div className="profile-image">
            <div className="image-placeholder">
              <img src="/src/assets/img1.jpg" alt="Yến Vy" />
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Capabilities Section */}
      <section className="capabilities">
        <h2 className="capabilities__title">MY CAPABILITIES</h2>
        <p className="capabilities__description">
          I am always looking to add more skills. Morbi egestas neque eu blandit fermentum quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis.
        </p>
        <div className="capabilities__skills">
          {capabilities.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Experience Section */}
      <section className="experience">
        <h2 className="experience__title">MY EXPERIENCE</h2>
        
        <div className="experience-item">
          <div className="experience-header">
            <h3 className="job-title">Freelance Developer</h3>
            <p className="job-period">Nov 2023 - Present</p>
          </div>
          <p className="job-description">
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h3 className="job-title">Front-End Intern</h3>
            <p className="job-period">May 2023 - Oct 2023</p>
          </div>
          <p className="job-description">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default AboutMe;