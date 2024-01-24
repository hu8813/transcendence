import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Navbar as BootstrapNavbar, Nav, Button } from 'react-bootstrap';
import { FiGlobe } from 'react-icons/fi';
import ReactFlagsSelect from 'react-flags-select';

import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isLoggedIn, setLoggedIn] = useState(false);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language); // Save the selected language in localStorage
  };

  const handleLogout = () => {
    // Implement logout logic here
    setLoggedIn(false);
  };

  return (
    <BootstrapNavbar expand="md" className="pong-navbar">
  
  



      
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
      <div>
      <Link to="/" className="navbar-brand">
        Ping Pong 42
      </Link>
      </div>
      <div className="language-container">
  <ReactFlagsSelect
    countries={['US', 'DE', 'FR', 'TR', 'EG', 'BG']}
    customLabels={{ US: 'EN', FR: 'FR', DE: 'DE', TR: 'TR', EG: 'EG', BG: 'BG' }}
    selected={i18n.language.toUpperCase()}
    onSelect={(countryCode) => changeLanguage(countryCode.toLowerCase())}
    placeholder="ENG"
    defaultCountry="US"
    selectedSize={20}
    optionsSize={16}
    optionStyles={{
      backgroundColor: '#000 !important', // Set a background color for the dropdown options
      color: '#fff !important', // Set the text color for the dropdown options
    }}
  />
</div>
    </BootstrapNavbar>
  );
};

export default Navbar;
