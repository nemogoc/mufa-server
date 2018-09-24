const express = require('express'),
app = express(),
bodyParser = require("body-parser"),
routes = require('./routes/routes');

const PORT = 8081;

app.use(bodyParser.json());

//routes
app.use("/api/v1", routes);

app.listen(PORT, function() {
    console.log(`Server starting on port ${PORT}`);
});
