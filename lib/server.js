'use strict'; 

const express = require('express');
const cors = require('cors');
const app = express();
const loggerMiddleware = require('./middleWares/logger');
const validatorMiddleware = require('./middleWares/validator');
const errorHandler404 = require('./errorHandlers/404');
const errorHandler500 = require('./errorHandlers/500');

app.use(express.json());
app.use(loggerMiddleware);
app.use(cors());

app.get('/person', validatorMiddleware, (req, res) => {
  const { name } = req.query;
  res.status(200).json({ name });
});

app.use(errorHandler404);
app.use(errorHandler500);

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server is up and running on port ${port}`);
    });
  },
};

// module.exports = app;
