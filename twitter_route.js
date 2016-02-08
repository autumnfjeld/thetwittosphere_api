var twitterAPI = require('node-twitter-api');

exports.mockTweets = mockTweets;

var twitter = new twitterAPI({
  consumerKey: "ATwRHfjXNiI3dSjzAsgFxATM3",
  consumerSecret: "tz1UAZwf754Uovs2Up2lco61etgtheZ3xzCtTeGQhh59zEJ5FH"
  // callback: 'http://something'
});

//My own twitter access data for testing
var config = {
  accessToken: "27513075-ObsIk211WdFcMAiRiLF1gyUSmexKvcgSFGwuuKIYH",
  accessTokenSecret: "DaB7A57v0UtmgVariGvzVFKeGyVE5SNVeXca9awVMGHwC",  
};

twitter.verifyCredentials(config.accessToken, config.accessTokenSecret, function(error, data, response) {
  if (error) {
    console.log('ERROR: verifyCredentials', error);
  } else {
    console.log(data["screen_name"], data);
  }
});

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