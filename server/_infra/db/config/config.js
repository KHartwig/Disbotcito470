const env = process.env.NODE_ENV || 'development';
const config =
{
  "development": {
    "username": "",
    "password": null,
    "database": "cmpt470",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false,
    "logging": false
  },
  "test": {
    "username": "postgres",
    "password": "password",
    "database": "cmpt470",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false,
    "logging": console.log
  },
  "production": {
      "username": "postgres",
      "password": "password",
      "database": "cmpt470",
      "host": "127.0.0.1",
      "dialect": "postgres",
      "operatorsAliases": false,
      "logging": false
  }
}

module.exports = config[env];
