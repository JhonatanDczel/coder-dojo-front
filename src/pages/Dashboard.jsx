import { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import CoursesList from "../components/student/CoursesList";
import StudentRoutes from "../routes/StudentRoutes";

export default function Dashboard({ rol }) {
  const [data, setData] = useState(null); // Cambiado de [] a null para manejar mejor el estado de carga
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(data)
  }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener el token CSRF desde las cookies
        const csrfToken = document.cookie.split('; ')
          .find(row => row.startsWith('csrftoken'))
          ?.split('=')[1];

        const response = await fetch('http://localhost:8000/api/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken
          },
          credentials: 'include' // Incluir las credenciales (cookies) en la solicitud
        });

        if (!response.ok) {
          throw new Error('Error al obtener los datos de la API');
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // El array vacío [] asegura que el efecto solo se ejecute una vez, cuando el componente se monta

  // Verifica que data esté definido y tenga elementos
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full">
        <Navbar data={data} />
        <div className="pt-16">
          <StudentRoutes />
        </div>
        <CoursesList />
      </div>
    </div>
  );
}
