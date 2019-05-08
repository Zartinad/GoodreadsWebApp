const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const goodreads = require('./routes/goodreads')

let port = 8081
app.listen(process.env.PORT || port)
console.log("Active on Port: " + port)

app.get('/search/:query', goodreads.search)