// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update the import statement
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Import the i18n configuration

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import PongGame from './components/Game/PongGame';
import Footer from './components/Footer';
import Leaderboard from './components/Leaderboard';
import Chat from './components/Chat';

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div>
          <Navbar />
          <Routes> {/* Change from Switch to Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
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
