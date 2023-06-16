require('dotenv').config();

const DATABASE_URL =
  process.env.DATABASE_URL ||
  'postgres://postgres:postgres@localhost:5432/postgres';

const PORT = process.env.PORT || 3001;

module.exports = { DATABASE_URL, PORT };
