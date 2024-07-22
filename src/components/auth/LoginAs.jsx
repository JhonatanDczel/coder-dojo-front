import { FaBriefcase } from "react-icons/fa";
import { PiNotebookFill } from "react-icons/pi";
import { useEffect } from "react";


export default function LoginAs( {un, pwd} ) {
  useEffect(()=>{
    console.log(un)
  },
  [un]);
  useEffect(()=>{
    console.log(pwd)
  },
  [pwd])

  return (
    <div className="flex flex-col items-center mt-20">
      <h3 className="text-gray-100 text-lg font-semibold mb-2">Login as:</h3>
      <div className="flex gap-4">
        <button className="flex items-center bg-gray-900 text-white px-5 py-3 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900">
          <FaBriefcase className="mr-2" /> Profesor
        </button>
        <button className="flex items-center bg-gray-900 text-white px-5 py-3 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900">
          <PiNotebookFill className="mr-2" /> Estudiante
        </button>
      </div>
    </div>
  );
}
