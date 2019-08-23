const mongoose = require("mongoose");

mongoose.set("debug", process.env.DEBUG || false);
mongoose.Promise = Promise;
mongoose.connect(process.env.DB_HOST, {
  keepAlive: true,
});

module.exports.League = require("./league");
module.exports.Team = require("./team");
module.exports.Player = require("./player");
