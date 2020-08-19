const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: { type: String, unique: true },
    username: String,
    password: String
  },
  {
    collection: 'Users',
    read: 'nearest'
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;