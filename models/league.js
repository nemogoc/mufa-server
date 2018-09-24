const mongoose = require('mongoose');
//Team = require("./team")

const leagueSchema = new mongoose.Schema({
    year: Number,
    season: String,
    weekday: String,
    teams: [Number], //[mongoose.Schema.Types.ObjectId],
    locations: [Number]
    },
    {
        timestamps: true
    }
);

const League = mongoose.model('League', leagueSchema);
module.exports = League;
