import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Channels from './pages/Channels';
import DirectMessages from './pages/DirectMessages';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/channels" element={<Channels />} />
        <Route path="/messages" element={<DirectMessages />} />
        <Route path="/" element={<Channels />} />
      </Routes>
    </Router>
  );
}

export default App;
