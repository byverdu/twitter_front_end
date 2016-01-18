module.exports = {
  // twitterAPI config values
  twitterAPI: {
    consumer_key:    process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token:    process.env.ACCESS_TOKEN,
    access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
  },

  // API queries values
  tweetUrlAPI: 'statuses/home_timeline',
  tweetQueryAPI: { q: 'byverdu', count: 25 },
  userUrlAPI: 'users/show',
  userQueryAPI: { screen_name: 'byverdu' }
};
