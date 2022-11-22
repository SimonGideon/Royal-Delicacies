const show = (arr) => {
  let html = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const meal of arr) {
    html += `
    <div class="individuals">
          <img src="${meal.strCategoryThumb}" alt="foodpad">
          <div>
            ${meal.strCategory} ${meal.idCategory}
            <div>
              <i class="fa-solid fa-heart like"></i>
              5 likes
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
