import React from 'react';
import Sidebar from './components/common/Sidebar';
import CoursesList from './components/student/CoursesList';
import TasksList from './components/student/TasksList';
import Navbar from './components/common/Navbar';

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full">
        <Navbar />
        <div className="pt-16"> {/* Ajusta el padding-top según la altura de tu Navbar */}
          <CoursesList />
          <TasksList />
        </div>
      </div>
    </div>
  );
};

export default App;
