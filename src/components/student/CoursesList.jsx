// src/components/student/CoursesList.jsx
import { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCamera, FaFolder } from 'react-icons/fa';

// const courses = [
//     { id: 1, name: 'Estructuras de datos', teacher: 'Edson Luque', imgSrc: '/path/to/image1.jpg' },
//     { id: 2, name: 'Algoritmos', teacher: 'Edson Luque', imgSrc: '/path/to/image2.jpg' },
//     { id: 3, name: 'Bases de datos', teacher: 'Edson Luque', imgSrc: '/path/to/image3.jpg' },
// ];

const CoursesList = ({data , rol}) => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        console.log('esto es el parametro ', data);
        if (data) {
          setCourses(data)
        } else {
          console.log("data is not in the expected format", data);
        }
    }, [data]);
    // const [nombreCurso, setNombreCurso] = useState(""); la imagen
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold mb-6">Clases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                    <div key={course.id} className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
                        <div className="flex items-center mb-4">
                            <img src={"https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg"} alt={course.name} className="w-16 h-16 rounded-full mr-4" />
                            <div>
                                <h3 className="text-2xl font-semibold">{course.name}</h3>
                                <p className="text-lg text-gray-600">{course.docente.nombre}</p>
                            </div>
                        </div>
                        <div className="mt-4 flex justify-between items-center">

                        {/* bad code */}
                        
                            <Link to={`/course/${course.id}`} className="bg-blue-500 text-white px-4 py-2 rounded">Ver curso</Link>
                        {/* bad code */}
                            <div className="flex items-center">
                                <button className="mr-4">
                                    <FaCamera />
                                </button>
                                <button>
                                    <FaFolder />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoursesList;
