const router = require('express').Router();
const { Blogpost, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

// '/profile' stem
// GET blogposts by signed-in user's ID
// TODO: reincorporate withAuth & user_id: req.session.user_id
router.get('/', async (req, res) => {
  try {
  const userPosts = await Blogpost.findAll({
    where: {
      user_id: 3
    }
  });
  const posts = userPosts.map(post => post.get({ plain: true }));
  res.render('userPosts', {
    layout: 'profile',
    posts
  });
} catch (err) {
  res.redirect('login');
}
})


router.get('/new', (req, res) => {
  res.render('blog', {
    layout: 'profile',
  });
});


router.get('/edit/:id', async (req, res) => {
  try {
    const postData = await Blogpost.findByPk(req.params.id);
    if (postData) {
      const post = postData.get({ plain: true });
      res.render('edit', {
        layout: 'profile',
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;