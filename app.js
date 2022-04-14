const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');
const { errors } = require('celebrate');
const {
  handleErrors,
  limiter,
  requestLogger,
  errorLogger,
} = require('./middlewares/index');
const { router } = require('./routes');
const { dbUrl, dbName, PORT } = require('./utils/constants');

const app = express();

app.use(cors());

mongoose.connect(`${dbUrl}/${dbName}`, {
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
app.use(limiter);
app.use(helmet());
app.use(express.json());

app.use(router);

app.use(errorLogger);

// Обработчик ошибок celebrate
app.use(errors());

// Централизованный обработчик ошибок
app.use(handleErrors);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
