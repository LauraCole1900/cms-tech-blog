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
    console.log({ posts });

    res.render('lander', { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one post by ID
router.get('/blog/:id', async (req, res) => {
  try {
    const singlePost = await Blogpost.findByPk(req.params.id, {
      include: [User,
        {
          model: Comment,
          include: User
        }]
    })
    if (singlePost) {
      const thisPost = singlePost.get({ plain: true });
      console.log(thisPost);
      res.render('post', { thisPost });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;