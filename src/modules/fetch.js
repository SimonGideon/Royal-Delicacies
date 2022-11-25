import show from './show_meals.js';
/* eslint-disable camelcase */
// eslint-disable-next-line import/no-mutable-exports
let array = [];

const menu = () => {
  const foodcount = document.getElementById('countfood');
  const counted = document.querySelector('#meals-content').childElementCount;
  foodcount.innerHTML = counted;
};
const getData = async () => {
  // try to catch some errors
  try {
    // storing response
    const api_url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    const response = await fetch(api_url);
    // convert data into json
    const data = await response.json();
    array = data.categories;
    show(array);
    menu();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

export { getData, array, menu };
