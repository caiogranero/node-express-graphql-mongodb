const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = mongoose.model('User', new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  musics: [{
    type: String, required: false, default: [],
  }],
}, {
  timestamps: true,
}));

module.exports = userModel;
