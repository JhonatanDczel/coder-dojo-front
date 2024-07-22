import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../src/pages/HomePage';
import DashBoard from '../src/pages/Dashboard'

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/clase" element={<DashBoard />} />
      </Routes>
     
  )
  // <HomePage />   

};

export default App;
