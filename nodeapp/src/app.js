const express = require('express');
const routes = require('./routes/index');
const constants = require('./constants');

const init = (app) => {
  app.use(express.json());

  routes(app);

  const { PORT } = constants;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

module.exports = init;
