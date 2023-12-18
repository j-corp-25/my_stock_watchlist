const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 4000
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/watchlist', require('./routes/watchlistRoutes'))
app.use(errorHandler)
app.listen(port,() => console.log(`Server started on port ${port}`))
