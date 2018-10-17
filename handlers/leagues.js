const db = require("../models");

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

        return res.status(201).json(league);
    }
    catch(err) {
        return next(err);
    }
};

exports.getLeagues = async function(req, res, next) {
    try {
        let leagues = await db.League.find().sort({createdAt: "desc"});
        return res.status(200).json(leagues);
    }
    catch(err) {
        return next(err);
    }
};

exports.getLeague = async function(req, res, next) {
    try {
        let league = await db.League.findById(req.params.leagueId);
        return res.status(200).json(league);
    }
    catch(err) {
        return next(err);
    }
};

exports.updateLeague = async function(req, res, next) {
    try {
        let updatedLeague = await db.League.findByIdAndUpdate(req.params.leagueId, req.body);
        return res.status(200).json(updatedLeague);
    }
    catch(err) {
        return next(err);
    }
}

exports.deleteLeague = async function(req, res, next) {
    try {
        let foundLeague = await db.League.findOneAndDelete(req.params.messageId);
        return res.status(200).json(foundLeague);
      }
      catch(err){
        return next(err);
      }
};
