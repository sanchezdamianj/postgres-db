const { Sequelize } = require('sequelize');

const { setupModels } = require('../db/models/index');

const {
  config: { dbUser, dbPassword },
} = require('../config/config');

const USER = encodeURIComponent(dbUser);
const PASSWORD = encodeURIComponent(dbPassword);
// const URI = `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`;

const sequelize = new Sequelize('my_store', USER, PASSWORD, {
  dialect: 'postgres',
  logging: true,
});

setupModels(sequelize);
// sequelize.sync();
// ; just in dev environment

module.exports = sequelize;
