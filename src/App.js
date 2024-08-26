import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Basic from './components/basic';
import Login from './components/login'; // Make sure this path is correct
import SignupPage from './components/signup';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Basic />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
};
export default App;
