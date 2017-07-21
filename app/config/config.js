module.exports = {
  // twitterAPI config values
  twitterAPI: {
    consumer_key:    process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token:    process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret:  process.env.TWITTER_ACCESS_TOKEN_SECRET,
  },

  // API queries values
  tweetUrlAPI: 'statuses/home_timeline',
  tweetQueryAPI: { q: 'byverdu', count: 85 },
  userUrlAPI: 'users/show',
  userQueryAPI: { screen_name: 'byverdu' }
};
