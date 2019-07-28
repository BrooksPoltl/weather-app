
// Update with your config settings.
require('dotenv').config()
localPbConnection = {
  host: 'localhost',
  database: 'Database',
  user: process.env.DB_USERS,
  password: process.env.DB_PASS
}
const pg = require('pg');

const prodDbConnection = process.env.DATABASE_URL || localPbConnection


module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './migrations',
    },
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './test.sqlite3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './migrations',
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './migrations',
    },
  }
};
