import { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import CoursesList from "../components/student/CoursesList";
import StudentRoutes from "../routes/StudentRoutes";

export default function Dashboard({ rol }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(data)
  }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const csrfToken = document.cookie.split('; ')
          .find(row => row.startsWith('csrftoken'))
          ?.split('=')[1];

        const response = await fetch('http://localhost:8000/api/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken
          },
          credentials: 'include'
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
  }, []);

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
