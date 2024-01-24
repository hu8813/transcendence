// Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Ping Pong Game App!</h1>
      <div className="game-container">
        <div className="ping-pong-table">
          <div className="ping-pong-ball"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
