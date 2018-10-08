const db = require("../models");

exports.getTeams = async function(req, res, next) {
  try {
    let teams = await db.Team.find().sort({name: "asc"}); //TODO: does this sort? if not, replace with name: 1
    return res.status(200).json(leagues);
  }
  catch(err) {
    return next(err);
  }
};

exports.getTeam = async function(req, res, next) {
  try {
    let team = await db.Team.findById(req.params.teamId);
    return res.status(200).json(team);
  }
  catch(err) {
    return next(err);
  }
};

exports.createTeam = async function(req, res, next) {
  //TODO: implement team creation
  // const {year, season, weekday} = req.body;
  // try {
  //   let league = await db.League.create({
  //     year,
  //     season,
  //     weekday,
  //     teams: [],
  //     locations: []
  //   });
  //TODO: add team to league. maybe in model like with messages? (if so, can't use findOneAndDelete?)
  //   return res.status(200).json(league);
  // }
  // catch(err) {
  //   return next(err);
  // }
};

exports.deleteTeam = async function(req, res, next) {
  try {
    let foundTeam = await db.Team.findOneAndDelete(req.params.teamId);
//TODO: remove team from league. How does this affect scheduling?
    return res.status(200).json(foundTeam);
  }
  catch(err){
    return next(err);
  }
};
