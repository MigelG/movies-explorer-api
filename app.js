const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const auth = require('./middlewares/auth');
const handleErrors = require('./middlewares/errors');
const {
  login, createUser,
} = require('./controllers/users');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const NotFoundError = require('./errors/NotFoundError');
const { joiSignup, joiSignin } = require('./middlewares/joi');

const { PORT = 3000 } = process.env;

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/bitfilmsdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected!');
  })
  .catch((err) => {
    console.log(`ERROR: ${err}`);
  });

app.use(requestLogger);

app.post('/signin', joiSignin, login);

app.post('/signup', joiSignup, createUser);

app.use(auth);

app.use('/users', require('./routes/users'));
app.use('/movies', require('./routes/movies'));

app.use((req, res, next) => {
  next(new NotFoundError('Маршрут не найден'));
});

app.use(errorLogger);

// Обработчик ошибок celebrate
app.use(errors());

// Централизованный обработчик ошибок
app.use(handleErrors);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
