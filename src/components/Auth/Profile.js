import React, { useState } from "react";
import axios from "axios";

const Profile = () => {
  const [avatar, setAvatar] = useState(null);
  const [score, setScore] = useState(null);

  // Function to handle avatar upload
  const handleAvatarUpload = (event) => {
    const file = event.target.files[0];
    setAvatar(file);

    // You can also upload the avatar to the backend here using axios
    // Example:
    // const formData = new FormData();
    // formData.append("avatar", file);
    // axios.post("https://four2trans-backend.onrender.com/upload-avatar", formData)
    //   .then(response => {
    //     // Handle successful upload
    //   })
    //   .catch(error => {
    //     // Handle upload error
    //   });
  };

  // Function to fetch current score from the backend
  const fetchScore = () => {
    axios
      .get("https://four2trans-backend.onrender.com/get-score")
      .then((response) => {
        // Handle JsonResponse here
        const responseData = response.data;
        setScore(responseData.score);
        // You can also handle user info if included in the response
        // const userInfo = responseData.users;
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching score:", error);
      });
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <div>
        <h3>Avatar</h3>
        <input type="file" accept="image/*" onChange={handleAvatarUpload} />
        {avatar && (
          <div>
            <p>Selected avatar: {avatar.name}</p>
            {/* You can display a preview of the avatar here */}
          </div>
        )}
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
