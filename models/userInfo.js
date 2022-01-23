const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userInfoSchema = new Schema({
  _id: {type: String},
  userName: {type: String},
  neighborType: {type: String},
  neighborDate: {type: String},
  userBlurb: {type: String},
}, {collection: 'user_info'});

const UserInfo = mongoose.model('userInfo', userInfoSchema, 'user_info');

module.exports = UserInfo;
