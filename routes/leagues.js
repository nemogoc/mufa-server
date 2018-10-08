const express = require('express'),
  router = express.Router({ mergeParams: true}),
  { getLeagues, getLeague, createLeague, deleteLeague } = require("../handlers/leagues");


router.route("/")
  .get(getLeagues)
  .post(createLeague);

router.route("/:leagueId")
  .get(getLeague)
  .delete(deleteLeague);


module.exports = router;
