import Navbar from "../components/common/Navbar";
import Sidebar from "../components/teacher/TSidebar";
import CoursesList from "../components/student/CoursesList";
import StudentRoutes from "../routes/StudentRoutes";

export default function Dashboard(){
  return (
    <div className="flex">
      <TSidebar />
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
