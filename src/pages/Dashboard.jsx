import { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import CoursesList from "../components/student/CoursesList";
import StudentRoutes from "../routes/StudentRoutes";
import { fetchData } from "../utils/fetchData";

export default function Dashboard({ rol }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(data)
  }, [data]);

  useEffect(() => {
    fetchData('http://localhost:8000/api/', setData, setLoading, setError);
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
