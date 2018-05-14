const Music = require('../../models/Music');

const User = {
  musics({ musics }) {
    return musics.map(id => Music.findById(id));
  },
};

module.exports = User;
