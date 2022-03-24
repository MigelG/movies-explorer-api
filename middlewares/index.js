const auth = require('./auth');
const handleErrors = require('./errors');
const {
  joiCreateMovie,
  joiSignin,
  joiSignup,
  joiUpdateUser,
} = require('./joi');
const { limiter } = require('./limiter');
const { requestLogger, errorLogger } = require('./logger');

module.exports = {
  auth,
  handleErrors,
  joiCreateMovie,
  joiSignup,
  joiUpdateUser,
  joiSignin,
  limiter,
  requestLogger,
  errorLogger,
};
