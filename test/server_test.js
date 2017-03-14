/* eslint-env mocha */

import http from 'http';
import assert from 'assert';
import '../server';

describe('Checking if server is running', () => {
  it('Should return 200', (done) => {
    http.get('http://127.0.0.1:4500/', (res) => {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});
