import { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import CoursesList from "../components/student/CoursesList";
import StudentRoutes from "../routes/StudentRoutes";
import { fetchData } from "../utils/fetchData";
import PopUp from "../components/common/PopUp";

export default function Dashboard({ rol }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    if(data && Array.isArray(data) && data.length > 0) {
      setIsLogin(true)
    }
  }, [data]);

  useEffect(() => {
    fetchData('http://localhost:8000/api/', setData, setLoading, setError);
  }, []);

  return (
    <div className="flex">
      { 
        !isLogin && <PopUp close={true}/>
      }
      <Sidebar data={data} rol={rol}/>
      <div className="ml-64 w-full">
        <Navbar data={data} rol={rol}/>
        <div className="pt-16">
          {/* <StudentRoutes data={data}/> */}
        </div>
        <CoursesList data={data} rol={rol}/>
      </div>
    </div>
  );
}
