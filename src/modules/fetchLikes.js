/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import fetchLikes from './newLike.js';

const ProductList = document.querySelector('#meals-content');
const likedMeal = async (id) => {
  try {
    const resp = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/o8FdGibCYqeybnMSFY1p/likes/',
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
    console.log(err);
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
export default likedMeal;
