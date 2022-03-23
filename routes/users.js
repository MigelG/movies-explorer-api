const router = require('express').Router();
const { getUser, updateUser } = require('../controllers/users');
const { joiUpdateUser } = require('../middlewares/joi');

router.get('/me', getUser);
router.patch('/me', joiUpdateUser, updateUser);

module.exports = router;
