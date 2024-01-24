// Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container text-center">
      
      <div className="game-container">
        <div className="ping-pong-table">
          <div className="ping-pong-ball"></div>
        </div>
        <h1 className="mx-auto">Welcome to the Ping Pong Game! Sign-in to play.</h1>
      </div>
    </div>
  );
};

export default Home;
