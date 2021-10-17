const router = require('express').Router();

const userRoutes = require('./userRoutes.js');
const blogRoutes = require('./blogRoutes');
const commentRoutes = require('./commentRoutes');

// '/api' stem
router.use('/user', userRoutes);
router.use('/post', blogRoutes);
router.use('/comment', commentRoutes);

module.exports = router;