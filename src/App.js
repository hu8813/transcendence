// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Update the import statement
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n"; // Import the i18n configuration

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import PongGame from "./components/Game/PongGame";
import Footer from "./components/Footer";
import Leaderboard from "./components/Leaderboard";
import Chat from "./components/Chat";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false); // Define isLoggedIn state

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div>
          <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />{" "}
          {/* Pass isLoggedIn and setLoggedIn as props */}
          <Routes>
            {" "}
            {/* Change from Switch to Routes */}
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={<Login setLoggedIn={setLoggedIn} />}
            />{" "}
            {/* Pass setLoggedIn as a prop to Login */}
            <Route path="/register" element={<Register />} />
            <Route path="/game" element={<PongGame />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </I18nextProvider>
  );
};

export default App;
