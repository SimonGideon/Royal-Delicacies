/* eslint-disable operator-linebreak */
import key from './api-key.js';

const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${key}/comments/`;

class CommentsApi {
  get = (id) => {
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${key}/comments?item_id=${id}`;
    const result = fetch(url, {
      method: 'GET',
    })
      .then((res) => res.json())
      .catch((error) => error);

    return result;
  };

  post = (comment) => {
    const send = fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        item_id: comment.id,
        username: comment.username,
        comment: comment.comment,
      }),
    })
      .then((res) => res.json())
      .catch((error) => error);

    return send;
  };
}

export default CommentsApi;
