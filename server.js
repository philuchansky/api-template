var
  express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  apiRoutes = require('./routes/api.js')

mongoose.connect('mongodb://localhost/song-tribe', (err) => {
  console.log(err || "Connected to MongoDB (song-tribe)")
})

// middleware (will run after a request, but before response):
app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({message: "This is the root route..."})
})

app.use('/songs', apiRoutes)

app.listen(3000, (err) => {
  console.log(err || "Server running on 3000. Boom.")
})
