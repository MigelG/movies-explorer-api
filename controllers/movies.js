const Movie = require('../models/movie');

module.exports.getSavedMovies = (req, res) => {
  Movie.find({})
    .then((movies) => res.send({ data: movies }))
    .catch((err) => res.send(err));
};

module.exports.createMovie = (req, res) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image, trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;
  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
    owner: req.user._id,
  })
    .then((movie) => res.send({ data: movie }))
    .catch((err) => res.send(err));
};

module.exports.deleteMovie = (req, res) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      if (!movie) {
        res.send({ message: 'Фильм не найден' });
      }
      if (JSON.stringify(movie.owner).slice(1, -1) !== req.user._id) {
        res.send({ message: 'Доступ запрещен' });
      }
      return movie.remove();
    })
    .catch((err) => res.send(err));
};
