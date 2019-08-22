const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    username: String,
    password: String, //TODO: store this correctly
    firstName: String,
    lastName: String,
    zipCode: Number,
    sex: String,
    email: String,
    dateOfBirth: String //TODO: Date?
    // teams: [Number], //[mongoose.Schema.Types.ObjectId],
    // locations: [Number]
  },
  {
    timestamps: true
  }
);

const Player = mongoose.model('Player', playerSchema);
module.exports = Player;
