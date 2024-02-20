import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Form, Button, Container } from "react-bootstrap";
import "./Register.css"; // Create a Register.css file for styling

const Register = () => {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [registerStatus, setRegisterStatus] = useState("");

  // Function to handle registration
  // Function to handle registration
  const handleRegister = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);
        formData.append("confirm_password", password);

        const response = await fetch(
          "https://four2trans-backend.onrender.com/register/",
          {
            method: "POST",
            body: formData,
          },
        );
        const data = await response.text();

        // Check if response contains error message
        if (data.includes("errorlist")) {
          // Parse HTML content to extract error message
          const parser = new DOMParser();
          const htmlDoc = parser.parseFromString(data, "text/html");
          const errorList = htmlDoc.getElementsByClassName("errorlist")[0];
          const errorMessage = errorList.textContent.trim();

          setRegisterStatus(errorMessage); // Update register status with error message
        } else {
          console.log("Registration Response:", data); // Log response data
          setRegisterStatus(data.trim()); // Update register status based on response from backend
        }
      } catch (error) {
        console.error("Error registering:", error);
        setRegisterStatus("Error registering"); // Update register status if an error occurs
      }
    } else {
      // Passwords do not match, set passwordMismatch state to true
      setPasswordMismatch(true);
    }
  };

  // Function to handle username change
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
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
        <h2>{t("auth.register")}</h2>
        <Form onSubmit={handleRegister}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>{t("auth.username")}</Form.Label>
            <Form.Control
              type="text"
              placeholder={t("auth.username")}
              onChange={handleUsernameChange}
              value={username}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>{t("auth.password")}</Form.Label>
            <Form.Control
              type="password"
              placeholder={t("auth.enterPassword")}
              onChange={handlePasswordChange}
              value={password}
            />
          </Form.Group>

          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>{t("auth.confirmPassword")}</Form.Label>
            <Form.Control
              type="password"
              placeholder={t("auth.confirmPassword")}
              onChange={handleConfirmPasswordChange}
              value={confirmPassword}
              isInvalid={passwordMismatch}
            />
            <Form.Control.Feedback type="invalid">
              {t("auth.passwordMismatch")}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label={
                <>
                  {t("auth.acceptTerms")}{" "}
                  <a href="/terms-and-conditions" target="_blank">
                    {t("auth.termsAndConditions")}
                  </a>
                </>
              }
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            {t("auth.register")}
          </Button>
          {registerStatus && (
            <div className="register-status">{registerStatus}</div>
          )}
        </Form>
      </div>
    </Container>
  );
};

export default Register;
