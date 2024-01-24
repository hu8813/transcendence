import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Navbar as BootstrapNavbar, Nav, Button, Image } from 'react-bootstrap';
import { FiGlobe } from 'react-icons/fi'; // Fix import path
import ReactFlagsSelect from 'react-flags-select';


import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <BootstrapNavbar expand="md" className="pong-navbar">
        
     
      <div className="language-container">
  <ReactFlagsSelect
    countries={['US', 'FR', 'DE']}
    customLabels={{ US: 'EN', FR: 'FR', DE: 'DE' }}
    selected={i18n.language.toUpperCase()}
    onSelect={(countryCode) => changeLanguage(countryCode.toLowerCase())}
    placeholder="Language" 
  />
   <Link to="/" className="navbar-brand">
        Ping Pong 42

        
      </Link>
</div>

      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/game" className="nav-link">
            <FiGlobe className="mr-2" /> {/* Icon for the game link */}
            {t('game.title')}
          </Link>
          <Link to="/leaderboard" className="nav-link">
            <FiGlobe className="mr-2" /> {/* Icon for the leaderboard link */}
            {t('leaderboard.title')}
          </Link>
          <Link to="/chat" className="nav-link">
            <FiGlobe className="mr-2" /> {/* Icon for the chat link */}
            {t('chat.title')}
          </Link>
          <Link to="/login" className="nav-link">
            <FiGlobe className="mr-2" /> {/* Icon for the login link */}
            {t('auth.login')}
          </Link>
          <Link to="/register" className="nav-link">
            <FiGlobe className="mr-2" /> {/* Icon for the register link */}
            {t('auth.register')}
          </Link>
          </Nav>
      </BootstrapNavbar.Collapse>
      
    </BootstrapNavbar>
  );
};

export default Navbar;
