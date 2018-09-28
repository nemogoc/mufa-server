const db = require("../models");

exports.getLeagues = async function(req, res, next) {
    try {
        let leagues = await db.League.find().sort({createdAt: "desc"});
        return res.status(200).json(leagues);
    }
    catch(err) {
        return next(err);
    }
}

exports.getLeague = async function(req, res, next) {
    try {
        let league = await db.League.findById(req.params.leagueId);
        return res.status(200).json(league);
    }
    catch(err) {
        return next(err);
    }
}

exports.createLeague = async function(req, res, next) {
    const {year, season, weekday} = req.body;
    try {
        let league = await db.League.create({
            year,
            season,
            weekday,
            teams: [],
            locations: []
        });

        return res.status(200).json(league);
    }
    catch(err) {
        return next(err);
    }
}

//TODO: implement below
exports.deleteLeague = async function(req, res, next) {}
