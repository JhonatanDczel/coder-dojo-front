import React from 'react';
import { FaHome, FaCalendar, FaBook, FaClipboardList, FaArchive, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-white shadow-lg fixed">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-8">CoderDojo</h1>
        <ul>
          <li className="mb-4 flex items-center">
            <FaHome className="mr-4" />
            <span>Inicio</span>
          </li>
          <li className="mb-4 flex items-center">
            <FaCalendar className="mr-4" />
            <span>Calendar</span>
          </li>
          <li className="mb-4 flex items-center">
            <FaBook className="mr-4" />
            <span>Cursos en los que te has inscrito</span>
          </li>
          <li className="mb-4 flex items-center">
            <FaClipboardList className="mr-4" />
            <span>Tareas pendientes</span>
          </li>
          <li className="mb-4 flex items-center">
            <FaArchive className="mr-4" />
            <span>Clases archivadas</span>
          </li>
          <li className="mb-4 flex items-center">
            <FaCog className="mr-4" />
            <span>Ajustes</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
