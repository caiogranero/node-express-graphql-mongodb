const User = require('../../models/User');
const Artist = require('../../models/Artist');
const Music = require('../../models/Music');

const Query = {
  users() {
    return User.find().exec();
  },
  user(parent, { id }) {
    return User.findById(id).exec();
  },
  music(parent, { id }) {
    return Music.findById(id).exec();
  },
  musics() {
    return Music.find().exec();
  },
  artist(parent, { id }) {
    return Artist.findById(id).exec();
  },
  artists() {
    return Artist.find().exec();
  },
};

module.exports = Query;
