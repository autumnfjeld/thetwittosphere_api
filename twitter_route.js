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
  accessToken: "27513075-ObsIk211WdFcMAiRiLF1gyUSmexKvcgSFGwuuKIYH",
  accessTokenSecret: "DaB7A57v0UtmgVariGvzVFKeGyVE5SNVeXca9awVMGHwC",  
  // callBackUrl: 'http://something'
  };
  
var twitter = new Twitter(config);

function getUserTimeline(req, res){
  var screenName = req.params && req.params.screen_name;  //for testing
  console.log('twitter_route.getUserTimeline: screen_name', screenName);
  twitter.getUserTimeline({ screen_name: screenName, count: 10}, errorTimeline, successTimeline);

  function errorTimeline(err, response, body) {
    console.log('ERROR: twitter_route.getUserTimeline(): [%s]', JSON.parse(err));
    return res.json(500);
  };

  function successTimeline (data) {
    return res.send(JSON.parse(data));
  };
}

function getUserProfile(req, res){
  var screenName = req.params && req.params.screen_name;  //for testing
  console.log('twitter_route.getUserTimeline: screen_name', screenName);  
  twitter.getUser({screen_name: screenName}, errorUserProfile, successUserProfile);

  function errorUserProfile(err, response, body) {
    console.log('ERROR: twitter_route.getUserProfile(): [%s]', err);
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
