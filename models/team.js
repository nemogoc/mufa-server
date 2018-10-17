const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({ //TODO: set required fields
    name: String,
    logoUrl: String,
    rating: Number, //TODO: set this by default
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
