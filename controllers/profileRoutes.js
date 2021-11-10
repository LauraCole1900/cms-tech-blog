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
    posts
  });
} catch (err) {
  res.redirect("login");
}
})


router.get("/new_post", (req, res) => {
  res.render("blogForm", {
    layout: "profile",
  });
});


router.get("/edit/:id", async (req, res) => {
  try {
    const postData = await Blogpost.findByPk(req.params.id);
    if (postData) {
      const post = postData.get({ plain: true });
      res.render("edit", {
        layout: "profile",
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect("login");
  }
});

module.exports = router;