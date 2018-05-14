const Artist = require('../Artist');

const ArtistFactory = {
  Create(name) {
    return new Artist({ name });
  },
};

module.exports = ArtistFactory;
