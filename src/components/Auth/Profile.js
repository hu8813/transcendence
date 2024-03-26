import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Profile.css";

const Profile = () => {
  const [avatar, setAvatar] = useState(null);
  const [nickname, setNickname] = useState("");
  const [score, setScore] = useState(null);
  const [email, setEmail] = useState("");

  // Function to handle avatar upload
  const handleAvatarUpload = (event) => {
    const file = event.target.files[0];
    setAvatar(file);
  };

  // Function to upload avatar to Django backend
  const uploadAvatar = () => {
    const formData = new FormData();
    formData.append("avatar", avatar);

    // Retrieve token from localStorage
    const token = localStorage.getItem("access_token");

    axios.post("https://four2trans-backend.onrender.com/upload-avatar/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        // Include token in Authorization header
        "Authorization": `Bearer ${token}`,
      },
    })
    .then((response) => {
      // Handle successful upload
      console.log("Avatar uploaded successfully:", response.data);
    })
    .catch((error) => {
      // Handle upload error
      console.error("Error uploading avatar:", error);
    });
  };


  // Function to fetch current score from the backend
  const fetchScore = () => {
    axios
      .get("https://four2trans-backend.onrender.com/get-score/")
      .then((response) => {
        // Handle JsonResponse here
        const responseData = response.data;
        setScore(responseData.score);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching score:", error);
      });
  };

  // Function to fetch user's email address from the backend
  const fetchEmail = () => {
    axios
      .get("https://four2trans-backend.onrender.com/get-email/")
      .then((response) => {
        // Handle JsonResponse here
        const responseData = response.data;
        setEmail(responseData.email);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching email address:", error);
      });
  };

  // Function to fetch user's nickname from the backend
  const fetchNickname = () => {
    axios
      .get("https://four2trans-backend.onrender.com/get-nickname/")
      .then((response) => {
        const responseData = response.data;
        setNickname(responseData.nickname);
      })
      .catch((error) => {
        console.error("Error fetching nickname:", error);
      });
  };

  // Function to update user's nickname
  const updateNickname = () => {
    axios
      .post("https://four2trans-backend.onrender.com/update-nickname/", {
        nickname: nickname,
      })
      .then((response) => {
        console.log("Nickname updated successfully");
      })
      .catch((error) => {
        console.error("Error updating nickname:", error);
      });
  };

  // Fetch nickname on component mount
  useEffect(() => {
    fetchNickname();
    const userImage = localStorage.getItem("userImage");
    const score =  localStorage.getItem("userScore");
    const nickname = localStorage.getItem("userNickname"); 
    const email = localStorage.getItem("userEmail"); 
    if (userImage) {
      // If user image exists in local storage, set it as the avatar
      setAvatar(userImage);
    }
    if (nickname){
      setNickname(nickname);
    }
    if (score){
      setScore(score);
    }
    if (email){
      setEmail(email);
    }
  }, []);

  const deleteProfile = () => {
  }

  return (
    <div className="body">
      <div className="profile-container">
        <h2 className="profile-title">Profile of {nickname}</h2>
        <div className="profile-info-section">
          <h3 className="info-header">Avatar</h3>
          {avatar ? (
            // Render the avatar if it exists
            <div className="avatar-preview">
              <img src={avatar} alt="User Avatar" className="avatar-image" />
            </div>
          ) : (
            <input
              className="profile-input"
              type="file"
              accept="image/*"
              onChange={handleAvatarUpload}
            />
          )}
          {avatar && (
            <button className="profile-button" onClick={uploadAvatar}>
              Upload Avatar
            </button>
          )}
        </div>
        <div className="nickname-info-section">
          <h3 className="info-header">Nickname</h3>
          <input
            className="profile-input"
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <button className="profile-button" onClick={updateNickname}>
            Change Nickname
          </button>
        </div> <br/> <br/>
        <div className="email-info-section">
          <h3 className="info-header">Email: {email}</h3>
          <br/>
        </div>
        <div className="score-info-section">
          <h3 className="info-header">Score: {score}</h3>
          <br/>
          
        </div> <br/> <br/>
        <div className="delete-profile-section">
          <button className="profile-button bn" onClick={deleteProfile}>
            Delete Profile
          </button>
        </div>
        <div className="profile-footer">
          {/* Footer content */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
