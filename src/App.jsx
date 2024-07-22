import React from 'react';
import Sidebar from './components/common/Sidebar';
import CoursesList from './components/student/CoursesList';
import TasksList from './components/student/TasksList';

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full">
        <CoursesList />
        <TasksList />
      </div>
    </div>
  );
};

export default App;
