export const fetchData = async (url, setData, setLoading, setError) => {
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
    setData(result);
  } catch (error) {
    setError(error);
  } finally {
    setLoading(false);
  }
};
