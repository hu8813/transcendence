// Register.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Button, Container } from 'react-bootstrap';
import './Register.css'; // Create a Register.css file for styling

const Register = () => {
  const { t } = useTranslation();

  // Implement registration logic here
  const handleRegister = () => {
    // Add your registration logic
  };

  return (
    <Container>
      <h2>{t('auth.register')}</h2>
        <div className="register-container text-center">
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

        <Button variant="primary" type="submit" onClick={handleRegister}>
          {t('auth.register')}
        </Button>
      </Form>
      </div>
    </Container>
  );
};

export default Register;
