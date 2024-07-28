export const postData = async ({
  url,
  body,
  setData,
  setLoading,
  setError,
}) => {
  setLoading(true);
  try {
    const csrfToken = getCookie("csrftoken");

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      },
      credentials: "same-origin",
      body: JSON.stringify(body),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(
        `Error al enviar los datos a la API: ${response.statusText} ${data.detail}`
      );
    }

    const result = await response.json();
    setData(result);
  } catch (error) {
    setError(error);
  } finally {
    setLoading(false);
  }
};

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

export const simplePost = async (url, body, handleOK) => {
  try {
    const csrfToken = getCookie("csrftoken");

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      },
      credentials: "same-origin",
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        `Error al enviar los datos a la API: ${response.statusText} ${data.detail}`
      );
    } else {
      handleOK();
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
