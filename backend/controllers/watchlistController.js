const asyncHandler = require("express-async-handler");
const Watchlist = require("../models/watchlistModel");

// @desc GET watchlists
// @route GET /api/watchlists
// @access Private
const getWatchlist = asyncHandler(async (req, res) => {
  const watchlists = await Watchlist.find();
  res.status(200).json(watchlists);
});

// @desc Create watchlist
// @route POST /api/watchlist
// @access Private
const createWatchlist = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Watchlist name cannot be empty");
  }
  const watchlist = await Watchlist.create({
    name: req.body.name,
    description: req.body.description,
    tickers: req.body.tickers,
  });

  res.status(200).json(watchlist);
});

// @desc Update watchlists
// @route PATCH /api/watchlists/:id
// @access Private
const updateWatchlist = asyncHandler(async (req, res) => {
  const watchlist = await Watchlist.findById(req.params.id);

  if (!watchlist) {
    res.status(400);
    throw new Error("Watchlist not found");
  }

  const updatedWatchlist = await Watchlist.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedWatchlist);
});

// @desc Delete watchlists
// @route DELETE /api/watchlists/:id
// @access Private
const deleteWatchlist = asyncHandler(async (req, res) => {
  const watchlist = await Watchlist.findById(req.params.id);

  if (!watchlist) {
    res.status(400);
    throw new Error("Watchlist not found");
  }
  await Watchlist.findByIdAndDelete(req.params.id);

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getWatchlist,
  createWatchlist,
  updateWatchlist,
  deleteWatchlist,
};
