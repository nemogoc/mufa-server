const db = require("../models");

exports.createPlayer = async function(req, res, next) {
  const {username, password, firstName, lastName, zipCode, sex, email, dateOfBirth} = req.body;
  try {
    let player = await db.Player.create({
      username,
      password, //TODO: store this correctly
      firstName,
      lastName,
      zipCode,
      sex,
      email,
      dateOfBirth
    });

    return res.status(201).json(player);
  }
  catch(err) {
    return next(err);
  }
};

exports.getPlayers = async function(req, res, next) {
  try {
    let players = await db.Player.find().sort({lastName: "asc"});
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

exports.updatePlayer = async function(req, res, next) {
  try {
    let foundPlayer = await db.Player.findByIdAndUpdate(req.params.playerId, req.body);
    return res.status(200).json(foundPlayer);
  }
  catch(err) {
    return next(err);
  }
};

exports.deletePlayer = async function(req, res, next) {
  try {
    let deletedPlayer = await db.Player.findByIdAndDelete(req.params.playerId);
    return res.status(200).json(deletedPlayer);
  }
  catch(err){
    return next(err);
  }
};
