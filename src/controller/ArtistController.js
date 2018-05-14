const ArtistFactory = require('../models/factories/ArtistFactory');

class ArtistController {
  constructor() {
    this.artistFactory = ArtistFactory;
  }

  CreateArtist({ name }) {
    const artist = this.artistFactory.Create(name);

    return artist.save()
      .then(document => Promise.resolve(document))
      .catch(error => Promise.reject(error));
  }
}

module.exports = ArtistController;
