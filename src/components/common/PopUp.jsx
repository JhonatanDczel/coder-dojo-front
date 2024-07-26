import { IoCloseCircle } from "react-icons/io5";

export default function PopUp({ close, handleClosePopup, element, className}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={"bg-gray-900 bg-opacity-80 backdrop-blur-md p-4 rounded-3xl shadow-lg w-[90vw] shadow-xl h-5/6 relative " + className}>
        {element}
        {close && (
          <button
            className="absolute top-1 right-1 text-4xl text-red-500 p-2 rounded"
            onClick={handleClosePopup}
          >
            <IoCloseCircle />
          </button>
        )}
      </div>
    </div>
  );
}
