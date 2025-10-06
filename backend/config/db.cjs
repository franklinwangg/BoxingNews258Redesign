const { Sequelize } = require("sequelize");
require("dotenv").config();

const host = process.env.HOST;
const database = process.env.DATABASE_NAME;
const username = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;
const port = process.env.PORT || 5432; // default Postgres port

const sequelize = new Sequelize(database, username, password, {
  host,
  port,
  dialect: "postgres",
});

module.exports = sequelize;
