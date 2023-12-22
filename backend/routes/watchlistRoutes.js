const express = require("express");
const router = express.Router();
const {
  getWatchlist,
  createWatchlist,
  updateWatchlist,
  deleteWatchlist,
} = require("../controllers/watchlistController");
const { protect } = require("../middleware/authMiddleware");

router
  // create and read watchlists routes
  .route("/")
  .get(protect, getWatchlist)
  .post(protect, createWatchlist);

  // update and delete watchlists routes
router
  .route("/:id")
  .delete(protect, deleteWatchlist)
  .patch(protect, updateWatchlist);

module.exports = router;
