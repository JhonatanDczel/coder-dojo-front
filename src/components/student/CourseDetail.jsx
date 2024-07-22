import { useParams } from 'react-router-dom';

const courses = [
  { id: 1, name: 'Estructuras de datos', description: 'Descripción del curso de Estructuras de datos.' },
  { id: 2, name: 'Algoritmos', description: 'Descripción del curso de Algoritmos.' },
  { id: 3, name: 'Bases de datos', description: 'Descripción del curso de Bases de datos.' },
  { id: 4, name: 'Inteligencia Artificial', description: 'Descripción del curso de Inteligencia Artificial.' },
  { id: 5, name: 'Sistemas Operativos', description: 'Descripción del curso de Sistemas Operativos.' },
];

const CourseDetail = () => {
  // const { id } = useParams();
  // asegurar
  const id = 1;
  const course = courses.find(course => course.id === parseInt(id));

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-4">{course.name}</h2>
      <p className="text-lg mb-4">{course.description}</p>
      <h3 className="text-2xl font-bold mb-4">Tareas</h3>
      <ul className="list-none">
        <li className="p-4 mb-4 rounded-lg bg-red-100">Tarea 1</li>
        <li className="p-4 mb-4 rounded-lg bg-red-100">Tarea 2</li>
      </ul>
    </div>
  );
};

export default CourseDetail;
