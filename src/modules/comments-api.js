const url =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/abc234/comments/';

class CommentsApi {
  get = () => {
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
        comment: comment.comment,
        creation_date: comment.date,
        username: comment.username,
      }),
    })
      .then((res) => res.json())
      .catch((error) => error);

    return send;
  };
}

export default CommentsApi;
