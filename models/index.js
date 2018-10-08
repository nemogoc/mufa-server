const mongoose = require("mongoose");

//TODO: parameterize debug and mongo URL
mongoose.set("debug", process.env.DEBUG || false);
mongoose.Promise = Promise;
mongoose.connect(process.env.DB_HOST, {
  keepAlive: true,
});

module.exports.League = require("./league");
