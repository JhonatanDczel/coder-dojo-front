import { FaBriefcase } from "react-icons/fa";
import { PiNotebookFill } from "react-icons/pi";
import { useEffect } from "react";
import axios from 'axios';

// Configuración para CSRF
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://localhost:8000"
});

// Función para obtener el token CSRF de las cookies
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // ¿Esta cookie comienza con el nombre que queremos?
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

const csrftoken = getCookie('csrftoken');

export default function LoginAs({ un, psw }) {
  useEffect(() => {
    console.log(psw);
  }, [psw]);
  
  useEffect(() => {
    console.log(un);
  }, [un]);
  
  function loginUserStudent(e) {
    e.preventDefault();
    client.post(
      "api/loginUser",
      {
        username: un,
        password: psw
      },
      {
        headers: {
          'X-CSRFToken': csrftoken
        }
      }
    ).then(function (res) {
      window.location.href = '/clase/0';
    }).catch(function (error) {
      console.error('Error al iniciar sesión:', error);
      window.location.href = '/clase/0';
    });
  }

  function loginUserTeacher(e) {
    e.preventDefault();
    client.post(
      "api/loginUser",
      {
        username: un,
        password: psw
      },
      {
        headers: {
          'X-CSRFToken': csrftoken
        }
      }
    ).then(function (res) {
      window.location.href = '/clase/1';
    }).catch(function (error) {
      console.error('Error al iniciar sesión:', error);
      window.location.href = '/clase/1';
    });
  }

  return (
    <div className="flex flex-col items-center mt-20">
      <h3 className="text-gray-100 text-lg font-semibold mb-2">Login as:</h3>
      <div className="flex gap-4">
        <button className="flex items-center bg-gray-900 text-white px-5 py-3 rounded-md hover:bg-gray-700 
                          f ocus:outline-none focus:ring-2 focus:ring-gray-900" onClick={loginUserTeacher}>
          <FaBriefcase className="mr-2" /> Profesor
        </button>
        <button className="flex items-center bg-gray-900 text-white px-5 py-3 rounded-md 
        hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900" onClick={loginUserStudent}>
          <PiNotebookFill className="mr-2" /> Estudiante
        </button>
      </div>
    </div>
  );
}
