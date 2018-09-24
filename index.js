const express = require('express'),
app = express(),
bodyParser = require("body-parser"),
leagueRoutes = require('./routes/leagues');

const PORT = 8081;

app.use(bodyParser.json());

//routes
app.use("/api/v1/league", leagueRoutes);

app.listen(PORT, function() {
    console.log(`Server starting on port ${PORT}`);
});
