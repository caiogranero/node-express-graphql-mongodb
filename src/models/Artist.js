const mongoose = require('mongoose');

const { Schema } = mongoose;

const artistModel = mongoose.model('Artist', new Schema({
  name: { type: String, required: true },
}, {
  timestamps: true,
}));

module.exports = artistModel;
