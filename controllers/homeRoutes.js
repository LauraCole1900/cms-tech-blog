const router = require('express').Router();
const { Blogpost, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

// GET all posts
router.get('/', async (req, res) => {
  try {
    const allPosts = await Blogpost.findAll({
      include: [User],
    });

    const posts = allPosts.map(post => post.get({ plain: true }));

    res.render('homepage', { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;