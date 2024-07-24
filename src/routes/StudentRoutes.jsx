import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StudentDashboard from '../pages/StudentDashboard';
import CourseDetail from '../pages/CourseDetail';

const StudentRoutes = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<StudentDashboard />} />
            <Route path="/course/:id" element={<CourseDetail />} />
        </Routes>
    );
};

export default StudentRoutes;
