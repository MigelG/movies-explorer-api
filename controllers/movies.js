const Movie = require('../models/movie');

module.exports.getSavedMovies = (req, res, next) => {
  Movie.find({})
    .then((movies) => res.send({ data: movies }))
    .catch(next);
};

module.exports.createMovie = (req, res, next) => {
  const {
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
    .catch(next);
};

module.exports.deleteMovie = (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      if (!movie) {
        res.send({ message: 'Фильм не найден' });
      }
      if (movie.owner !== req.user._id) {
        res.send({ message: 'Доступ запрещен' });
      }
      movie.remove()
        .then(() => res.send({ message: 'Фильм успешно удален' }));
    })
    .catch(next);
};
