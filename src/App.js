import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Basic from './components/basic';
import Login from './components/login'; // Make sure this path is correct
import SignupPage from './components/sign';
import Ask from './components/ask'
import Workerdetails from './components/Workerdetails'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Basic />} />
        <Route path="/login" element={<Login />} />
        <Route path='/ask' element={< Ask/>} />
        <Route path="/sign" element={<SignupPage />} />
        <Route path="/Workerdetails" element={<Workerdetails />} />
      </Routes>
    </Router>
  );
};
export default App;
