const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const users = require('./users')
const publications = require('./publications')

mongoose.connect('mongodb://root:secret@ds121248.mlab.com:21248/social-network')
mongoose.connection.on('open', () => console.log('Connected to MongoDB'))

const app = express()

// Middlewares
app.use(bodyParser.json())

// Routes
app.use(users)

app.listen(process.env.PORT || 4000, () => console.log('Express server runing.'))
