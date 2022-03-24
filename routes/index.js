const express = require('express');
const auth = require('../middlewares/auth');
const { joiSignin, joiSignup } = require('../middlewares/joi');
const { login, createUser } = require('../controllers/users');
const { NotFoundError } = require('../errors/index');

const router = express();

router.post('/signin', joiSignin, login);

router.post('/signup', joiSignup, createUser);

router.use(auth);

router.use('/users', require('./users'));
router.use('/movies', require('./movies'));

router.use((req, res, next) => {
  next(new NotFoundError('Маршрут не найден'));
});

module.exports = { router };
