const router = require('express').Router();
const { Blogpost, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

// '/dashboard' stem
// GET blogposts by signed-in user's ID

module.exports = router;