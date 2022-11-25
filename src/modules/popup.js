import { mealList, popup } from './components.js';
import CommentsApi from './comments-api.js';
import Comment from './comment.js';

const popUp = {
  renderPopup: (array, id) => {
    for (let i = 0; i < array.length; i += 1) {
      if (i === id - 1) {
        const popUpDiv = document.createElement('div');
        popUpDiv.className = 'popup-container';

        const imgAndIconDiv = document.createElement('div');
        imgAndIconDiv.className = 'img-and-icon';

        const imgDiv = document.createElement('div');
        imgDiv.className = 'img-container';
        const foodImg = document.createElement('img');
        foodImg.className = 'img';
        foodImg.src = `${array[i].strCategoryThumb}`;
        imgDiv.appendChild(foodImg);
        imgAndIconDiv.appendChild(imgDiv);

        const icon = document.createElement('img');
        icon.className = 'icon';
        imgAndIconDiv.appendChild(icon);

        popUpDiv.appendChild(imgAndIconDiv);

        const foodDetails = document.createElement('div');
        foodDetails.className = 'food-details';

        const foodName = document.createElement('div');
        foodName.className = 'food-name';

        const name = document.createElement('h2');
        name.className = 'name';
        name.innerHTML = `${array[i].strCategory}`;
        foodName.appendChild(name);

        const details = document.createElement('div');
        details.className = 'details';

        details.innerHTML = `${array[i].strCategoryDescription}`;
        foodDetails.appendChild(foodName);
        foodDetails.appendChild(details);
        popUpDiv.appendChild(foodDetails);

        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment-container';

        const comment = document.createElement('h2');
        comment.className = 'comment-text';
        comment.innerHTML = 'Comments';

        const commentContainer = document.createElement('div');
        commentContainer.className = 'comments-container';

        commentDiv.appendChild(comment);
        popUpDiv.appendChild(commentDiv);

        const addCommentDiv = document.createElement('div');
        addCommentDiv.className = 'add-comment';
        const addCommnet = document.createElement('h2');
        addCommnet.innerHTML = 'Add a comment';
        addCommnet.className = 'add-comment-text';
        addCommentDiv.appendChild(addCommnet);

        const inputName = document.createElement('input');
        inputName.className = 'name';
        inputName.setAttribute('type', 'text');
        inputName.setAttribute('placeholder', 'Your name');
        addCommentDiv.appendChild(inputName);

        const inputInsights = document.createElement('textarea');
        inputInsights.className = 'insights';
        inputInsights.setAttribute('type', 'text');
        inputInsights.setAttribute('placeholder', 'Your insights');
        addCommentDiv.appendChild(inputInsights);

        const commentButton = document.createElement('button');
        commentButton.innerHTML = 'Comment';
        commentButton.className = 'btn';
        addCommentDiv.appendChild(commentButton);

        popUpDiv.appendChild(addCommentDiv);
        popup.appendChild(popUpDiv);

        const renderComments = async () => {
          commentContainer.innerHTML = '';
          const comments = new CommentsApi();
          const data = await comments.get(id);
          const sortedDates = data.sort(
            (a, b) => b.creation_date - a.creation_date,
          );
          sortedDates.forEach((element) => {
            const name = document.createElement('h3');
            name.className = 'name';
            name.innerHTML = `👤${element.username}`;
            commentContainer.appendChild(name);
            const commentDetails = document.createElement('span');
            commentDetails.className = 'comment-details';
            const comment = document.createElement('p');
            comment.className = 'comment';
            comment.innerHTML = `🗣${element.comment}`;
            commentDetails.appendChild(comment);
            const commentDate = document.createElement('span');
            commentDate.className = 'date';
            commentDate.innerHTML = `${element.creation_date}`;
            commentDetails.appendChild(commentDate);
            commentContainer.appendChild(commentDetails);
            commentDiv.appendChild(commentContainer);
          });
        };
        renderComments();

        const addComment = async (e) => {
          e.preventDefault();
          const userValue = inputName.value;
          const insightsValue = inputInsights.value;
          const itemId = id;
          const newComment = new Comment(itemId, userValue, insightsValue);
          const commentsApi = new CommentsApi();
          inputName.value = '';
          inputInsights.value = '';
          await commentsApi.post(newComment);
          renderComments();
        };
        commentButton.addEventListener('click', addComment);

        icon.addEventListener('click', () => {
          popUpDiv.classList.add('hide');
          mealList.classList.remove('hide');
        });
      }
    }

    mealList.classList.add('hide');
  },
};

export default popUp;
