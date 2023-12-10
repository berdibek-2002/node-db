module.exports = {
  HOST: "localhost", // hostname
  USER: "root", // db mysql username
  PASSWORD: "", // db mysql password
  DB: "testdb", // db mysql dbname
  dialect: "mysql", // db name
  pool: {
    max: 5, // max: maximum number of connection in pool
    min: 0, // min: minimum number of connection in pool
    acquire: 30000, // acquire: maximum time, in milliseconds, that pool will try to get connection before throwing error
    idle: 10000 // idle: maximum time, in milliseconds, that a connection can be idle before being released
  }
};