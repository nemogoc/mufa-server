const express = require('express'),
  router = express.Router({ mergeParams: true}),
  { getPlayers, getPlayer, createPlayer, deletePlayer, updatePlayer, login } = require("../handlers/players");


router.route("/")
  .get(getPlayers)
  .post(createPlayer);

router.route("/:playerId")
  .get(getPlayer)
  .put(updatePlayer)
  .delete(deletePlayer);

// router.route("/:playerId/login").post(login); 

module.exports = router;
