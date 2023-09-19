const notFoundError = require('./404.js');

describe('Testing our 404 error handler', () => {
  test('Should return a 404 error response', () => {
    const err = 'Not Found';
    const req = {};
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(() => res),
    };
    const next = jest.fn();

    notFoundError(err, req, res, next);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: 'Not Found' });
  });
});
