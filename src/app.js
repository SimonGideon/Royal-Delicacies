// styles
import './styles.css';
// import fetch_data
import getData from './modules/fetch.js';
// import CommentsApi from './modules/comments-api.js';
// import Comment from './modules/comment.js';

// show meals
getData();

// const comments = new CommentsApi();

// key: Vwyeu7XLijNyk1Y1rhoa;
// const getKey = () => {
//   fetch(
//     'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
//     {
//       method: 'POST',
//       body: JSON.stringify({
//         name: 'Involve-comments',
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     },
//   ).then((response) => response.json());
// };

// getKey();

// const createGame = async () => {
//   const response = await fetch(
//     'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
//     {
//       method: 'POST',
//       body: JSON.stringify({
//         name: 'comments',
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     },
//   );
//   const gameId = await response.json();
//   return gameId;
// };

// createGame();
// export default createGame;
