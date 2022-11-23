import CommentsApi from './comments-api.js';
import Api from './food-details-api.js';

const api = new Api();
const clickToPopUp = document.querySelectorAll('.comment');

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

    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment-container';

    const comment = document.createElement('h2');
    comment.className = 'comment-text';

    const comments = new CommentsApi();
    const sortedDates = comments.result.reverse((a, b) => a.date - b.date);
    sortedDates.forEach((element) => {
      const commentDetails = document.createElement('span');
      commentDetails.className = 'comment-details';
      commentDetails.innerHTML = `${element.date} ${element.username}: ${element.comment}`;
      commentDiv.appendChild(commentDetails);
    });
    commentDiv.appendChild(comment);

    const addCommentDiv = document.createElement('div');
    addCommentDiv.className = 'add-comment';
    const addCommnet = document.createElement('h2');
    addCommnet.className = 'add-comment-text';

    const inputName = document.createElement('input');
    inputName.className = 'name';
    inputName.setAttribute('type', 'text');
    inputName.setAttribute('placeholder', 'Your name');

    const inputInsights = document.createElement('input');
    inputInsights.className = 'insights';
    inputInsights.setAttribute('type', 'text');
    inputInsights.setAttribute('placeholder', 'Your insights');

    const commentButton = document.createElement('button');
    commentButton.className = 'btn';
    addCommentDiv.appendChild(commentButton);
    addCommentDiv.appendChild(inputInsights);
    addCommentDiv.appendChild(inputName);
    addCommentDiv.appendChild(addCommnet);

    popUpDiv.appendChild(addCommentDiv);
    popUpDiv.appendChild(commentDiv);
    popUpDiv.appendChild(foodDetails);
    popUpDiv.appendChild(foodDetails);
    popUpDiv.appendChild(imgAndIconDiv);
    mealList.appendChild(popUpDiv);
  });
});
