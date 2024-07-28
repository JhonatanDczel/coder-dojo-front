import React from 'react';

// const courses = [
//   { id: 1, name: 'Estructuras de datos', imgSrc: '/path/to/image1.jpg', description: 'Detalles del curso de Estructuras de datos...' },
//   { id: 2, name: 'Algoritmos', imgSrc: '/path/to/image2.jpg', description: 'Detalles del curso de Algoritmos...' },
//   { id: 3, name: 'Bases de datos', imgSrc: '/path/to/image3.jpg', description: 'Detalles del curso de Bases de datos...' },
//   { id: 4, name: 'Inteligencia Artificial', imgSrc: '/path/to/image4.jpg', description: 'Detalles del curso de Inteligencia Artificial...' },
//   { id: 5, name: 'Sistemas Operativos', imgSrc: '/path/to/image5.jpg', description: 'Detalles del curso de Sistemas Operativos...' },
// ];

const CourseInfo = ({ data }) => {
  
  const [course, setCourse] = useState(null);

  useEffect(() => {
      if(data){
        setCourse(data[0])
      }
  } , [data])

  if (!course) {
    return <div className="text-center mt-10 text-red-500">Curso no encontrado</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img className="h-48 w-full object-cover md:h-full md:w-48" src={"https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg"} alt={course.name} />
        </div>
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-4">{course.name}</h1>
            {
              publicaciones.map((publicacion)=>(
                  <div className='pb-0.5'>
                    <p className= 'mt-2 text-gray-500'>{publicacion.content}</p>
                  </div>
                )
              )
            }
          <div className="mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Ver Tareas</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded">Ver Calificaciones</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
