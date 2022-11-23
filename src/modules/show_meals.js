const show = (arr) => {
  let html = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const meal of arr) {
    html += `
    <div class="individuals">
          <img src="${meal.strCategoryThumb}" alt="foodpad">
          <div id="articles">
            ${meal.strCategory} ${meal.idCategory}
            <div class="like">
              <i class="fa-solid fa-heart liked"></i>
              <span>5 likes</span>
            </div>
          </div>
          <button id="comment">Comments</button>
          <button id="Reservations">Reservations</button>
     </div>
        `;
  }

  const mainContent = document.getElementById('meals-content');
  mainContent.innerHTML = html;
};
export default show;
