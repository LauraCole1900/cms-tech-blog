const router = require("express").Router();
const { Blogpost, Comment, User } = require("../models");

// GET all posts
router.get("/", async (req, res) => {
  try {
    const allPosts = await Blogpost.findAll({
      include: [User],
    });

    const posts = allPosts.map(post => post.get({ plain: true }));

    res.render("lander", {
      posts,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one post by ID
router.get("/blog/:id", async (req, res) => {
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
      res.render("post", {
        thisPost,
        loggedIn: req.session.loggedIn
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;