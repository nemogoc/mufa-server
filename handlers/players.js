const db = require("../models"),
  bcrypt = require('bcrypt');

exports.createPlayer = async function(req, res, next) {
  const saltRounds = 10;
  const {username, password, firstName, lastName, zipCode, sex, email, dateOfBirth} = req.body;
  const hash = await bcrypt.hash(password, saltRounds);

  try {
    let player = await db.Player.create({
      username,
      password: hash,
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

exports.login = async function(req, res, next) {
  try {
    let player = await db.Player.findById(req.params.playerId);
    let loggedIn = await checkUser(player._id, req.body.password);
    return res.status(200).json("loggedIn: " + loggedIn);
  }
  catch(err) {
    return next(err);
  }
};

async function checkUser(playerId, password) {
  let player = await db.Player.findById(playerId);

  return await bcrypt.compare(password, player.password);
}
