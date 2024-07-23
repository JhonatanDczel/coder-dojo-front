export default function Logo({ path }) {
  // todo: asignar tamaño segun lo que se le pase como argumento, usar clases de tailwind
  return <>
    <div className="flex justify-center items-center">
      <img src={path} alt="logo" className="h-20" />
    </div>
  </>
}
