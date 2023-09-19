const validator = require('./validator');

describe('Testing the validator module', () => {
  it('Should call next() when the name property is present in the query string', () => {
    const req = {
      query: {
        name: 'John',
      },
    };
    const res = {};
    const next = jest.fn();

    validator(req, res, next);

    expect(next).toHaveBeenCalled();
  });

  it('Should call next() with an error when the name property is missing in the query string', () => {
    const req = {
      query: {},
    };
    const res = {};
    const next = jest.fn();

    validator(req, res, next);

    expect(next).toHaveBeenCalledWith('Name is missing in the query string');
  });
});
