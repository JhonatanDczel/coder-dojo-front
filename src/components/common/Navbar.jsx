import {
  FaUserCircle,
  FaQuestionCircle,
  FaCog,
  FaToriiGate,
} from "react-icons/fa";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { simplePost } from "../../utils/postData";
import { Navigate } from "react-router-dom";

const Navbar = ({ data }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    if (data && Array.isArray(data) && data.length > 0 && data[0].docente) {
      console.log(data[0].docente.name);
      setName(data[0].docente.name);
    } else {
      console.log("data is not in the expected format", data);
    }
  }, [data]);

  function handleLogout() {
    simplePost("http://localhost:8000/api/logout_user", {}, () => {
      window.location.href = "/";
    })
  }

  return (
    <div className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center fixed top-0 left-0 z-10">
      <div className="text-2xl font-bold">CoderDojo</div>
      <div className="flex items-center">
        <button onClick={handleLogout} className="mr-4 text-[1.55rem]">
          <FaToriiGate />
        </button>
        <button className="mr-4">
          <FaCog size={24} />
        </button>
        <div className="flex items-center">
          <FaUserCircle size={24} className="mr-2" />
          <span>{name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
