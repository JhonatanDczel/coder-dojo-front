export default function Input({ type = 'text', label = 'default', onChange }) {
  // todo: hacer el boton para permitir ver la contraseña
  return (
    <div className="flex flex-col pr-8 pl-8 mb-5">

      <label className="text-lg font-semibold mb-2 text-white">{label}</label>
      
      <input type={type} className="bg-gray-950 bg-opacity-25 backdrop-blur py-3 px-6 text-white rounded-3xl" onChange={onChange}/>
    </div>
  );
}
