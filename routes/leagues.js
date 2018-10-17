const express = require('express'),
  router = express.Router({ mergeParams: true}),
  { getLeagues, getLeague, createLeague, deleteLeague, updateLeague } = require("../handlers/leagues");


router.route("/")
  .get(getLeagues)
  .post(createLeague);

router.route("/:leagueId")
  .get(getLeague)
  .put(updateLeague)
  .delete(deleteLeague);


module.exports = router;
