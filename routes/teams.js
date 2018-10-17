const express = require('express'),
  router = express.Router({ mergeParams: true}),
  { getTeams, getTeam, createTeam, deleteTeam, updateTeam } = require("../handlers/teams");


router.route("/")
  .get(getTeams)
  .post(createTeam);

router.route("/:teamId")
  .get(getTeam)
  .put(updateTeam)
  .delete(deleteTeam);


module.exports = router;
