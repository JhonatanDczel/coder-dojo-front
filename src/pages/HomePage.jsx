import { useState, useEffect } from "react";
import { LoginForm } from "../components/auth/Login";
import Logo from "../components/common/Logo";
import DojoTypeButton from "../components/home/DojoTypeButton";
import ThemeSwitcher from "../components/home/ThemeButton";
import DojoType from "./DojoType";
import { IoCloseCircle } from "react-icons/io5";

function HomePage() {
  const [isDojoTypeOpen, setIsDojoTypeOpen] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "k" || event.key === "K") {
        setIsDojoTypeOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleDojoTypeButtonClick = () => {
    setIsDojoTypeOpen(true);
  };

  const handleClosePopup = () => {
    setIsDojoTypeOpen(false);
  };

  return (
    <div className="bg-dojo-day dark:bg-dojo-night bg-cover bg-center h-screen w-screen flex">
      <div className="relative flex-grow">
        <div className="absolute top-5 left-5 p-4">
          <Logo path="/src/assets/logos/IEEE-CS-UNSA.png" />
        </div>
        <div className="absolute top-5 right-5 p-4">
          <Logo path="/src/assets/logos/CoderDojo.png" />
        </div>
        <div className="relative flex flex-col items-center justify-center min-h-screen ">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative bg-white bg-opacity-70 backdrop-blur-md p-8 rounded-lg shadow-lg text-center max-w-lg">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                ¡Bienvenido a CoderDojo!
              </h1>
              <p className="text-lg text-gray-700">
                Estamos emocionados de tenerte con nosotros. Prepárate para
                aprender y crecer en el mundo de la programación. ¡Vamos a hacer
                grandes cosas juntos!
              </p>
            </div>
          </div>
          <div className="absolute bottom-5 left-5 p-4">
            <DojoTypeButton onClick={handleDojoTypeButtonClick} />
          </div>
          <div className="absolute bottom-5 right-5 p-4">
            <ThemeSwitcher />
          </div>
        </div>
      </div>

      <LoginForm />

      {isDojoTypeOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-900 bg-opacity-80 backdrop-blur-md p-4 rounded-3xl shadow-lg w-[90vw] h-5/6 relative">
            <DojoType />
            <button
              className="absolute top-1 right-1 text-4xl text-red-500 p-2 rounded"
              onClick={handleClosePopup}
            >
              <IoCloseCircle />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
