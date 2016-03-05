var Twitter= require('twitter-js-client').Twitter,
    util = require('util');

//Public methods
exports.getUserTimeline = getUserTimeline;
exports.getUserProfile = getUserProfile;
exports.mockTweets = mockTweets;
// exports.update = update;

//My own twitter access data for testing
var config = {
  consumerKey: "ATwRHfjXNiI3dSjzAsgFxATM3",
  consumerSecret: "tz1UAZwf754Uovs2Up2lco61etgtheZ3xzCtTeGQhh59zEJ5FH",
  // accessToken: "27513075-ObsIk211WdFcMAiRiLF1gyUSmexKvcgSFGwuuKIYH",
  // accessTokenSecret: "DaB7A57v0UtmgVariGvzVFKeGyVE5SNVeXca9awVMGHwC",  
  // callBackUrl: 'http://something'
  };
  
var twitter = new Twitter(config);

function getUserTimeline(req, res){
  console.log('getUserTimeline:  req.query', util.inspect(req.query));
  twitter.getUserTimeline({ screen_name: req.query.screen_name, count: 10}, errorTimeline, successTimeline);

  function errorTimeline(err, response, body) {
    console.log('ERROR: twitter_route.getUserTimeline(): ', err);
    return res.json(500);
  };

  function successTimeline (data) {
    return res.send(JSON.parse(data));
  };
}

function getUserProfile(req, res){
  console.log('getUserProfile:  req.query', util.inspect(req.query));
  twitter.getUser({screen_name: req.query.screen_name}, errorUserProfile, successUserProfile);
  
  function errorUserProfile(err, response, body) {
    console.log('ERROR: twitter_route.getUserProfile(): ', err);
    return res.json(500);
  };

  function successUserProfile(data) {
    return res.send(JSON.parse(data));
  };  
}

// For Testing
function mockTweets(req, res){
  res.json([
    {
      id_str: "240859602684612608",
      user: {screen_name: 'henri'},
      text: 'node rocks!'
    },
    {
      id_str: "240859602684612699",
      user: {screen_name: 'henri'},
      text: 'yea. a day of sunshine!'
    },
    {
      id_str: "240859602684612700",
      user: {screen_name: 'henri'},
      text: 'rain rain go away, come again another day!'
    },    
  ])  
}
