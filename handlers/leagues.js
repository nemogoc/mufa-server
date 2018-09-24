const db = require("../models");

// getLeagues, getLeague, createLeague, deleteLeague

exports.getLeagues = async function(req, res, next) {
    try {
        let leagues = await db.League.find().sort({createdAt: "desc"});
        return res.status(200).json(leagues);
    }
    catch(err) {
        return next(err);
    }
}


//TODO: implement below
exports.getLeague = async function(req, res, next) {}

exports.createLeague = async function(req, res, next) {}

exports.deleteLeague = async function(req, res, next) {}
