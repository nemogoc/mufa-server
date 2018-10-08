const express = require('express'),
  router = express.Router({ mergeParams: true}),
  { getTeams, getTeam, createTeam, deleteTeam } = require("../handlers/teams");


router.route("/")
  .get(getTeams)
  // .post(createTeam);

router.route("/:teamId")
  .get(getTeam)
  // .delete(deleteTeam);


module.exports = router;
