import { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import CoursesList from "../components/student/CoursesList";
import StudentRoutes from "../routes/StudentRoutes";



export default function Dashboard({rol}){

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define la función que hará la llamada para obtener los datos
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:8000/api/');
        if (!response.ok) {
          throw new Error('Error al obtener los datos de la API');
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    // Llama a la función para obtener los datos
    fetchData();
  }, []); // El array vacío [] asegura que el efecto solo se ejecute una vez, cuando el componente se monta



  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full">
        <Navbar un={data.docente.name}/>
        <div className="pt-16">
          <StudentRoutes />
        </div>
        <CoursesList />
      </div>
    </div>
    )
}
