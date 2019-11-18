module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/droom.db3'
    },
    useNullAsDefault: true,
    migrations : {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      filename: './data/droom.db3'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations : {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
  }

};
