import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { Form, Button, Container } from "react-bootstrap";
import { FiUser } from "react-icons/fi";
import axios from "axios";
import "./Login.css";

const Login = ({ setLoggedIn }) => {
  const [csrftoken, setCsrfToken] = useState("");
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [authCode, setAuthCode] = useState(null);
  const [loginStatus, setLoginStatus] = useState(
    "Before clicking Login please wait a bit, as Django backend is on Free server which must be waken up first.",
  );
  const [token, setToken] = useState(""); // State to store the token

  useEffect(() => {
    fetchCsrfToken();
    wakeUpBackend();
  }, []);

  const fetchCsrfToken = async () => {
    try {
      const response = await fetch("/get-csrf-token/");
      const data = await response.json();
      const token = data.csrfToken || "ns9y1mCcGwoeH5Sh4WTcJZfdg600L0nm";
      setCsrfToken(token);
    } catch (error) {
      console.error("Error fetching CSRF token:", error);
      setCsrfToken("ns9y1mCcGwoeH5Sh4WTcJZfdg600L0nm");
    }
  };

  const wakeUpBackend = async () => {
    try {
      const pingURL = "https://four2trans-backend.onrender.com/ping/";
      const response = await axios.get(pingURL);
      console.log(response.data.message);
    } catch (error) {
      console.error("Error waking up server:", error);
    }
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }

    const urlParams = new URLSearchParams(location.search);
    const code = urlParams.get("code");

    if (code) {
      setAuthCode(code);
      exchangeCodeForAccessToken(code);
    }
  }, [location.search]);

  const exchangeCodeForAccessToken = (code) => {
    let clientId = process.env.REACT_APP_CLIENT_ID || "your-client-id";
    let clientSecret =
      process.env.REACT_APP_CLIENT_SECRET || "your-client-secret";
    let redirectUri =
      process.env.REACT_APP_REDIRECT_URI ||
      "https://42dashboard.vercel.app/login/42/return";

    const requestBody = new URLSearchParams();
    requestBody.append("client_id", clientId);
    requestBody.append("client_secret", clientSecret);
    requestBody.append("code", code);
    requestBody.append("redirect_uri", redirectUri);
    requestBody.append("grant_type", "authorization_code");

    fetch("https://api.intra.42.fr/oauth/token", {
      method: "POST",
      body: requestBody,
    })
      .then((response) => response.json())
      .then((data) => {
        const accessToken = data.access_token;
        localStorage.setItem("access_token", accessToken);
        setToken(accessToken); // Set the token in state upon successful retrieval
        console.log("Access Token:", accessToken);
        navigate("/leaderboard"); // Redirect to /leaderboard after successful login
      })
      .catch((error) => {
        console.error(
          "Error exchanging authorization code for access token:",
          error,
        );
      });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://four2trans-backend.onrender.com/login/",
        {
          method: "POST",
          body: formData,
        },
      );
      const data = await response.text();
      console.log("Login Response:", data); // Log response data
      setLoginStatus(data.trim()); // Update login status based on response from backend
      if (data.trim() === "Login successful") {
        setLoggedIn(true); // Update isLoggedIn state if login is successful
        localStorage.setItem("isLoggedIn", true); // Set isLoggedIn to true in local storage
        // Exchange username and password for a token upon successful login
        exchangeUsernamePasswordForToken(formData.get("username"), formData.get("password"));
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setLoginStatus("Error logging in"); // Update login status if an error occurs
    }
    navigate("/leaderboard");
  };

  const exchangeUsernamePasswordForToken = (username, password) => {
    // Send a request to your Django backend to obtain a token using the provided username and password
    // Example:
    axios.post("https://four2trans-backend.onrender.com/api/token/", {
      username: username,
      password: password,
    })
    .then((response) => {
      const token = response.data.access; // Assuming the token is returned in the response
      localStorage.setItem("token", token); // Store the token in localStorage for future use
      setToken(token); // Update the token in state
      //console.log(token);
    })
    .catch((error) => {
      console.error("Error obtaining token:", error);
    });
  };

  return (
    <Container>
      <div className="wrapper">
        <Button
          variant="contained"
          color="primary"
          href={`https://api.intra.42.fr/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`}
          className="rounded focus:outline-none hover:bg-blue-600 mb-4"
        >
          <FiUser className="mr-2" />
          {t("auth.signInWith42")}
        </Button>
        <div className="or-separator mb-4">
          <span className="or-text">{t("common.or")}</span>
        </div>
        <div className="text-center mt-4 name">{t("auth.signIn")}</div>

        {csrftoken && (
          <form
            className="p-3 mt-3"
            onSubmit={handleLogin} // Use onSubmit event to handle form submission
          >
            <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
            <div className="form-field d-flex align-items-center">
              <span className="far fa-user"></span>
              <input
                type="text"
                name="username"
                id="userName"
                placeholder={t("auth.username")}
                defaultValue="user42"
              />
            </div>
            <div className="form-field d-flex align-items-center">
              <span className="fas fa-key"></span>
              <input
                type="password"
                name="password"
                id="pwd"
                placeholder={t("auth.password")}
                defaultValue="Pass@42"
              />
            </div>
            <Button type="submit" className="btn mt-3">
              {t("auth.login")}
            </Button>
          </form>
        )}

        <div className="text-center fs-6">
          <Link to="/forgot-password">{t("auth.forgotPassword")}</Link>{" "}
          {t("common.or")} <Link to="/register">{t("auth.registerHere")}</Link>
        </div>

        {/* Display login status */}
        {loginStatus && <div className="text-center mt-3">{loginStatus}</div>}
      </div>
    </Container>
  );
};

export default Login;
