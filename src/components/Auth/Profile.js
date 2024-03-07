import React, { useState, useEffect } from "react";
import axios from "axios";

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
    
    axios.post("https://four2trans-backend.onrender.com/upload-avatar", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
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
  }, []);

  return (
    <div>
      <h2>Edit Profile</h2>
      <div>
        <h3>Avatar</h3>
        <input type="file" accept="image/*" onChange={handleAvatarUpload} />
        {avatar && (
          <div>
            <p>Selected avatar: {avatar.name}</p>
            <button onClick={uploadAvatar}>Upload Avatar</button>
          </div>
        )}
      </div>
      <div>
        <h3>Nickname</h3>
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <button onClick={updateNickname}>Change Nickname</button>
      </div>
      <div>
        <h3>Email</h3>
        <p>{email}</p>
        <button onClick={fetchEmail}>Fetch Email</button>
      </div>
      <div>
        <h3>Score</h3>
        <button onClick={fetchScore}>Fetch Score</button>
        {score && <p>Current score: {score}</p>}
      </div>
    </div>
  );
};

export default Profile;
