import show from './show_meals.js';
// eslint-disable-next-line import/no-mutable-exports
let array = [];

const menu = () => {
  const foodcount = document.getElementById('countfood');
  const counted = document.querySelector('#meals-content').childElementCount;
  foodcount.innerHTML = counted;
};
const getData = async () => {
  const apiUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  const response = await fetch(apiUrl);

  const data = await response.json();
  array = data.categories;
  show(array);
  menu();
};

export { getData, array, menu };
