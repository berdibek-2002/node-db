require('dotenv').config(); 

module.exports = {
  HOST: process.env.DB_HOST, // hostname
  USER: process.env.DB_USER, // db mysql username
  PASSWORD: process.env.DB_PASSWORD, // db mysql password
  DB: process.env.DB_DBNAME, // db mysql dbname
  dialect: "mysql", // db name
  pool: {
    max: 5, // max: maximum number of connection in pool
    min: 0, // min: minimum number of connection in pool
    acquire: 30000, // acquire: maximum time, in milliseconds, that pool will try to get connection before throwing error
    idle: 10000 // idle: maximum time, in milliseconds, that a connection can be idle before being released
  }
};