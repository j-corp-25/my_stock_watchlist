const express = require("express");
const router = express.Router();
const {
  getWatchlist,
  createWatchlist,
  updateWatchlist,
  deleteWatchlist,
} = require("../controllers/watchlistController");

router.route("/").get(getWatchlist).post(createWatchlist);
router.route("/:id").delete(deleteWatchlist).patch(updateWatchlist);

module.exports = router;
