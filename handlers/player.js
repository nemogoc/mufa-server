const db = require("../models");

exports.createPlayer = async function(req, res, next) {
  const {username, password, firstName, lastName, zipCode, sex, email, dob} = req.body;
  try {
    let player = await db.Player.create({
      username,
      password,
      firstName,
      lastName,
      zipCode,
      sex,
      email,
      dob
    });
  }
  catch(err) {
    return next(err);
  }
};

exports.getPlayers = async function(req, res, next) {
  try {
    let players = await db.Player.find().sort({name: "asc"}); //TODO: does this sort? if not, replace with name: 1
    return res.status(200).json(players);
  }
  catch(err) {
    return next(err);
  }
};

exports.getPlayer = async function(req, res, next) {
  try {
    let player = await db.Player.findById(req.params.playerId);
    return res.status(200).json(player);
  }
  catch(err) {
    return next(err);
  }
};

//TODO: convert this to player (and make player routes)
/*
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
*/
