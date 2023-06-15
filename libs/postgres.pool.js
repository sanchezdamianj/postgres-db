const { Pool } = require('pg');

const {
  config: { dbHost, dbName, dbUser, dbPassword, dbPort },
} = require('../config/config');

const USER = encodeURIComponent(dbUser);
const PASSWORD = encodeURIComponent(dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`;

const pool = new Pool({ connectionString: URI });

module.exports = pool;
