const express = require('express')
const helmet = require("helmet")
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 4000
const app = express()



app.use(helmet)
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/watchlist', require('./routes/watchlistRoutes'))
app.use(errorHandler)
app.listen(port,() => console.log(`Server started on port ${port}`))

connectDB()
