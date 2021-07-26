const router = require('express').Router();

const userRoutes = require('./user-routes');

//Url...
router.use('/users', userRoutes);

module.exports = router;