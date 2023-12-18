// @desc GET watchlists
// @route GET /api/watchlists
// @access Private
const getWatchlist = (req, res) => {
  res.status(200).json({ message: "im from the get all controller" });
};

// @desc Create watchlists
// @route POST /api/watchlists
// @access Private
const createWatchlist = (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error("Please add a Ticker symbol")
    }
};

// @desc Update watchlists
// @route PATCH /api/watchlists/:id
// @access Private
const updateWatchlist = (req, res) => {
  res.status(200).json({ message: "im from the controller update" });
};

// @desc Delete watchlists
// @route DELETE /api/watchlists/:id
// @access Private
const deleteWatchlist = (req, res) => {
  res.status(200).json({ message: "im from the controller delete" });
};

module.exports = {
  getWatchlist,
  createWatchlist,
  updateWatchlist,
  deleteWatchlist,
};
