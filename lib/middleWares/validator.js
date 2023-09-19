'use strict';

module.exports = (req, res, next) => {
  const { name } = req.query;
  if (!name) {
    next('Name is missing in the query string');
  } else {
    next();
  }
};
