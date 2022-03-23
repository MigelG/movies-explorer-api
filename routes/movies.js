const router = require('express').Router();
const { getSavedMovies, createMovie, deleteMovie } = require('../controllers/movies');
const { joiCreateMovie } = require('../middlewares/joi');

router.get('/', getSavedMovies);
router.post('/', joiCreateMovie, createMovie);
router.delete('/:id', deleteMovie);

module.exports = router;
