const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: {type: String},
  profilePictureURL: {type: String},
}, {collection: 'users'});

const User = mongoose.model('user', userSchema, 'users');

module.exports = User;
