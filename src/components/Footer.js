// Footer.js
import React from 'react';
import { AiFillHeart } from 'react-icons/ai'; // Import Bootstrap icons
import { GrInstagram, GrTwitter, GrFacebookOption } from 'react-icons/gr';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
  
      <div className="footer-text">
        Made with <AiFillHeart className="heart-icon" /> by 42 Students
      </div>
      
    </footer>
  );
};

export default Footer;
