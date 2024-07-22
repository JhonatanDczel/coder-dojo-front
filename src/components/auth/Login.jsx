import Input from "./Input";
import LoginAs from "./LoginAs";

export function LoginForm({ className }) {
  return (
    <div
      className={`flex flex-col justify-center w-[470px] p-6 bg-gray-950 bg-opacity-25 backdrop-blur shadow-lg rounded-l-xl ${className}`}
    >
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-4 text-white mb-2">
          Inicia sesión
        </h2>
        <p className="font-semibold text-gray-200 mb-20">
          Inicia sesión con tus credenciales
        </p>
      </div>
      <form action="">
        <Input type="text" label="Username" />
        <Input type="password" label="Contraseña" />
        <LoginAs />
      </form>
        <button type="submit" className="self-center mt-10 text-white bg-slate-600 py-3 px-3 font-semibold text-lg w-32 rounded-xl"> Ingresar </button>
    </div>
  );
}
