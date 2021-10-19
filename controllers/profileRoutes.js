const router = require('express').Router();
const { Blogpost, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

// '/profile' stem
// GET blogposts by signed-in user's ID
router.get('/', withAuth, async (req, res) => {
  console.log(req.session);
  try {
  const userPosts = await Blogpost.findAll({
    where: {
      user_id: req.session.user_id
    }
  });
  const posts = userPosts.map(post => post.get({ plain: true }));
  res.render('user-profile', {
    layout: 'profile',
    posts
  });
} catch (err) {
  res.redirect('login');
}
})

module.exports = router;