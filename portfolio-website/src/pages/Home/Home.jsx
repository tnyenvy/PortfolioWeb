import React from 'react';
import Button from '../../components/Button/Button.jsx';
import SocialLink from '../../components/SocialLink/SocialLink.jsx';
import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx';
import AboutSection from '../../components/AboutSection/AboutSection.jsx';
import ContactSection from '../../components/ContactSection/ContactSection.jsx';
import './Home.scss';

const Home = ({ onNavigate }) => {
  const projects = [
    {
      id: 1,
      title: 'Promotional landing page for our favorite show',
      description: 'Teamed up with a freelance team to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.',
      year: '2023',
      role: 'Front-end Developer',
      image: '🎮',
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 2,
      title: 'Blog site for World News',
      description: 'Mastered CSS Grid complexities in building an innovative news platform, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in front-end development.',
      year: '2022',
      role: 'Front-end Developer',
      client: 'World News',
      links: {
        view: '#'
      }
    }
  ];

  const handleContactClick = () => {
    // Scroll to contact section
    const contactSection = document.querySelector('.contact-section-home');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">
            HI, I AM<br />
            TRẦN NGỌC YẾN VY
          </h1>
          <p className="hero__description">
            A VietNam based front-end developer passionate about building
            accessible and user friendly websites.
          </p>
          <div className="hero__actions">
            <Button variant="primary" onClick={handleContactClick}>
              CONTACT ME
            </Button>
            <SocialLink 
              platform="linkedin" 
              link="https://www.linkedin.com/in/vy-tr%E1%BA%A7n-846718366/" 
            />
            <SocialLink 
              platform="github" 
              link="https://github.com/tnyenvy" 
            />
          </div>
        </div>
        <div className="hero__image">
          <div className="image-placeholder">
            <img src="/assets/img1.jpg" alt="Yến Vy" />
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Featured Projects Section */}
      <section className="projects">
        <h2 className="projects__title">FEATURED PROJECTS</h2>
        <p className="projects__subtitle">
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <div className="section-divider"></div>

      {/* About Me Section */}
      <AboutSection onNavigate={onNavigate} />

      <div className="section-divider"></div>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Home;