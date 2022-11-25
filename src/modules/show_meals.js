/* eslint-disable no-useless-concat */
import fetchLikes from './newLike.js';

const show = (arr) => {
  fetchLikes();
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
