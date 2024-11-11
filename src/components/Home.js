import React, { useEffect, useState } from 'react';
import LogoB from '../assets/images/LogoB.png';
import ContactUs from './ContactUs.js';
import Spheres from './Spheres.js';
import './css/WelcomeSection.css';
import AllProject from './AllProject.js';
import '../components/css/AllProject.css'
import Videotron from './Videotron.js'
import '../components/css/Videotron.css'

const Home = () => {
  const [animate, setAnimate] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(false);

  useEffect(() => {
    setAnimate(true);

    const handleScroll = () => {
      if (window.scrollY > 80) {
        setHideOnScroll(true);
      } else {
        setHideOnScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <div className="welcome-section-container mt-5">
        <div className={`welcome-container d-flex flex-column align-items-center justify-content-center ${animate ? 'animate' : ''} ${hideOnScroll ? 'hide' : ''}`}>
          <div className="welcome-image-container position-relative">
            <img src={LogoB} alt="Letter B" className="welcome-image img-fluid" />
            <div className="welcome-text position-absolute top-50 start-50 translate-middle text-center">
              <span className="black">W</span>
              <span className="black">E</span>
              <span className="black">L</span>
              <span className="blue">C</span>
              <span className="blue">O</span>
              <span className="black">M</span>
              <span className="black">E</span>
            </div>
          </div>
          <div className="description mt-4 text-center">
            <h2>Welcome to Belle Design Studio</h2>
            <br></br>
            <h5>CREATIVE, IMMERSIVE, EXTRAORDINARY</h5>
            <p>Belle Design Studio is an Architecture Firm that helps businesses to do Branding, Events, and Advertising</p>
          </div>
          <ContactUs />
        </div>
        {hideOnScroll && (
          <div className="canvas-container">
            <Spheres />
          </div>
        )}
      <AllProject/>
      <Videotron/>
    </div>
  );
};

export default Home;
