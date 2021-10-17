const router = require('express').Router();
const { Blogpost, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

// GET all posts
router.get('/', async (req, res) => {
  try {
    const allPosts = await Blogpost.findAll({
      include: [{ model: User }],
    });

    const posts = allPosts.map(post => post.get({ plain: true }));
    console.log({ posts });

    res.render('lander', { posts });
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