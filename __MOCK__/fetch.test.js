/* @jest-environment jsdom */
/* eslint-disable no-unused-vars */
import fetchMock from 'jest-fetch-mock';
import { array, menu } from '../src/modules/fetch.js';

fetchMock.enableMocks();

describe('loaded Items', () => {
  it('Complete loaded', async () => {
    function callback(error, data) {
      if (error) {
        throw error;
      }
      expect(data).toBe(array);
    }
  });
});
