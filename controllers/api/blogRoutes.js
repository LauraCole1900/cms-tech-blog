const router = require("express").Router();
const { Blogpost, Comment, User } = require("../../models");
const withAuth = require("../../utils/auth");

// '/api/blog' stem

// POST new blogpost
router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Blogpost.create({
      ...req.body,
      userId: req.session.userId
    })
    console.log(newPost);
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
})

// UPDATE blogpost by post ID
router.put("/:id", async (req, res) => {
  try {
    const updateData = await Blogpost.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if (updateData) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;