'use strict';

module.exports = (err, req, res, next ) => {
  res.status(404).json({ error: 'Not Found' });
};
