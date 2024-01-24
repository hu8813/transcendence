import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { Form, Button, Container } from 'react-bootstrap';
import { FiUser } from 'react-icons/fi';

import './Login.css'; // Create a Login.css file for styling
// Import necessary libraries and components


const Login = () => {
  const { t } = useTranslation();

  const handleSignIn = (provider) => {
    if (provider === '42') {
      // Redirect the user to the 42 API authorization URL
      // Use your actual client ID and redirect URI
      const clientId = process.env.REACT_APP_CLIENT_ID;
      const redirectUri = process.env.REACT_APP_REDIRECT_URI;
      const authUrl = `https://api.intra.42.fr/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;

      window.location.href = authUrl;
    } else {
      // Implement your logic for regular sign-in
    }
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, []);

  return (
    <Container>
      <div className="wrapper">
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleSignIn('42')}
          className="rounded focus:outline-none hover:bg-blue-600 mb-4"
        >
          <FiUser className="mr-2" />
          {t('auth.signInWith42')}
        </Button>
        <div className="or-separator mb-4">
          <span className="or-text">{t('common.or')}</span>
        </div>
        <div className="text-center mt-4 name">
          {t('auth.signIn')}
        </div>
     
        <form className="p-3 mt-3">
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input type="text" name="userName" id="userName" placeholder={t('auth.email')} />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input type="password" name="password" id="pwd" placeholder={t('auth.password')} />
          </div>
          <button className="btn mt-3">{t('auth.login')}</button>
        </form>
        <div className="text-center fs-6">
          <Link to="/forgot-password">{t('auth.forgotPassword')}</Link> {t('common.or')} <Link to="/register">{t('auth.registerHere')}</Link>
        </div>
      </div>
    </Container>
  );
};

export default Login;
