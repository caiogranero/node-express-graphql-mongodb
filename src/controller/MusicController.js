const MusicFactory = require('../models/factories/MusicFactory');

class MusicController {
  constructor() {
    this.musicFactory = MusicFactory;
  }

  CreateMusic({ name, time, artist }) {
    const music = this.musicFactory.Create(name, time, artist);

    return music.save()
      .then(document => Promise.resolve(document))
      .catch(error => Promise.reject(error));
  }
}

module.exports = MusicController;
