const router = require("express").Router();
const { User } = require("../../models");

// "/api/user" stem

// POST new user
router.post("/", async (req, res) => {
  try {
    const user = await User.create({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password
    });
    req.session.save(() => {
      req.session.userId = user.id;
      req.session.userName = user.userName;
      req.session.loggedIn = true;

      res.status(200).json(user);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});


// LOGIN existing user
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email
      }
    });
    if (!user) {
      res.status(400).json({ message: "User not found" });
      return;
    }

    const valid = user.checkPassword(req.body.password);

    if(!valid) {
      res.status(400).json({ message: "User not found" });
      return;
    }
    req.session.save(() => {
      req.session.userId = user.id;
      req.session.userName = user.userName;
      req.session.loggedIn = true;

      res.json({ user, message: "Login successful!" });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// LOGOUT user
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


module.exports = router;