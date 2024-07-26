import { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import CoursesList from "../components/student/CoursesList";
import StudentRoutes from "../routes/StudentRoutes";
import { fetchData } from "../utils/fetchData";
import PopUp from "../components/common/PopUp";
import { toast, Toaster } from "sonner";

export default function Dashboard({ rol }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    if(isLogin)
      toast.success("Bienvenido a CoderDojo");
    else 
      toast.error("No estas logueado aun");
    console.log('desde dashboard')
  }, [isLogin])
  

  useEffect(() => {
    if(data && Array.isArray(data) && data.length > 0) {
      setIsLogin(true)
    }
  }, [data]);

  useEffect(() => {
    fetchData('http://localhost:8000/api/', setData, setLoading, setError);
  }, []);

  function handleLogin () {
    window.location.href = '/'
  }

const notLogued = (
  <div className=" h-full flex flex-col items-center justify-center p-4 rounded-lg shadow-lg text-center gap-9">
    <p className="mb-4 text-gray-300 font-bold text-2xl">
      No has iniciado sesión, por favor inicia sesión para continuar
    </p>
    <button 
      onClick={handleLogin} 
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200"
    >
      Ir a login
    </button>
  </div>
);


  return (
    <div className="flex">
      {
        !isLogin && <PopUp className={"h-[300px] w-[600px]"} close={false} element={notLogued}/>
      }
      <Sidebar />
      <div className="ml-64 w-full">
        <Navbar data={data} />
        <div className="pt-16">
          <StudentRoutes />
        </div>
        <CoursesList />
      </div>
      <Toaster />
    </div>
  );
}
