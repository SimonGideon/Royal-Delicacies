// /* @jest-environment jsdom */
// /* eslint-disable no-unused-vars */
// import fetchMock from 'jest-fetch-mock';
// import { url } from '../src/modules/fetchLikes.js';
// import array from '../src/modules/fetch.js';

// fetchMock.enableMocks();

// describe('loaded Items', () => {
//   test('Complete loaded', async () => {
//     function callback(error, data) {
//       if (error) {
//         throw error;
//       }
//       expect(data).toBe(array);
//     }
//   });
// });
// // describe('Check Requests', () =>{
// //   beforeEach(() => {
// //     fetch.resetMocks();
// //   });
// //   test('works', async () => {
// //     fetch.mockResponseOnce(JSON.stringify({ item_id: '20', likes: 32 }));
// //     const result = await request.fetchLikes;
// //     console.log(result);
// //     // expect(result).toEqual(undefined);
// //     expect(fetch).toHaveBeenCalledTimes(0);
// //   });
// // });
