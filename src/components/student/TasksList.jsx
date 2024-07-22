// src/components/student/TasksList.jsx
import React from 'react';

const tasks = [
  { id: 1, name: 'Tarea 1', status: 'pendiente' },
  { id: 2, name: 'Tarea 2', status: 'realizada' },
  { id: 3, name: 'Tarea 3', status: 'pendiente' },
  { id: 4, name: 'Tarea 4', status: 'pendiente' },
  { id: 5, name: 'Tarea 5', status: 'realizada' },
  { id: 6, name: 'Tarea 6', status: 'pendiente' },
];

const TasksList = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Tareas</h2>
      <ul className="list-none">
        {tasks.map(task => (
          <li key={task.id} className={`p-4 mb-4 rounded-lg ${task.status === 'pendiente' ? 'bg-red-100' : 'bg-green-100'}`}>
            <span className="text-xl">{task.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
