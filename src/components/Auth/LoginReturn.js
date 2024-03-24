import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const LoginReturn = ({ setLoggedIn }) => {
  const [userInfo, setUserInfo] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get('code');

    if (code) {
      // Use the authorization code to fetch user info from the backend
      fetchUserInfo(code);
    }
  }, [location]);

  const fetchUserInfo = async (code) => {
    try {
      if (code)
      {
        localStorage.setItem("isLoggedIn", true);
      } 
      
      const response = await axios.get(`https://four2trans-backend.onrender.com/api/userinfo/?code=${code}`);
      const userData = response.data.user;
      setUserInfo(userData);

      // Update isLoggedIn state and set it to true in local storage
    } catch (error) {
      if (code)
      {
        localStorage.setItem("isLoggedIn", true);
      }
      console.error("Error fetching user info:", error);
    }
  };

  return (
    <div>
      <h2>Handle Login Return</h2>
      {/* Render user data here */}
      {userInfo && (
        <div>
          <p>Email: {userInfo.email}</p>
          <p>Login: {userInfo.login}</p>
          {/* Add more user details as needed */}
        </div>
      )}
    </div>
  );
};

export default LoginReturn;
