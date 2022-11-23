const key = 1;
const url = `www.themealdb.com/api/json/v1/${key}/categories.php`;

class Api {
  get = () => {
    const result = fetch(url, {
      method: 'GET',
    })
      .then((res) => res.json())
      .catch((error) => error);

    return result;
  };
}

export default Api;
