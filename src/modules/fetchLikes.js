/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const ProductList = document.querySelector('#meals-content');
const likedMeal = async (id) => {
  // eslint-disable-next-line no-useless-catch
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
    );
    const respn = await resp.json();
  } catch (err) {
    throw err;
  }
};
ProductList.addEventListener('click', (e) => {
  const element = e.target;
  if (element.classList.contains('fa-heart')) {
    const id = element.parentElement.parentElement.parentElement.getAttribute('id');
    likedMeal(id);
  }
});
export default likedMeal;
