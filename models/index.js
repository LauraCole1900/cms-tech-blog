// import models
const User = require('./User');
const Blogpost = require('./Blogpost');
const Comment = require('./Comment');

// Blogpost belongsTo User
Blogpost.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Users have many Blogposts
User.hasMany(Blogpost, {
  foreignKey: 'user_id'
});

// Comment belongTo User
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Users have many Comments
User.hasMany(Comment, {
  foreignKey: 'user_id'
});

// Comment belongTo Blogpost
Comment.belongsTo(Blogpost, {
  foreignKey: 'blogpost_id',
  onDelete: 'CASCADE'
});

// Blogposts have many Comments
Blogpost.hasMany(Comment, {
  foreignKey: 'blogpost_id'
});

module.exports = {
  User,
  Blogpost,
  Comment
};