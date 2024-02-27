// App.js
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n"; // Import the i18n configuration

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import StartGame from "./components/Game/StartGame";
import PongGame from "./components/Game/PongGame";
import PongEhab from "./components/Game/PongEhab";
import Player3D1 from "./components/Game/Player3D1";
import Playerai1 from "./components/Game/PlayerAi1";
import Playersremote2 from "./components/Game/PlayersRemote2";
import Footer from "./components/Footer";
import Leaderboard from "./components/Leaderboard";
import Profile from "./components/Auth/Profile";
import Chat from "./components/Chat";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false); // Define isLoggedIn state

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div>
          <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={<Login setLoggedIn={setLoggedIn} />}
            />
            <Route path="/register" element={<Register />} />
            <Route
              path="/game"
              element={isLoggedIn ? <StartGame /> : <Navigate to="/login" />}
            />
            <Route
              path="/chat"
              element={isLoggedIn ? <Chat /> : <Navigate to="/login" />}
            />
            <Route
              path="/leaderboard"
              element={isLoggedIn ? <Leaderboard /> : <Navigate to="/login" />}
            />
            <Route
              path="/pongehab"
              element={isLoggedIn ? <PongEhab /> : <Navigate to="/login" />}
            />
            <Route
              path="/ponggame"
              element={isLoggedIn ? <PongGame /> : <Navigate to="/login" />}
            />
            <Route
              path="/player3d1"
              element={isLoggedIn ? <Player3D1 /> : <Navigate to="/login" />}
            />
            <Route
              path="/playerai1"
              element={isLoggedIn ? <Playerai1 /> : <Navigate to="/login" />}
            />
            <Route
              path="/playersremote2"
              element={isLoggedIn ? <Playersremote2 /> : <Navigate to="/login" />}
            />
            <Route
              path="/profile"
              element={isLoggedIn ? <Profile /> : <Navigate to="/login" />}
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </I18nextProvider>
  );
};

export default App;
