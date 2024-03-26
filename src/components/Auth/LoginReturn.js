import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const LoginReturn = ({ setLoggedIn }) => {
  const [userInfo, setUserInfo] = useState(null);
  const location = useLocation();

  const fetchUserInfo = async (code) => {
    try {
      if (code) {
        // Set isLoggedIn state and save it to local storage
        setLoggedIn(true);
        localStorage.setItem("isLoggedIn", true);
      }

      const response = await axios.get(`https://four2trans-backend.onrender.com/api/userinfo/?code=${code}`);
      const userData = response.data.user;

      // Save user information in local storage
      localStorage.setItem("userNickname", userData.nickname);
      localStorage.setItem("userLogin", userData.login);
      localStorage.setItem("userImage", userData.image_link);
      localStorage.setItem("userScore", userData.score);
      localStorage.setItem("userEmail", userData.email);

      // Update state with user information
      setUserInfo(userData);
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get('code');

    const fetchData = async () => {
      if (code) {
        // Use the authorization code to fetch user info from the backend
        await fetchUserInfo(code);
      }
    };

    fetchData();
  }, [location]);

  return (
    <div>
      <h2>Hi!</h2>
      {/* Render user data here */}
      {userInfo && (
        <div>
           <img 
    src={userInfo.image_link} 
    alt="User Avatar" 
    style={{ maxWidth: '200px', maxHeight: '200px' }}  // Adjust the values as needed
  />
          <p>Nickname: {userInfo.nickname}</p>
          <p>Login: {userInfo.login}</p>
          <p>Email: {userInfo.email}</p>
          <p>Score: {userInfo.score}</p>
          {/* Add more user details as needed */}
        </div>
      )}
    </div>
  );
};

export default LoginReturn;
