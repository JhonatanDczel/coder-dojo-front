import React from 'react';

const tasks = [
  { id: 1, name: 'Tarea 1', status: 'pending' },
  { id: 2, name: 'Tarea 2', status: 'completed' },
  { id: 3, name: 'Tarea 3', status: 'pending' },
];

const TasksList = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Tareas</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={`p-2 mb-2 rounded ${task.status === 'completed' ? 'bg-green-200' : 'bg-red-200'}`}>
            {task.name} - {task.status === 'completed' ? 'Completada' : 'Pendiente'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
