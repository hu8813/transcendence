// Import Link component from react-router-dom
import { Link } from 'react-router-dom';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Button, Container } from 'react-bootstrap';

const Login = () => {
  const { t } = useTranslation();

  // Implement login logic here
  const handleLogin = () => {
    // Add your login logic
  };

  return (
    <Container>
      <h2>{t('auth.login')}</h2>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>{t('auth.email')}</Form.Label>
          <Form.Control type="email" placeholder={t('auth.enterEmail')} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>{t('auth.password')}</Form.Label>
          <Form.Control type="password" placeholder={t('auth.enterPassword')} />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label={t('auth.rememberMe')} />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleLogin}>
          {t('auth.login')}
        </Button>
      </Form>
      <p>{t('auth.forgotPassword')}</p>
      <p>
        {t('auth.notRegistered')}{' '}
        {/* Use the imported Link component here */}
        <Link to="/register">{t('auth.registerHere')}</Link>
      </p>
    </Container>
  );
};

export default Login;
