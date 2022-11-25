const commentCounter = require('./__MOCK__/comments-counter.js');

test('Total number of comments must be 3', () => {
  // Arrang
  const comments = [
    {
      id: '1',
      comment: 'I like this food',
      date: '2022/05/11',
    },
    {
      id: '2',
      comment: 'Looks Yumy',
      date: '2022/05/12',
    },
    {
      id: '3',
      comment: 'Wow looks testy, I will order it right now',
      date: '2022/05/12',
    },
  ];

  // Act
  const totalNumberOfComments = commentCounter(comments);

  // Assert
  expect(totalNumberOfComments).toBe(3);
});
