var express = require('express');

var app = express();

var twitter = require('./twitter_route.js');

app.get('/api/tweetsbyuser', twitter.getTweetsByUser);
app.get('/api/mocktweets', twitter.mockTweets);

app.listen(3000, function () {
  console.log('Server listening on', 3000)
});