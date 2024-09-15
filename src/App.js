import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Basic from './components/basic';
import Login from './components/login'; // Make sure this path is correct
import SignupPage from './components/sign';
import Ask from './components/ask'
import Workerdetails from './components/Workerdetails'
import Hireexpert from './components/hireexpert';
import Fresherexperienced from './components/fresherexperienced';
import Recommendation from './components/recommendation';
import FindJob from './components/findjob';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Basic />} />
        <Route path="/login" element={<Login />} />
        <Route path='/ask' element={< Ask/>} />
        <Route path="/sign" element={<SignupPage />} />
        <Route path="/Workerdetails" element={<Workerdetails />} />
        <Route path='/hireexpert' element={<Hireexpert/>} />
        <Route path='/fresherexperienced' element={<Fresherexperienced/>} />
        <Route path='/recommendation' element={< Recommendation/>} />
        <Route path='/findjob' element={<FindJob/>} />
        
              </Routes>
    </Router>
  );
};
export default App;
