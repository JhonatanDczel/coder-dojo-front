import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import StudentDashboard from '../pages/StudentDashboard';
import CourseDetail from '../components/student/CourseDetail';

const StudentRoutes = () => {
  return (
    
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/course/:id" element={<CourseDetail />} />
      </Routes>
    
  );
};

export default StudentRoutes;
