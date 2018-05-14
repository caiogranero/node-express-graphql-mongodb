const Music = require('../Music');

const MusicFactory = {
  Create(name, time, artist) {
    return new Music({ name, time, artist });
  },
};

module.exports = MusicFactory;
