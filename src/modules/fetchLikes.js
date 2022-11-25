/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import fetchLikes from './newLike.js';
import API_KEY from './apiKey.js';

const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${API_KEY}/likes/`;
const ProductList = document.querySelector('#meals-content');
const likedMeal = async (id) => {
  try {
    const resp = await fetch(
      url,
      {
        method: 'POST',
        body: JSON.stringify({
          item_id: id,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    ).then(() => fetchLikes());
  } catch (err) {
    return err;
  }
};
ProductList.addEventListener('click', (e) => {
  const element = e.target;
  if (element.classList.contains('fa-heart')) {
    const id = element.parentElement.parentElement.parentElement.getAttribute('id');
    likedMeal(id);
    fetchLikes(id);
  }
});
export { likedMeal, url };
