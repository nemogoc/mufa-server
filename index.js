require("dotenv").config();
const express = require('express'),
  app = express(),
  bodyParser = require("body-parser"),
  errorHandler = require('./handlers/error'),
  leagueRoutes = require('./routes/leagues'),
  teamRoutes = require('./routes/teams');

const PORT = 8081;

app.use(bodyParser.json());

//routes
app.use("/api/v1/league", leagueRoutes);
app.use("/api/v1/team", teamRoutes);

app.use(errorHandler);

app.listen(PORT, function() {
    console.log(`Server starting on port ${PORT}`);
});
