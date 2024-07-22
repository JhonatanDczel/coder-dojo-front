export default function Input({ type = 'text', id = "default", label = 'default' }) {
  // todo: hacer el boton para permitir ver la contraseña
  return (
    <div>
      <input id={id} type={type} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
