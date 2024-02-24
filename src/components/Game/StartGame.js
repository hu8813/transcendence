import React, { useState } from "react";
import { Link } from "react-router-dom";
import PongGame from "./PongGame";
import Player3D1 from "./Player3D1";
import PlayerAi1 from "./PlayerAi1";
import PlayersRemote2 from "./PlayersRemote2";

const StartGame = () => {
  const [selectedGame, setSelectedGame] = useState("");

  const handleGameSelection = (gameType) => {
    setSelectedGame(gameType);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Select a Game</h1>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Link to="/PongGame" className="text-decoration-none">
                <button
                  className="btn btn-primary w-100 d-flex justify-content-between align-items-center"
                  onClick={() => handleGameSelection("PongGame")}
                >
                  <span>Standart Game (2 Players locally)</span>
                  <i className="bi bi-controller"></i>
                </button>
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/Player3D1" className="text-decoration-none">
                <button
                  className="btn btn-primary w-100 d-flex justify-content-between align-items-center"
                  onClick={() => handleGameSelection("Player3D1")}
                >
                  <span>1 Player 3D</span>
                  <i className="bi bi-joystick"></i>
                </button>
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/PlayerAi1" className="text-decoration-none">
                <button
                  className="btn btn-primary w-100 d-flex justify-content-between align-items-center"
                  onClick={() => handleGameSelection("PlayerAi1")}
                >
                  <span>1 Player with AI</span>
                  <i className="bi bi-joystick"></i>
                </button>
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/PlayersRemote2" className="text-decoration-none">
                <button
                  className="btn btn-primary w-100 d-flex justify-content-between align-items-center"
                  onClick={() => handleGameSelection("PlayersRemote2")}
                >
                  <span>2 Players Remotely</span>
                  <i className="bi bi-wifi"></i>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StartGame;
