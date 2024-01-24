// Footer.js
import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <Link to="/privacy-policy" className="footer-link">
          Privacy Policy
        </Link>
        <Link to="/contact" className="footer-link">
          Impressum
        </Link>
       
      </div>

      <div className="footer-text">
        Made with <AiFillHeart className="heart-icon" /> by 42 Students
      </div>
 
    </footer>
  );
};

export default Footer;
