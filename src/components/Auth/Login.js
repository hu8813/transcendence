// Login.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { Form, Button, Container } from 'react-bootstrap';
import { FiUser } from 'react-icons/fi';
import './Login.css'; // Create a Login.css file for styling

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
      <div className="login-container bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-2xl font-semibold mb-4">{t('auth.login')}</h1>
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
        <Form className="text-left">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>{t('auth.email')}</Form.Label>
            <Form.Control type="email" placeholder={t('auth.enterEmail')} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>{t('auth.password')}</Form.Label>
            <Form.Control type="password" placeholder={t('auth.enterPassword')} />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={() => handleSignIn('regular')}
            className="mt-3"
          >
            {t('auth.signIn')}
          </Button>
        </Form>
        <p className="mt-4">
          {t('auth.notRegistered')}{' '}
          <Link to="/register" className="text-blue-500">
            {t('auth.registerHere')}
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default Login;
