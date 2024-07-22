import React, { useState } from 'react';
import { FaHome, FaCalendar, FaBook, FaClipboardList, FaArchive } from 'react-icons/fa';

const tasks = [
  { id: 1, name: 'Tarea 1', status: 'pendiente' },
  { id: 2, name: 'Tarea 2', status: 'pendiente' },
  { id: 3, name: 'Tarea 3', status: 'pendiente' },
  { id: 4, name: 'Tarea 4', status: 'pendiente' },
  { id: 5, name: 'Tarea 5', status: 'pendiente' },
  { id: 6, name: 'Tarea 6', status: 'pendiente' },
];
const courses = [
  { id: 1, name: 'Estructuras de datos' },
  { id: 2, name: 'Algoritmos' },
  { id: 3, name: 'Bases de datos' },
  { id: 4, name: 'Inteligencia Artificial' },
  { id: 5, name: 'Sistemas Operativos' },
];

const Sidebar = () => {
  const [isTasksOpen, setIsTasksOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  const toggleTasks = () => {
    setIsTasksOpen(!isTasksOpen);
  };

  const toggleCourses = () => {
    setIsCoursesOpen(!isCoursesOpen);
  };

  return (
    <div className="w-64 h-full bg-white shadow-lg fixed">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-8">CoderDojo</h1>
        <ul>
          <li className="mb-4 flex items-center">
            <FaHome className="mr-4" />
            <span>Inicio</span>
          </li>
          <li className="mb-4 flex flex-col">
            <div className="flex items-center cursor-pointer" onClick={toggleCourses}>
              <FaCalendar className="mr-4" />
              <span>Cursos inscritos</span>
            </div>
            {isCoursesOpen && (
              <ul className="mt-2 ml-8 list-disc">
                {courses.slice(0, 4).map(course => (
                  <li key={course.id} className="text-sm">{course.name}</li>
                ))}
              </ul>
            )}
          </li>
          <li className="mb-4 flex flex-col">
            <div className="flex items-center cursor-pointer" onClick={toggleTasks}>
              <FaClipboardList className="mr-4" />
              <span>Tareas pendientes</span>
            </div>
            {isTasksOpen && (
              <ul className="mt-2 ml-8 list-disc">
                {tasks.slice(0, 5).map(task => (
                  <li key={task.id} className="text-sm">{task.name}</li>
                ))}
              </ul>
            )}
          </li>
       </ul>
      </div>
    </div>
  );
};

export default Sidebar;
