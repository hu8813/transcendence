import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n'; 
import { Form, Button, Container } from 'react-bootstrap';
import { FiUser } from 'react-icons/fi'; // Use your preferred 42 icon



const Login = () => {
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
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-2xl font-semibold mb-4">Login Page</h1>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleSignIn('42')}
          className="rounded focus:outline-none hover:bg-blue-600"
        >
          <FiUser className="mr-2" /> {/* Use your preferred 42 icon */}
          Sign In with 42
        </Button>
         or
        <Form>
          {/* Include your regular sign-in form fields here */}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={() => handleSignIn('regular')}
            className="mt-3"
          >
            Sign In
          </Button>
        </Form>
        <p className="mt-4">
          Don't have an account? <Link to="/register" className="text-blue-500">Go to Register</Link>
        </p>
      </div>
    </Container>
  );
};

export default Login;
