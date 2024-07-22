import React from 'react';
import { FaUserCircle, FaQuestionCircle, FaCog } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center fixed top-0 left-0 z-10">
      <div className="text-2xl font-bold">CoderDojo</div>
      <div className="flex items-center">
        <button className="mr-4">
          <FaQuestionCircle size={24} />
        </button>
        <button className="mr-4">
          <FaCog size={24} />
        </button>
        <div className="flex items-center">
          <FaUserCircle size={24} className="mr-2" />
          <span>USERNAME</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
