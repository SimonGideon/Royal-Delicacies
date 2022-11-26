/* eslint-disable operator-linebreak */

import fetchLikes from './newLike.js';
import { API_KEY } from './api-key.js';
import popUp from './popup.js';
import { array } from './fetch.js';

const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${API_KEY}/likes/`;
const ProductList = document.querySelector('#meals-content');
const likedMeal = async (id) => {
  const resp = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(() => fetchLikes());
  return resp;
};

ProductList.addEventListener('click', (e) => {
  const element = e.target;
  if (element.classList.contains('fa-heart')) {
    const id =
      element.parentElement.parentElement.parentElement.getAttribute('id');
    likedMeal(id);
    fetchLikes(id);
  } else if (element.getAttribute('id') === 'comment_btn') {
    const id = element.parentElement.getAttribute('id');

    popUp.renderPopup(array, id);
  }
});

export { likedMeal, url };
