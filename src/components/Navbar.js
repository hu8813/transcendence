import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Navbar as BootstrapNavbar, Nav, Button } from 'react-bootstrap';
import { FiGlobe } from 'react-icons/fi';
import ReactFlagsSelect from 'react-flags-select';

import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isLoggedIn, setLoggedIn] = useState(false); // Set initial login status

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const handleLogout = () => {
    // Implement logout logic here
    setLoggedIn(false);
  };

  return (
    <BootstrapNavbar expand="md" className="pong-navbar">
  
      <div className="language-container">
        <ReactFlagsSelect
          countries={['US', 'FR', 'DE']}
          customLabels={{ US: 'EN', FR: 'FR', DE: 'DE', TR: 'TR', AR: 'AR', BG: 'BG' }}
          selected={i18n.language.toUpperCase()}
          onSelect={(countryCode) => changeLanguage(countryCode.toLowerCase())}
          placeholder="Language"
        />
      </div>
      <div>
      <Link to="/" className="navbar-brand">
        Ping Pong 42
      </Link>
      </div>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/login" className="nav-link">
            <FiGlobe className="mr-2" />
            {t('auth.login')}
          </Link>
          
          {isLoggedIn && (
            <>
              <Link to="/game" className="nav-link">
                <FiGlobe className="mr-2" />
                {t('game.title')}
              </Link>
              <Link to="/leaderboard" className="nav-link">
                <FiGlobe className="mr-2" />
                {t('leaderboard.title')}
              </Link>
              <Button variant="link" className="nav-link" onClick={handleLogout}>
                {t('auth.logout')}
              </Button>
            </>
          )}
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
