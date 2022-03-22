const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    match: /^https?:\/\/[\w\-.~:/?#@!$&'()*+,;=]+\.[\w\-.~:/?#@!$&'()*+,;=]+$/,
  },
  trailerLink: {
    type: String,
    required: true,
    match: /^https?:\/\/[\w\-.~:/?#@!$&'()*+,;=]+\.[\w\-.~:/?#@!$&'()*+,;=]+$/,
  },
  thumbnail: {
    type: String,
    required: true,
    match: /^https?:\/\/[\w\-.~:/?#@!$&'()*+,;=]+\.[\w\-.~:/?#@!$&'()*+,;=]+$/,
  },
  owner: {
    type: String,
    required: true,
  },
  movieId: {
    type: String,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('movie', movieSchema);