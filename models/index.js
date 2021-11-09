// import models
const User = require('./User');
const Blogpost = require('./Blogpost');
const Comment = require('./Comment');

// Blogpost belongsTo User
Blogpost.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

// Users have many Blogposts
User.hasMany(Blogpost, {
  foreignKey: 'userId'
});

// Comment belongTo User
Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

// Users have many Comments
User.hasMany(Comment, {
  foreignKey: 'userId'
});

// Comment belongTo Blogpost
Comment.belongsTo(Blogpost, {
  foreignKey: 'blogpostId',
  onDelete: 'CASCADE'
});

// Blogposts have many Comments
Blogpost.hasMany(Comment, {
  foreignKey: 'blogpostId'
});

module.exports = {
  User,
  Blogpost,
  Comment
};