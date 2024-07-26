import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StudentDashboard from '../pages/StudentDashboard';
import CourseDetail from '../pages/CourseDetail';


const StudentRoutes = ({data}) => {
    return (
        <Routes>
            <Route path="/dashboard" element={<StudentDashboard />} />
            <Route path="/clase/0/course/:id" element={<CourseDetail />} />
        </Routes>
    );
};

export default StudentRoutes;
