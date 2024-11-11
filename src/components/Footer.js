import React from "react";
import "./css/Footer.css";
import { FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container d-flex flex-column align-items-center justify-content-center pb-4">
      <div className="social-media-icons d-flex justify-content-center">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaInstagram />
        </a>
        <a href="mailto:info@belledesignstudio.com" className="social-icon">
          <FaEnvelope />
        </a>
      </div>
      <div className="footer-links d-flex justify-content-center md-2">
        <a href="/terms" className="footer-link">
          Terms & Conditions
        </a>
        <span className="md-2">|</span>
        <a href="/privacy" className="footer-link">
          Privacy Policy
        </a>
      </div>
      <div className="copyright md-2">&copy; 2024 Belle Design Studio</div>
    </footer>
  );
};

export default Footer;
