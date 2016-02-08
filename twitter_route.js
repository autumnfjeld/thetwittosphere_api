exports.mockTweets = mockTweets;

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