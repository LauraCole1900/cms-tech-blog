const router = require("express").Router();
const { Blogpost } = require("../models");
const withAuth = require("../utils/auth");

// "/profile" stem
// GET blogposts by signed-in user's ID
router.get("/", withAuth, async (req, res) => {
  try {
  const userPosts = await Blogpost.findAll({
    where: {
      userId: req.session.userId
    }
  });
  const posts = userPosts.map(post => post.get({ plain: true }));
  res.render("userPosts", {
    layout: "profile",
    posts,
    loggedIn: req.session.loggedIn
  });
} catch (err) {
  res.redirect("login");
}
})


router.get("/new_post", withAuth, (req, res) => {
  res.render("blogForm", {
    layout: "profile",
    loggedIn: req.session.loggedIn
  });
});


router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const postData = await Blogpost.findByPk(req.params.id);
    if (postData) {
      const post = postData.get({ plain: true });
      res.render("edit", {
        layout: "profile",
        post,
        loggedIn: req.session.loggedIn
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect("login");
  }
});

module.exports = router;