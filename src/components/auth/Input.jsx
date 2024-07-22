export default function Input({ type = 'text', id = "default", label = 'default', onChange }) {
  // todo: hacer el boton para permitir ver la contraseña
  return (
    <div className="flex flex-col pr-8 pl-8 mb-5">

      <label className="text-lg font-semibold mb-2 text-white" htmlFor={id}>{label}</label>
      
      <input id={id} type={type} className="bg-gray-950 bg-opacity-25 backdrop-blur py-3 px-6 text-white rounded-3xl" onChange={onChange}/>
    </div>
  );
}
