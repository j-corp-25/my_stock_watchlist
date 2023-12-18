const mongoose = require("mongoose");

const watchlistSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, " Watchlist name cannot be blank"],
    },
    description: String,
    tickers: {
      type: [String],
      required: [true, "Please add at least one ticker symbol"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Watchlist",watchlistSchema)
