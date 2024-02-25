import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  IoGameControllerOutline,
  IoGameControllerSharp,
  IoGameController,
} from "react-icons/io5";
import "./StartGame.css"; // Import CSS file for custom styling if needed

const StartGame = () => {
  const [selectedGame, setSelectedGame] = useState("");

  const handleGameSelection = (gameType) => {
    setSelectedGame(gameType);
  };

  return (
    <div className="container mt-5 text-center">
      {" "}
      {/* Updated to include text-center class */}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="mb-4">Select a Game:</h1>{" "}
          {/* Removed text-center class */}
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <button
                className="btn btn-primary btn-lg w-100 d-flex justify-content-between align-items-center"
                onClick={() => handleGameSelection("PongGame")}
              >
                <span>Standart Game (2 Players locally)</span>
                <IoGameControllerOutline />
              </button>
            </li>
            <li className="list-group-item">
              <button
                className="btn btn-primary btn-lg w-100 d-flex justify-content-between align-items-center"
                onClick={() => handleGameSelection("Player3D1")}
              >
                <span>1 Player 3D</span>
                <IoGameControllerSharp />
              </button>
            </li>
            <li className="list-group-item">
              <button
                className="btn btn-primary btn-lg w-100 d-flex justify-content-between align-items-center"
                onClick={() => handleGameSelection("PlayerAi1")}
              >
                <span>1 Player with AI</span>
                <IoGameControllerSharp />
              </button>
            </li>
            <li className="list-group-item">
              <button
                className="btn btn-primary btn-lg w-100 d-flex justify-content-between align-items-center"
                onClick={() => handleGameSelection("PlayersRemote2")}
              >
                <span>2 Players Remotely</span>
                <IoGameController />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StartGame;
