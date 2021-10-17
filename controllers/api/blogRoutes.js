const { Blogpost, Comment, User } = require('../../models');

const router = require('express').Router();

// '/api/blog' stem

// GET blogpost by post ID
// router.get('/:id', async (req, res) => {
//   try {
//     const singlePost = await Blogpost.findByPk(req.params.id,
//       // {
//       //   include: [{ model: Comment }, { model: User }]
//       // }
//     )
//     console.log(singlePost);
//     singlePost ? res.status(200).json(categoryData) : res.status(404).json({ message: `No category found with that ID` });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// })

// UPDATE blogpost by post ID

module.exports = router;