const internalServerError = require('./500.js');

describe('Testing our 500 error handler', () => {
  test('Should return a 500 error response', () => {
    const err = 'Internal Server Error';
    const req = {};
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(() => res),
    };
    const next = jest.fn();

    internalServerError(err, req, res, next);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Internal Server Error' });
  });
});
