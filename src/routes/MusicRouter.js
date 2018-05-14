const baseUrl = '/api/music';
const HttpStatusCode = require('../utils/HttpStatusCode');
const MusicController = require('../controller/MusicController');

module.exports = (app) => {
  const musicController = new MusicController();

  app.post(baseUrl, (req, res) => {
    const musicPromise = musicController.CreateMusic(req.body);

    musicPromise.then((music) => {
      res.status(HttpStatusCode.Success.get()).send({ data: music.id });
    }, (error) => {
      res.status(HttpStatusCode.InternalServerError.get()).send({ error: error.message });
    });
  });
};
