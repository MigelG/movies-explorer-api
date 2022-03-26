const regExpUrl = /^https?:\/\/[\w\-.~:/?#@!$&'()*+,;=]+\.[\w\-.~:/?#@!$&'()*+,;=]+$/;

const {
  secretKey = 'super-secret-key',
  dbUrl = 'mongodb://localhost:27017',
  dbName = 'moviesdb',
  PORT = 3000,
} = process.env;

module.exports = {
  regExpUrl,
  dbUrl,
  dbName,
  secretKey,
  PORT,
};
