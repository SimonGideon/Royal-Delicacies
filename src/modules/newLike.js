/* eslint-disable no-useless-concat */
import { API_KEY } from './api-key.js';

const ProductList = document.querySelector('#meals-content');

const fetchLikes = async () => {
  let likedArray = [];
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${API_KEY}/likes/`,
  ).then((res) => res.json());
  likedArray = response;
  likedArray.forEach((data) => {
    const likeItem = ProductList.querySelector(`div[id="${data.item_id}"]`);
    const li = likeItem.querySelector('#n-likes');
    if (`${data.likes}` >= 2) {
      li.innerHTML = `${data.likes} ` + 'Likes';
    } else {
      li.innerHTML = `${data.likes} ` + 'Like';
    }
  });
  return response;
};

export default fetchLikes;
