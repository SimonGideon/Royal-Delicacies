import popUp from './popup.js';

const show = (arr) => {
  const mainContent = document.getElementById('meals-content');
  arr.forEach((element) => {
    const individuals = document.createElement('div');
    individuals.className = 'individuals';

    const img = document.createElement('img');
    img.id = 'img';
    img.src = `${element.strCategoryThumb}`;
    individuals.appendChild(img);

    const articles = document.createElement('div');
    articles.id = 'articles';

    const mealName = document.createElement('div');
    mealName.className = 'meal-name';
    mealName.innerHTML = `${element.strCategory} ${element.idCategory}`;

    articles.appendChild(mealName);

    const like = document.createElement('div');
    like.className = 'like';
    like.innerHTML = `<i class="fa-solid fa-heart liked"></i>
    <span>5 likes</span>`;
    articles.appendChild(like);

    individuals.appendChild(articles);

    const commentButton = document.createElement('button');
    commentButton.id = `${element.idCategory}`;
    commentButton.innerHTML = 'Comments';
    const id = commentButton.getAttribute('id');
    commentButton.onclick = () => {
      popUp.renderPopup(arr, id);
    };

    individuals.appendChild(commentButton);

    const reservationsBtn = document.createElement('button');
    reservationsBtn.id = 'Reservations';
    reservationsBtn.innerHTML = 'Reservations';
    individuals.appendChild(reservationsBtn);

    mainContent.appendChild(individuals);
  });
};

export default show;
