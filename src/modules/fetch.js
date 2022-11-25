import show from './show_meals.js';
// import renderPopup from './popup.js';
/* eslint-disable camelcase */
// hold our api in a constant
let array = [];
const getData = async () => {
  // try to catch some errors
  try {
    const foodcount = document.getElementById('countfood');
    // storing response
    const api_url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    const response = await fetch(api_url);
    // convert data into json
    const data = await response.json();
    array = data.categories;
    show(array);
    // renderPopup(array);
    foodcount.innerHTML = array.length;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

export default getData;
