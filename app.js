// dot env
require('dotenv').config({ silent: true });
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set default static assets folder
app.use(express.static(path.join(__dirname, 'public')));

// This will parse our payload from fetch which is sent as a JSON object
app.use(bodyParser.json());

const apiTweets = require('./routes/tweets');
app.use('/tweets', apiTweets);
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Modular routes

// import router for our API

// map our apiRouter to the '/api' route

app.listen(PORT, () => {
  console.log('tweet tweet!');
});
