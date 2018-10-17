const db = require("../models");

exports.createTeam = async function(req, res, next) {
  const {name, logoUrl, rating, wins, losses, scheduleId, jerseyColor, bio} = req.body;
  try {
    let team = await db.Team.create({
      name,
      logoUrl,
      rating,
      wins: 0,
      losses: 0,
      scheduleId,
      jerseyColor,
      bio
    });
  // TODO: add team to league. maybe in model like with messages? (if so, can't use findOneAndDelete?)
    return res.status(201).json(team);
  }
  catch(err) {
    return next(err);
  }
};

exports.getTeams = async function(req, res, next) {
  try {
    let teams = await db.Team.find().sort({name: "asc"}); //TODO: does this sort? if not, replace with name: 1
    return res.status(200).json(teams);
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

exports.updateTeam = async function(req, res, next) {
  try {
    let foundTeam = await db.Team.findByIdAndUpdate(req.params.teamId, req.body);
    return res.status(200).json(foundTeam);
  }
  catch(err) {
    return next(err);
  }
}

exports.deleteTeam = async function(req, res, next) {
  try {
    let deletedTeam = await db.Team.findByIdAndDelete(req.params.teamId);
//TODO: remove team from league. How does this affect scheduling?
    return res.status(200).json(deletedTeam);
  }
  catch(err){
    return next(err);
  }
};
