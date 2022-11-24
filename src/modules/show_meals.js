/* eslint-disable no-useless-concat */
const show = (arr) => {
  const ProductList = document.querySelector('#meals-content');
  const fetchLikes = async () => {
    const response = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/o8FdGibCYqeybnMSFY1p/likes/',
    ).then((res) => res.json());
    response.forEach((data) => {
      const likeItem = ProductList.querySelector(`div[id="${data.item_id}"]`);
      const li = likeItem.querySelector('#n-likes');
      if (`${data.likes}` >= 2) { li.innerHTML = `${data.likes} ` + 'Likes'; } else {
        li.innerHTML = `${data.likes} ` + 'Like';
      }
    });
  };

  let html = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const meal of arr) {
    html += `
    <div id="${meal.idCategory}" class="individuals">
          <img src="${meal.strCategoryThumb}" alt="foodpad">
          <div id="articles">
            ${meal.strCategory}
            <div class="like">
              <i class="fa-solid fa-heart liked"></i>
              <span id="n-likes">0 </span>
            </div>
          </div>
          <button id="comment">Comments</button>
          <button id="Reservations">Reservations</button>
     </div>
        `;
  }

  const mainContent = document.getElementById('meals-content');
  mainContent.innerHTML = html;
  fetchLikes();
};
export default show;
