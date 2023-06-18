const express = require('express');
const init = require('./src/app');
const sequelize = require('./src/sequelize');
const app = express();

const build = async () => {
  const n = await _Note.create({
    content: 'YOOOO',
    important: false,
  });
};

const main = async () => {
  try {
    await sequelize.authenticate();
    // sequelize.models.note.sync({ force: true });

    // const one = await Note.findByPk(1);
    // one.content = 'Achmed Bro';
    // await one.save();
    // console.log(await Note.findAll());

    init(app);
    // sequelize.close();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

main();
