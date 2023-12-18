const asyncHandler = require('express-async-handler')
const Watchlist = require('../models/watchlistModel')

// @desc GET watchlists
// @route GET /api/watchlists
// @access Private
const getWatchlist = asyncHandler(async (req, res) => {
  
});

// @desc Create watchlist
// @route POST /api/watchlist
// @access Private
const createWatchlist = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error("Please add a Ticker symbol")
    }
});

// @desc Update watchlists
// @route PATCH /api/watchlists/:id
// @access Private
const updateWatchlist = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "im from the controller update" });
});

// @desc Delete watchlists
// @route DELETE /api/watchlists/:id
// @access Private
const deleteWatchlist = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "im from the controller delete" });
});

module.exports = {
  getWatchlist,
  createWatchlist,
  updateWatchlist,
  deleteWatchlist,
};
