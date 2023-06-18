const baseRouter = require('./routers/base.router');
const notesRouter = require('./routers/notes.router');

const routes = (app) => {
  app.use('/api', baseRouter);
  app.use('/api/notes', notesRouter);
};

module.exports = routes;
