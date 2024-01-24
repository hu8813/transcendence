// Register.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Button, Container } from 'react-bootstrap';
import './Register.css'; // Create a Register.css file for styling

const Register = () => {
  const { t } = useTranslation();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  // Implement registration logic here
  const handleRegister = () => {
    // Add your registration logic
    if (password === confirmPassword) {
      // Passwords match, proceed with registration
      // Implement your registration logic here
      console.log('Registration successful!');
    } else {
      // Passwords do not match, set passwordMismatch state to true
      setPasswordMismatch(true);
    }
  };

  // Function to handle password change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // Reset passwordMismatch state when the user changes the password
    setPasswordMismatch(false);
  };

  // Function to handle confirmPassword change
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    // Reset passwordMismatch state when the user changes the confirmPassword
    setPasswordMismatch(false);
  };

  return (
    <Container>
     
      <div className="register-container text-center">
      <h2>{t('auth.register')}</h2>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>{t('auth.email')}</Form.Label>
            <Form.Control type="email" placeholder={t('auth.enterEmail')} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>{t('auth.password')}</Form.Label>
            <Form.Control
              type="password"
              placeholder={t('auth.enterPassword')}
              onChange={handlePasswordChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>{t('auth.confirmPassword')}</Form.Label>
            <Form.Control
              type="password"
              placeholder={t('auth.confirmPassword')}
              onChange={handleConfirmPasswordChange}
              isInvalid={passwordMismatch}
            />
            <Form.Control.Feedback type="invalid">
              {t('auth.passwordMismatch')}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label={
                <>
                  {t('auth.acceptTerms')}{' '}
                  <a href="/terms-and-conditions" target="_blank">
                    {t('auth.termsAndConditions')}
                  </a>
                </>
              }
            />
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
