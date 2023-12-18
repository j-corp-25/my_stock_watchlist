const express = require('express')
const router = express.Router()
const { getWatchlist } = require('../controllers/watchlistController')


router.get('/', getWatchlist)

router.post('/',(req,res) => {
    res.status(200).json({message: "Create Watchlist"})
})
router.patch('/:id',(req,res) => {
    res.status(200).json({message: `Update Watchlist ${req.params.id}`})
})
router.delete('/:id',(req,res) => {
    res.status(200).json({message: `delete Watchlist ${req.params.id}`})
})



module.exports = router
