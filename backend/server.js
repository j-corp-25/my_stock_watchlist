const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 4000
const app = express()



app.use('/api/watchlist', require('./routes/watchlistRoutes'))

app.listen(port,() => console.log(`Server started on port ${port}`))
