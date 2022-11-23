import Api from './food-details-api.js';

const api = new Api();
const clickToPopUp = document.querySelectorAll('.meal');

clickToPopUp.forEach((meal) => {
  meal.addEventListener('click', () => {
    const popUpDiv = document.createElement('div');
    popUpDiv.className = 'popup-container';

    const imgAndIconDiv = document.createElement('div');
    imgAndIconDiv.className = 'img-and-icon';

    const img = document.createElement('img');
    img.className = 'meal-img';

    const icon = document.createElement('img');
    icon.className = 'icon';

    imgAndIconDiv.appendChild(icon);
    imgAndIconDiv.appendChild(img);

    const foodDetails = document.createElement('div');
    foodDetails.className = 'food-details';

    const foodName = document.createElement('div');
    foodName.className = 'food-name';

    const name = document.createElement('h2');
    name.className = 'name';
    foodName.appendChild(name);

    const details = document.createElement('div');
    details.className = 'details';

    const strCategoryDiv = document.createElement('div');
    strCategoryDiv.className = 'str-category-container';

    const strCategory = document.createComment('span');
    strCategory.className = 'str-category';
    strCategory.innerHtml = `strCategory: ${api.get.strCategory}`;
    strCategoryDiv.appendChild(strCategory);

    const strCategoryThumb = document.createComment('span');
    strCategoryThumb.className = 'str-category-thumb';
    strCategoryThumb.innerHtml = `strCategoryThumb: ${api.get.strCategoryThumb}`;
    strCategoryDiv.appendChild(strCategoryThumb);

    const strCategoryDesctiption = document.createComment('span');
    strCategoryDesctiption.className = 'str-category-description';
    strCategoryDesctiption.innerHtml = `strCategoryDescription: ${api.get.strCategoryDesctiption}`;
    strCategoryDiv.appendChild(strCategoryDesctiption);

    foodDetails.appendChild(strCategoryDiv);
    foodDetails.appendChild(details);
    foodDetails.appendChild(foodName);

    popUpDiv.appendChild(foodDetails);
    popUpDiv.appendChild(foodDetails);
    popUpDiv.appendChild(imgAndIconDiv);
    mealList.appendChild(popUpDiv);
  });
});
