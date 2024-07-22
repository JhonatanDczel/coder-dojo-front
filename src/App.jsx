import React from 'react';
import Sidebar from './components/common/Sidebar';
import CoursesList from './components/student/CoursesList';
import './styles/global.css';

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full">
        <CoursesList />
      </div>
    </div>
  );
};

export default App;
