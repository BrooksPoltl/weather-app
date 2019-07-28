// Update with your config settings.
require('dotenv').config();

const dbConnection = process.env.DATABASE_URL ;

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  production: {
    client: 'pg',
    connection: dbConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations',
    },
    useNullAsDefault: true
  }

};