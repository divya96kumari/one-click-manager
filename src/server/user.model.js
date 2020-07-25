const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    username: String,
    Password: String
  },
  {
    collection: 'Users'
  }
);

const User = mongoose.model('user', userSchema);

module.exports = User;