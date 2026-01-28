import React from 'react';
import Button from '../Button/Button.jsx';
import './AboutSection.scss';

const AboutSection = ({ onNavigate }) => {
  const handleMoreAbout = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (onNavigate && typeof onNavigate === 'function') {
      onNavigate('about');
      
      // Scroll lên đầu sau khi navigate
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
      }, 0);
    } else {
      console.warn('onNavigate function is not provided');
    }
  };

  return (
    <section className="about-section-home">
      <div className="about-container">
        {/* Cột bên trái: Tiêu đề, nội dung và nút */}
        <div className="text-column">
          <div className="about-section-home__content">
            <p className="intro">
              I am a front-end developer based in VietNam. Has strong English background.
            </p>
            <p className="description">
              I am a front-end developer based in VietNam looking for exciting opportunities. 
              Has strong English background. Likes to focus on accessibility when developing. 
              Passionate and curious about solving problems. Currently, I'm exploring Reactjs, 
              Webflow and a bit of Designing. While I am not programming, I enjoy playing games, 
              listening to music and reading. Learning more to improve skill.
            </p>
            
            {/* Thêm type="button" để ngăn submit behavior */}
            <Button 
              className="btn-link-style" 
              onClick={handleMoreAbout}
              type="button"
            >
              MORE ABOUT ME
            </Button>
          </div>
        </div>

        {/* Cột bên phải: Ảnh */}
        <div className="image-column">
          <div className="image-placeholder">
            <img src="/assets/img2.jpg" alt="Yến Vy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;