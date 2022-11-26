/* eslint-disable no-restricted-syntax */
const show = (arr) => {
  let html = '';

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
            <button class='${meal.idCategory}' id='comment_btn'>Comments</button>
            <button id="Reservations">Reservations</button>
       </div>
          `;
  }

  const mainContent = document.getElementById('meals-content');
  mainContent.innerHTML = html;
};

export default show;
