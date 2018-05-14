const Artist = require('../../models/Artist');

const Music = {
  artist({ artist }) {
    return Artist.findById(artist);
  },
};

module.exports = Music;
