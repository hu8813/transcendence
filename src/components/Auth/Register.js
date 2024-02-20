import React, { useState, useEffect } from "react";
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
  const [registerSuccess, setRegisterSuccess] = useState(false);

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

        // Inside handleRegister function after fetching response
        if (data.includes("errorlist")) {
          const parser = new DOMParser();
          const htmlDoc = parser.parseFromString(data, "text/html");
          const errorList = htmlDoc.getElementsByClassName("errorlist")[0];
          const errorMessage = errorList.textContent.trim();

          if (errorMessage.includes("already exists")) {
            setRegisterStatus(
              "Username already exists. Please choose a different one.",
            );
          } else {
            setRegisterStatus(errorMessage);
          }
        } else {
          setRegisterStatus(data.trim());
          setUsername("");
          setPassword("");
          setConfirmPassword("");
          setPasswordMismatch(false);
          setRegisterSuccess(true);
        }
      } catch (error) {
        console.error("Error registering:", error);
        setRegisterStatus("Error registering");
      }
    } else {
      setPasswordMismatch(true);
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordMismatch(false);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMismatch(false);
  };

  useEffect(() => {
    if (registerSuccess) {
      // Redirect to onboarding page after 2 seconds
      const timeout = setTimeout(() => {
        window.location.href = "/onboarding";
      }, 2000);

      // Clear timeout on component unmount
      return () => clearTimeout(timeout);
    }
  }, [registerSuccess]);

  return (
    <Container>
      <div className="register-container text-center">
        <h2>{t("auth.register")}</h2>
        {!registerSuccess ? (
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
        ) : (
          <div className="register-success text-center">
            <h3>Registration Successful!</h3>
            <p>Redirecting to onboarding page...</p>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Register;
