
import { FaUserCircle, FaQuestionCircle, FaCog } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import axios from 'axios';



const Navbar = () => {
  const [username, setUsername] = useState('');     

  useEffect(() => {
    axios.get('/api/user')
      .then(response => { 
        //setUsername(response.user.username);
        console.log(response);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

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
          <span>{username}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
