'use strict';

module.exports = (req, res, next) => {
  console.log(`Request Method: ${req.method}, Path: ${req.path}`);
  next();
};
