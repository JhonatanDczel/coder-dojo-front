import { FaCode } from "react-icons/fa";

export default function DojoTypeButton({onClick}) {
  return (
    <button onClick={onClick} className="flex items-center rounded-2xl overflow-hidden bg-gray-800 text-white shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
      <div className="w-2/3 p-4 flex flex-col">
        <p className="text-lg font-semibold">
          ¿Calentamiento? <br /> Ir a DojoType <FaCode className="inline text-blue-400" />
        </p>
      </div>

      <div className="w-1/3 bg-gray-900 text-white flex flex-col items-center justify-center p-4 hover:bg-inherit">
        <h3 className="text-xl font-bold">press</h3>
        <span className="text-4xl font-bold">K</span>
      </div>
    </button>
  );
}
