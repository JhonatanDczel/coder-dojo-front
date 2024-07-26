import React, {useEffect, useState } from 'react';
import { FaHome, FaCalendar, FaClipboardList, FaArchive } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Sidebar = ( {data}) => {
    const [isTasksOpen, setIsTasksOpen] = useState(false);
    const [isCoursesOpen, setIsCoursesOpen] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [courses , setCourses] = useState([]);

  useEffect(() => {
    console.log('esto es el parametro ', data);
    if (data) {
      setTasks(data[0].entregas);
      setCourses(data);
      console.log("esto es el curso numero 1" , courses)
    } else {
      console.log("data is not in the expected format", data);
    }
  }, [data]);
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
                                            {/* <Link to={`/course/${course.id}`} className="flex items-center"> */}
                                                <img src={"https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg"} alt={course.name} className="w-8 h-8 rounded-full mr-2" />
                                                {course.name}
                                            {/* </Link> */}
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
                                {tasks.map(task => (
                                    <li key={task.id} className="text-sm">{task.estudiante.name + ": " + task.asignacion.title}</li>
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
