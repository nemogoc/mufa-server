const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    username: String,
    password: String, //TODO: store this correctly
    firstName: String,
    lastName: String,
    zipCode: Number,
    sex: String,
    email: String,
    dateOfBirth: Date //YYYY-MM-DD
  },
  {
    timestamps: true
  }
);

const Player = mongoose.model('Player', playerSchema);
module.exports = Player;
