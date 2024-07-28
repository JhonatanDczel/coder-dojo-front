import { FaBriefcase } from "react-icons/fa";
import { PiNotebookFill } from "react-icons/pi";
import { useEffect, useState } from "react";
import { fetchData } from "../../utils/fetchData";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

const csrftoken = getCookie("csrftoken");

export default function LoginAs({ un, psw }) {
  const navigate = useNavigate();
  useEffect(() => {
    console.log(psw);
  }, [psw]);

  useEffect(() => {
    console.log(un);
  }, [un]);

  async function loginUser(e, userType) {
    console.log(userType);
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/loginUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrftoken,
        },
        body: JSON.stringify({
          username: un,
          password: psw,
          rol: userType,
        }),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        console.log("response ok", data);
        console.log(userType);
        navigate(userType === "Docente" ? "/clase/1" : "/clase/0");
      } else {
        console.error("Error al iniciar sesion (1):", data.detail);
      }
    } catch (error) {
      console.error("Error al iniciar sesión (2):", error);
    }
  }

  return (
    <div className="flex flex-col items-center mt-20">
      <h3 className="text-gray-100 text-lg font-semibold mb-2">Login as:</h3>
      <div className="flex gap-4">
        <button
          className="flex items-center bg-gray-900 text-white px-5 py-3 rounded-md hover:bg-gray-700 
                          focus:outline-none focus:ring-2 focus:ring-gray-900"
          onClick={(e) => loginUser(e, "Docente")}
        >
          <FaBriefcase className="mr-2" /> Profesor
        </button>
        <button
          className="flex items-center bg-gray-900 text-white px-5 py-3 rounded-md 
        hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900"
          onClick={(e) => loginUser(e, "Estudiante")}
        >
          <PiNotebookFill className="mr-2" /> Estudiante
        </button>
      </div>
    </div>
  );
}
