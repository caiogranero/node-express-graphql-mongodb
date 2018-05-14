const mongoose = require('mongoose');

const { Schema } = mongoose;

const musicModel = mongoose.model('Music', new Schema({
  name: { type: String, required: true },
  time: { type: String, required: true },
  artist: { type: String, required: true },
}, {
  timestamps: true,
}));

module.exports = musicModel;
