import React from 'react';
import CoursesList from './components/student/CoursesList';
import TasksList from './components/student/TasksList';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Vista de Clases y Tareas</h1>
      <CoursesList />
      <TasksList />
    </div>
  );
};

export default App;
