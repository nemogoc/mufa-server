const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: String,
    logoUrl: String,
    rating: Number,
    wins: Number,
    losses: Number,
    jerseyColor: String,
    bio: String
    // teams: [Number], //[mongoose.Schema.Types.ObjectId],
    // locations: [Number]
  },
  {
    timestamps: true
  }
);

const Team = mongoose.model('Team', teamSchema);
module.exports = Team;
