/* eslint-disable consistent-return */
/* eslint-disable no-useless-concat */
/* eslint-disable import/no-unresolved */
import API_KEY from './apiKey.js';

const ProductList = document.querySelector('#meals-content');

const fetchLikes = async () => {
  let likedArray = [];
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${API_KEY}/likes/`,
  ).then((res) => res.json());
  likedArray = response;
  likedArray.forEach((data) => {
    const likeItem = ProductList.querySelector(`div[id="${data.item_id}"]`);
    // console.log(likedArray);
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
