// This code generates a new api key
const getKey = () => {
  fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
    {
      method: 'POST',
      body: JSON.stringify({
        name: 'Involve-likes',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  ).then((response) => response.json());
};

export default getKey;
