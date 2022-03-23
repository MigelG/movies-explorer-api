const { celebrate, Joi } = require('celebrate');
const { regExpUrl } = require('../utils/constants');

const joiCreateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(regExpUrl),
    trailerLink: Joi.string().required().pattern(regExpUrl),
    thumbnail: Joi.string().required().pattern(regExpUrl),
    movieId: Joi.string().required().hex(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

const joiUpdateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
  }),
});

const joiSignup = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const joiSignin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

module.exports = {
  joiCreateMovie,
  joiUpdateUser,
  joiSignup,
  joiSignin,
};
