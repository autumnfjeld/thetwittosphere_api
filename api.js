var express = require('express'),
    twitter = require('./twitter_route.js');

var app = express();

var allowCrossDomain = function(req, res, next) {
  //simple CORS handling
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, Authorization, Content-Length, X-Requested-With');
  
  // intercept OPTIONS method
  (req.method !== 'OPTIONS') ? next() : res.send(200);
};
//consider https://www.npmjs.com/package/cors

app.use(allowCrossDomain);

app.get('/api/tweetsbyuser', twitter.getTweetsByUser);
app.post('/api/posttweet', twitter.update);
app.get('/api/mocktweets', twitter.mockTweets);

app.listen(3000, function () {
  console.log('Server listening on', 3000)   //check on localhost:3000/api/routexxx
});