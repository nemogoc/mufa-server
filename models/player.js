const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    username: String,
    password: String, //TODO: fix this
    firstName: String,
    lastName: String,
    zipCode: Number,
    sex: String,
    email: String,
    dob: Number, //TODO: is there a Date?
    teams: [Number], //[mongoose.Schema.Types.ObjectId],
    league: [Number]
  },
    {
        timestamps: true
    }
);

const Player = mongoose.model('Player', playerSchema);
module.exports = Player;
