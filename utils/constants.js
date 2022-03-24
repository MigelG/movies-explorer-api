const regExpUrl = /^https?:\/\/[\w\-.~:/?#@!$&'()*+,;=]+\.[\w\-.~:/?#@!$&'()*+,;=]+$/;

const dbUrl = 'mongodb://localhost:27017';
const dbName = 'moviesdb';

const secretKey = 'some-secret-key';

module.exports = {
  regExpUrl,
  dbUrl,
  dbName,
  secretKey,
};
