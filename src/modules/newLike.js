const ProductList = document.querySelector('#meals-content');
const fetchLikes = async () => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/o8FdGibCYqeybnMSFY1p/likes/',
  ).then((res) => res.json());
  response.forEach((data) => {
    const likeItem = ProductList.querySelector(`div[id="${data.item_id}"]`);
    const li = likeItem.querySelector('#n-likes');
    li.innerHTML = `${data.likes}`;
  });
};
export default fetchLikes;
