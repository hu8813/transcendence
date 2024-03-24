import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const LoginReturn = () => {
  const location = useLocation();
  const [accessToken, setAccessToken] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const code = urlParams.get("code");

    if (code) {
      exchangeCodeForToken(code);
    }
  }, [location.search]);

  const exchangeCodeForToken = (code) => {
    const clientId = process.env.REACT_APP_CLIENT_ID || "your-client-id";
    const clientSecret =
      process.env.REACT_APP_CLIENT_SECRET || "your-client-secret";
    const redirectUri =
      process.env.REACT_APP_REDIRECT_URI ||
      "https://42dashboard.vercel.app/login/return";

    const formData = new FormData();
    formData.append("grant_type", "authorization_code");
    formData.append("client_id", clientId);
    formData.append("client_secret", clientSecret);
    formData.append("code", code);
    formData.append("redirect_uri", redirectUri);

    axios({
      method: "post",
      url: "https://api.intra.42.fr/oauth/token",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        const accessToken = response.data.access_token;
        setAccessToken(accessToken);
        console.log("Received access token:", accessToken);
        // Once you have the access token, fetch user data
        fetchUserData(accessToken);
      })
      .catch((error) => {
        console.error("Error exchanging code for token:", error);
      });
  };

  const fetchUserData = (token) => {
    axios
      .get("https://api.intra.42.fr/v2/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const userData = response.data;
        setUserData(userData);
        console.log("Received user data:", userData);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  return (
    <div>
      <h2>Handle Login Return</h2>
      {/* Render user data here */}
      {userData && (
        <div>
          <p>ID: {userData.id}</p>
          <p>Email: {userData.email}</p>
          {/* Add more user details as needed */}
        </div>
      )}
    </div>
  );
};

export default LoginReturn;
