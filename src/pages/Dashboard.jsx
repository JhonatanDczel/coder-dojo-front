import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import CoursesList from "../components/student/CoursesList";
import StudentRoutes from "../routes/StudentRoutes";

export default function Bashboard(){
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full">
        <Navbar />
        <div className="pt-16">
          <StudentRoutes />
        </div>
        <CoursesList />
      </div>
    </div>
    )
}