const { Sequelize } = require('sequelize');
const constants = require('../constants');

const sequelize = new Sequelize(constants.DATABASE_URL, {});

const models = [require('./models/note.model')];

models.forEach((model) => {
  model(sequelize);
});

module.exports = sequelize;
