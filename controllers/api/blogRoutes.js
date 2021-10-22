const { Blogpost, Comment, User } = require('../../models');

const router = require('express').Router();

// '/api/blog' stem

// POST new blogpost
router.post('/', async (req, res) => {
  try {
    const newPost = await Blogpost.create({
      ...req.body,
      user_id: req.session.user_id
    })
    console.log(newPost);
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
})

// UPDATE blogpost by post ID

module.exports = router;