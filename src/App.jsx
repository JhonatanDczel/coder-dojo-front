import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../src/pages/HomePage';
import DashBoard from '../src/pages/Dashboard';
import CourseDetail from '../src/pages/CourseDetail';

const App = () => {
  return (
    
      <Routes>
        <Route path="course/:id" element={<CourseDetail />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/clase/0" element={<DashBoard />} />
      </Routes>
     
  )
  // <HomePage />   

};

export default App;
