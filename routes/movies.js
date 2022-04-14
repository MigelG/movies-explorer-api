const router = require('express').Router();
const { getSavedMovies, createMovie, deleteMovie } = require('../controllers/movies');
const { joiCreateMovie, joiDeleteMovie } = require('../middlewares/index');

router.get('/', getSavedMovies);
router.post('/', joiCreateMovie, createMovie);
router.delete('/:id', joiDeleteMovie, deleteMovie);

module.exports = router;
