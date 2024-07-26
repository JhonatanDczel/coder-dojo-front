export const postData = async ({ url, body, setData, setLoading, setError }) => {
  setLoading(true);
  try {
    const csrfToken = document.cookie.split('; ')
      .find(row => row.startsWith('csrftoken'))
      ?.split('=')[1];

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrfToken
      },
      credentials: 'include',
      body: JSON.stringify(body)
    });
    if (!response.ok) {
      throw new Error(`Error al enviar los datos a la API: ${response.statusText}`);
    }

    const result = await response.json();
    setData(result);
  } catch (error) {
    setError(error);
  } finally {
    setLoading(false);
  }
};

export const simplePost = async (url, body, handleOK) => {
  try {
    const csrfToken = document.cookie.split('; ')
      .find(row => row.startsWith('csrftoken'))
      ?.split('=')[1];

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrfToken
      },
      credentials: 'include',
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      throw new Error(`Error al enviar los datos a la API: ${response.statusText}`);
    }

    handleOK();

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
