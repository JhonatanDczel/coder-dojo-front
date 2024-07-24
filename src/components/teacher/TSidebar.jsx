import React, { useState } from 'react';
import { FaHome, FaCalendar, FaClipboardList, FaArchive } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const tasks = [
    { id: 1, name: 'Tarea 1', status: 'pendiente' },
    { id: 2, name: 'Tarea 2', status: 'pendiente' },
    { id: 3, name: 'Tarea 3', status: 'pendiente' },
    { id: 4, name: 'Tarea 4', status: 'pendiente' },
    { id: 5, name: 'Tarea 5', status: 'pendiente' },
    { id: 6, name: 'Tarea 6', status: 'pendiente' },
];

const courses = [
    { id: 1, name: 'Estructuras de datos', imgSrc: '/path/to/image1.jpg' },
    { id: 2, name: 'Algoritmos', imgSrc: '/path/to/image2.jpg' },
    { id: 3, name: 'Bases de datos', imgSrc: '/path/to/image3.jpg' },
    { id: 4, name: 'Inteligencia Artificial', imgSrc: '/path/to/image4.jpg' },
    { id: 5, name: 'Sistemas Operativos', imgSrc: '/path/to/image5.jpg' },
];

const Sidebar = () => {
    const [isTasksOpen, setIsTasksOpen] = useState(false);
    const [isCoursesOpen, setIsCoursesOpen] = useState(false);

    const toggleTasks = () => setIsTasksOpen(!isTasksOpen);
    const toggleCourses = () => setIsCoursesOpen(!isCoursesOpen);

    return (
        <div className="w-64 h-full bg-white shadow-lg fixed">
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-8">CoderDojo</h1>
                <ul>
                    <li className="mb-4 flex items-center">
                        <FaHome className="mr-4" />
                        <Link to="/clase/0">Inicio</Link>
                    </li>
                    <li className="mb-4 flex flex-col">
                        <div className="flex items-center cursor-pointer" onClick={toggleCourses}>
                            <FaCalendar className="mr-4" />
                            <span>Cursos inscritos</span>
                        </div>
                        {isCoursesOpen && (
                            <ul className="mt-2 ml-8 list-none">
                                {courses.map(course => (
                                    <li key={course.id} className="text-sm mb-2">
                                        <Link to={`/course/${course.id}`} className="flex items-center">
                                            <img src={course.imgSrc} alt={course.name} className="w-8 h-8 rounded-full mr-2" />
                                            {course.name}
                                        </Link>
                                    </li>
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
                            <ul className="mt-2 ml-8 list-none">
                                {tasks.slice(0, 5).map(task => (
                                    <li key={task.id} className="text-sm">{task.name}</li>
                                ))}
                            </ul>
                        )}
                    </li>
                    <li className="mb-4 flex items-center">
                        <FaArchive className="mr-4" />
                        <span>Clases archivadas</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default TSidebar;
