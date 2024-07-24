  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define la función que hará la llamada para obtener los datos
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:8000/api/');
        if (!response.ok) {
          throw new Error('Error al obtener los datos de la API');
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    // Llama a la función para obtener los datos
    fetchData();
  }, []); // El array vacío [] asegura que el efecto solo se ejecute una vez, cuando el componente se monta

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.nombre}</div>
      ))}
    </div>
  );
