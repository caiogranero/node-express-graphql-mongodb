const baseUrl = '/api/artist';
const HttpStatusCode = require('../utils/HttpStatusCode');
const ArtistController = require('../controller/ArtistController');

module.exports = (app) => {
  const artistController = new ArtistController();

  app.post(baseUrl, (req, res) => {
    const artistPromise = artistController.CreateArtist(req.body);

    artistPromise.then((artist) => {
      res.status(HttpStatusCode.Success.get()).send({ data: artist.id });
    }, (error) => {
      res.status(HttpStatusCode.InternalServerError.get()).send({ error: error.message });
    });
  });
};
