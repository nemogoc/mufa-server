const mongoose = require("mongoose");

//TODO: parameterize debug and mongo URL
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost:27017/warbler", {
  keepAlive: true,
});

module.exports.League = require("./league");
