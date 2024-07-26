import { useState, useEffect } from 'react';

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const csrfToken = document.cookie.split('; ')
          .find(row => row.startsWith('csrftoken'))
          ?.split('=')[1];

        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken
          },
          credentials: 'include'
        });

        if (!response.ok) {
          throw new Error('Error al obtener los datos de la API');
        }

        const result = await response.json();
        console.log('result')
        console.log(result)

        setData(result);

      } catch (error) {
        console.log(error)
        setError(error);
      } finally {
        console.log('filanny')
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Dependencia en la URL para volver a ejecutar el efecto si cambia

  return { data, loading, error };
};

export default useFetchData;
