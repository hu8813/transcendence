// Footer.js
import React from 'react';
import { AiFillHeart } from 'react-icons/ai'; // Import Bootstrap icons
import { GrInstagram, GrTwitter, GrFacebookOption } from 'react-icons/gr';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="social-icons">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <GrInstagram size={30} />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <GrTwitter size={30} />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <GrFacebookOption size={30} />
        </a>
      </div>
      <div className="footer-text">
        Made with <AiFillHeart className="heart-icon" /> by Your Name
      </div>
      
    </footer>
  );
};

export default Footer;
