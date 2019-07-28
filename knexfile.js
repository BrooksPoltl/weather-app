
localPbConnection = {
  host: 'localhost',
  database: 'Database',
  user: process.env.DB_USERS,
  password: process.env.DB_PASS
}

const prodDbConnection = process.env.DATABASE_URL || localPbConnection

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  production: {
    client: 'pg',
    connection: prodDbConnection,
    migrations: {
      directory: './migrations',
    },
    useNullAsDefault: true
  }

};
