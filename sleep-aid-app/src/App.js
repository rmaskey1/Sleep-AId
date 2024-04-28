import React from 'react';
import MainPage from './components/MainPage.js'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage.js';
import SignUpPage from './components/SignUpPage.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
            <Routes>
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/home" element={<MainPage />} />
            </Routes>
       </div>
    </Router>
  );
}

export default App;