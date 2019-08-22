const express = require('express'),
  router = express.Router({ mergeParams: true}),
  { getPlayers, getPlayer, createPlayer, deletePlayer, updatePlayer } = require("../handlers/players");


router.route("/")
  .get(getPlayers)
  .post(createPlayer);

router.route("/:playerId")
  .get(getPlayer)
  .put(updatePlayer)
  .delete(deletePlayer());


module.exports = router;
