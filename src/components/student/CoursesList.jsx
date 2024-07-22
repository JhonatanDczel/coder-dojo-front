import React from 'react';

const courses = [
  { id: 1, name: 'Curso 1', tasksPending: 4, taskCompleted: 5 },
];

const CoursesList = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Clases</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <div key={course.id} className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-xl font-semibold">{course.name}</h3>
            <div className="mt-2">
              <p>Tareas pendientes: {course.tasksPending}</p>
              <p>Tareas realizadas: {course.tasksCompleted}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesList;
