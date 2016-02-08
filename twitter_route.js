var twitterAPI = require('node-twitter-api'),
    util = require('util');

//Public methods
exports.mockTweets = mockTweets;
exports.getTweetsByUser = getTweetsByUser;
exports.update = update;

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
    console.log('verified credentials for: ' + data["screen_name"]);
  }
});

//testing with http://localhost:3000/api/tweetsbyuser?screen_name=7x7
function getTweetsByUser(req, res){
  console.log('req', util.inspect(req.query));
  var screen_name = req.query.screen_name;
  // res.json('heard that query ' + screen_name);

  // twitter.getTimeline("user",
  twitter.statuses("show",
      {screen_name: screen_name},
      config.acessToken,
      config.accessTokenSecret,
      function(err, data, res) {
        if (err) {
          console.log('ERROR: twitter.statuses: ', err);
        } else {
          console.log('all good', data)
          res.json(data);
        }
      }
    );
  // getTweets(screen_name, function(data){
  //   console.log('got tweets',data);
  //   res.json(data);
  // });
}

function update(req, res){
  console.log('update(): req', util.inspect(req.query));
  var screen_name = req.query.screen_name;
  twitter.statuses("update", {
      status: "Hello world again!"
    },
    config.accessToken,
    config.accessTokenSecret,
    function(error, data, response) {
      if (error) {
        console.log('ERROR: update', error); 
      } else {
        res.json(data);
      }
    }
  );
}

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

//Helper methods
// function getTweets(screen_name, callback){
//   twitter.getTimeline("user",
//     {screen_name: screen_name},
//     config.acessToken,
//     config.accessTokenSecret,
//     function(err, data, res) {
//       if (err) {
//         console.log('ERROR:twitter.statuses:', err);
//       } else {
//         console.log('all good', data)
//         callback(data);
//       }
//     }
//   );
// }
